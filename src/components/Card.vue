<template>
    <div class="container-card"></div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import Component from "vue-class-component";
import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";

@Component({
  components: {
    SplitCarousel,
    SplitCarouselItem,
  },
})
export default class Serials extends Vue {
  name = "categorySerials";

  itemSerials: any = null;
  // data() {
  //   return {
  //     itemSerials: [],
  //   };
  // }

  getSerials() {
    axios
      .get("https://imdb-api.com/ru/API/Top250TVs/k_12itu7xr")
      .then((response) => (this.itemSerials = response.data.items));
    return this.itemSerials;
  }

  mounted() {
    this.getSerials();
  }
}
</script>

<style lang="scss"></style>
