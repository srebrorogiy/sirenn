<template>
  <div class="block-suggest">
    <div class="container">
      <h2>Movie suggestions</h2>

      <section>
        <h2>Top250Movies</h2>
        <div class="styles_carousel">
          <div class="container_carousel-flex">
            <div v-for="currency in info" class="currency">
              <p>{{ currency.fullTitle }}</p>
              <img v-bind:src="currency.image" class="style-poster" />
            </div>
          </div>
        </div>
      </section>

      <!-- <div v-for="currency in info"> -->
      <!-- <img v-bind:src="'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7015_AL_.jpg'" > -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import axios, { AxiosResponse } from "axios";

@Component({})
export default class SuggestBlock extends Vue {
  name = "blockSuggest";

  info: any = null;
  // poster: any = poster;

  mounted() {
    axios
      .get("https://imdb-api.com/en/API/Top250Movies/k_12itu7xr")
      .then((response) => (this.info = response.data.items));
    return this.info;
  }
}
</script>

<style lang="scss">
.container_carousel-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .style-poster {
    top: 0;
    bottom: 0;
    position: relative;
    width: 100%;
    height: auto;
  }
}
</style>
