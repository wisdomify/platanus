<template>
  <div id="searchBar">
    <b-input-group class="mt-3">
      <b-input-group-prepend>

      </b-input-group-prepend>
      <b-form-input
          v-model="text"
          placeholder="지금 생각나지 않는 속담? 상황을 입력해보세요!" />
      <b-input-group-append>
        <b-button variant="outline-success">
          <b-icon icon="search"></b-icon>
        </b-button>
      </b-input-group-append>
    </b-input-group>

  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      text: ''
    }
  }
}
</script>

<style>
#searchBar {
  margin-top: 7%;
  margin-bottom: 2%;
}
</style>
