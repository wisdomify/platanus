<template>
  <div id="wisdomCard">
    <b-card>
      <b-card-title>{{ wisdom }}</b-card-title>
      <b-card-sub-title style="margin-top: 1.5%; margin-bottom: 1.5%">
        {{ def }}
      </b-card-sub-title>

      <b-card-body>사용 용례</b-card-body>
      <b-card-text v-for="(eg, idx) in egs" :key="idx">
        용례 {{ idx+1 }}: "{{ eg }}"
      </b-card-text>
    </b-card>
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
    egs: Array
  },
  data() {
    return {

    }
  },
  computed: {

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
