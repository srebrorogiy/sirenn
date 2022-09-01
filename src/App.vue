eslint-disable
<script lang="ts">
//import Vue from 'vue';
import { Component, Vue } from "vue-property-decorator";
import MainWrapper from "./components/MainWrapper.vue";

interface MovieItem {
  text: string;
}

@Component({
  components: {
    MainWrapper,
  },
})
export default class Test extends Vue {
  message = "Films";
}
</script>

<template>
  <div id="app">
    <MainWrapper />
  </div>
</template>
