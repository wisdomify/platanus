import axios from 'axios'

export default {
    namespaced: true,
    state: {
        sent: '',
        wisdoms: [],
        scores: [],
        egs: {}
    },
    getters: {
        GET_SENT: (state) => {return state.sent},
        GET_WISDOMS: (state) => {return state.wisdoms},
        GET_SCORES: (state) => {return state.scores},
        GET_EGS: (state) => {return state.egs},
    },
    mutations: {
        CLEAR_SEARCH: (state) => {
            state.sent = ''
            state.wisdoms = {}
            state.egs = {}
        },

        SET_SENT: (state, V) => {state.sent = V},
        SET_WISDOMS: (state, V) => {state.wisdoms = V},
        SET_SCORES: (state, V) => {state.scores = V},
        SET_EGS: (state, V) => {state.egs = V},
    },
    actions: {
        INFER: async ({commit, state}) => {
            let wisdom_url = process.env.VUE_APP_WISDOM_API
            let body = {
                "sent": state.sent,
                "size": 10
            }
            await axios.get(wisdom_url, {params: body})
                .then(function (response) {
                    const inferResult = response.data
                    commit('SET_WISDOMS', inferResult[0])
                    commit('SET_SCORES', inferResult[1])
                })

            let story_url = process.env.VUE_APP_STORY_API
            var egs_dict = {}
            for (let i = 0; i < state.wisdoms.length; i++) {
                let body = {"wisdom": state.wisdoms[i]}

                await axios.get(story_url, {params: body})
                    .then(function (response) {
                        egs_dict[state.wisdoms[i]] = response.data.map(v => v['highlight'])
                    })
            }
            commit('SET_EGS', egs_dict)
            console.log(state)
        },

    },

}
