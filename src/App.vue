eslint-disable
<script lang="ts">
//import Vue from 'vue';
import { Component, Vue } from "vue-property-decorator";
import MainWrapper from "./components/MainWrapper.vue";
import Test from "./components/TEST.vue";

interface MovieItem {
  text: string;
}

@Component({
  components: {
    MainWrapper,
    Test,
  },
})
export default class Main extends Vue {
  message = "Films";
}
</script>

<template>
  <div id="app">
    <!-- <MainWrapper /> -->
    <TEST />
    <router-view />
  </div>
</template>
