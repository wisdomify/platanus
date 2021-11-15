<template>
  <div id="wisdomCard">
    <div v-if="loading != null">
      <b-skeleton-wrapper :loading="loading">
        <template #loading>
          <b-card>
            <b-skeleton animation="throb" width="85%"></b-skeleton>
            <b-skeleton animation="throb" width="55%"></b-skeleton>
            <b-skeleton animation="throb" width="70%"></b-skeleton>
          </b-card>
        </template>

        <b-card>
          <b-card-title>
            {{ wisdom }} ({{ Math.round(score*100) }}%)
          </b-card-title>
          <b-card-sub-title style="margin-top: 1.5%; margin-bottom: 1.5%">
            {{ def }}
          </b-card-sub-title>

          <b-card-body>사용 용례</b-card-body>
          <b-card-text v-for="(eg, idx) in egs" :key="idx">
            용례 {{ idx+1 }}: "{{ eg }}"
          </b-card-text>

        </b-card>
      </b-skeleton-wrapper>
    </div>
  </div>
</template>

<script>

export default {
  name: 'wisdomCard',
  components: {

  },
  props: {
    wisdom: String,
    def: String,
    score: Number,
    egs: Array
  },
  data() {
    return {

    }
  },
  computed: {
    loading() {return this.$store.state.wisdomStory.loading},
  },
  ready: function() {
  },
  methods: {

  }
}
</script>

<style>
#wisdomCard {
  margin-top: 1%;
  margin-bottom: 1%;
}

</style>
