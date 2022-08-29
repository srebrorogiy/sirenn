<script lang="ts">
//import Vue from 'vue';
import axios, { AxiosResponse } from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import MainWrapper from './components/MainWrapper.vue';

@Component ({
    components: {
      MainWrapper,
    }
})
export default class Test extends Vue {
  message: string = 'Films';
  info: any = null;
  
  mounted() {
    axios
      .get('https://imdb-api.com/en/API/Title/k_12itu7xr/tt1375666')
      .then(response => (this.info = response))
      return this.info
  }
}

</script>
<template>
  <div id="app">
    <h1>Movie title</h1>
    
    {{ info }}
    <MainWrapper />
  </div>

</template>