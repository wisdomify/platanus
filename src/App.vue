<template>
  <div id="app">
    <b-jumbotron header="Platanus" lead="상황에 맞는 속담, 의미, 사용법을 알아가세요.">
      <p>powered by Wisdomify</p>
    </b-jumbotron>

    <search-bar />
<!--    <div v-for="data">-->
<!--      -->
<!--    </div>-->
    <wisdom-card
        wisdom="가는 날이 장날"
        def="해야할 일이 있을 때 하필 일어남"
        :egs="['가는 날이 장날이라더니 블람ㄴ이ㅏㅓㅑㅣㅁ넝ㅎ', '오늘 도서관에 가려고 ㅁㄴ이ㅏ버ㅣㅏㄹ 가는 날이 장날이네.']"
    />
    <wisdom-card
        wisdom="가는 날이 장날"
        def="해야할 일이 있을 때 하필 일어남"
        :egs="['가는 날이 장날이라더니 블람ㄴ이ㅏㅓㅑㅣㅁ넝ㅎ', '오늘 도서관에 가려고 ㅁㄴ이ㅏ버ㅣㅏㄹ 가는 날이 장날이네.']"
    />
    <wisdom-card
        wisdom="가는 날이 장날"
        def="해야할 일이 있을 때 하필 일어남"
        :egs="['가는 날이 장날이라더니 블람ㄴ이ㅏㅓㅑㅣㅁ넝ㅎ', '오늘 도서관에 가려고 ㅁㄴ이ㅏ버ㅣㅏㄹ 가는 날이 장날이네.']"
    />

    <b-breadcrumb
        :items="footer"
        style="margin-top: 5%"
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
      wikiObj: null,
      isResult: false,
      searchQuery: '',
      footer: ["designed & developed by Jongyoon Kim"]
    }
  },
  computed: {

  },
  ready: function() {
  },
  methods: {
    removeSearchQuery: function() {
      this.searchQuery = '';
      this.isResult = false;
    },
    submitSearch: function() {
      var reqURL = "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrnamespace=0&exsentences=1&exintro&explaintext&exlimit=max&prop=extracts&gsrlimit=10&gsrsearch="+this.searchQuery+"&format=json";

      this.$http.jsonp(reqURL).then(function(response) {
        this.wikiObj = response.data.query.pages;
        this.isResult = true;
      }, function(response) { /* fail response msg */
        console.log(response);
      });
    }
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
}
</style>
