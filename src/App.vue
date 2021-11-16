<template>
  <div id="app">
    <b-jumbotron header="Platanus" lead="상황에 맞는 속담, 의미, 사용법을 알아가세요.">
      <p>powered by Wisdomify</p>
    </b-jumbotron>

    <search-bar />

    <div id="content">
      <div v-for="(wisdom, idx) in wisdoms" v-bind:key="idx">
        <wisdom-card
            :wisdom="wisdom"
            :def="defs[wisdom]"
            :score=scores[idx]
            :egs="egs[wisdom]"
        />
      </div>
    </div>
    <b-breadcrumb
        :items="footer"
        style="position: absolute; bottom: 0;"
    />
  </div>
</template>

<script>
import SearchBar from "@/components/searchBar";
import WisdomCard from "@/components/wisdomCard";
export default {
  name: 'App',
  components: {
    WisdomCard,
    SearchBar

  },
  data() {
    return {

      footer: ["designed & developed by Jongyoon Kim"]
    }
  },
  computed: {
    wisdoms() {return this.$store.state.wisdomStory.wisdoms},
    scores() {return this.$store.state.wisdomStory.scores},
    defs() {return this.$store.state.wisdomStory.defs},
    egs() {return this.$store.state.wisdomStory.egs},
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 3%;
  margin-right: 3%;
  position: relative;
  min-height: 90vh;
}

#content {
  padding-bottom: 3.5rem
}
</style>
