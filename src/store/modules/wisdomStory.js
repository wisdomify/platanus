import axios from 'axios'

export default {
    namespaced: true,
    state: {
        loading: null,
        sent: '',
        wisdoms: [],
        scores: [],

        defs: {},
        egs: {}
    },
    getters: {
        GET_SENT: (state) => {return state.sent},
        GET_WISDOMS: (state) => {return state.wisdoms},
        GET_SCORES: (state) => {return state.scores},
        GET_DEFS: (state) => {return state.defs},
        GET_EGS: (state) => {return state.egs},
    },
    mutations: {
        CLEAR_SEARCH: (state) => {
            state.loading = null
            state.sent = ''
            state.wisdoms = []
            state.scores = []
            state.defs = {}
            state.egs = {}
        },
        SET_LOADING: (state, V) => {state.loading = V},
        SET_SENT: (state, V) => {state.sent = V},
        SET_WISDOMS: (state, V) => {state.wisdoms = V},
        SET_SCORES: (state, V) => {state.scores = V},
        SET_DEFS: (state, V) => {state.defs = V},
        SET_EGS: (state, V) => {state.egs = V},
    },
    actions: {
        INFER: async ({commit, state}) => {
            commit('SET_LOADING', true)

            let wisdom_url = process.env.VUE_APP_WISDOM_API
            let params = {
                "sent": state.sent,
                "size": 10
            }
            await axios.get(wisdom_url, {params: params})
                .then(function (response) {
                    const inferResult = response.data
                    const scores = inferResult[1].map(v => Math.round(v*100)).filter(v => v !== 0)
                    commit('SET_WISDOMS', inferResult[0].slice(0, scores.length))
                    commit('SET_SCORES', scores)
                })

            let story_url = process.env.VUE_APP_STORY_API
            var egs_dict = {}
            var defs_dict = {}
            for (let i = 0; i < state.wisdoms.length; i++) {
                let params = {"wisdom": state.wisdoms[i]}

                await axios.get(story_url+ 'egs/', {params: params})
                    .then(function (response) {
                        egs_dict[state.wisdoms[i]] = response.data.map(v => v['highlight'])
                    })

                await axios.get(story_url+ 'defs/', {params: params})
                    .then(function (response) {
                        const curDefs = response.data
                        const randomDef = curDefs[Math.floor(Math.random() * curDefs.length)];
                        defs_dict[state.wisdoms[i]] = randomDef
                    })

            }
            commit('SET_EGS', egs_dict)
            commit('SET_DEFS', defs_dict)
            commit('SET_LOADING', false)

            console.log(state.wisdoms)
            console.log(state.scores)
            console.log(state.defs)
        },

    },

}
