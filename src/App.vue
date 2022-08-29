<script lang="ts">
//import Vue from 'vue';
import { Component, Vue } from 'vue-property-decorator';
import MainWrapper from './components/MainWrapper.vue';

@Component ({
    components: {
      MainWrapper,
    }
})
export default class Test extends Vue {
  message: string = 'Films'
}

</script>
<template>
  <div class="app">
    {{ message }}
    <MainWrapper />
  </div>

</template>