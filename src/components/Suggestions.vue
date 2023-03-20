<template>
  <div class="block-suggest">
    <div class="container">
      <!-- <section> -->
      <h2>Сейчас в кино</h2>
      <div class="styles_carousel">
        <div class="container_carousel-flex">
          <split-carousel
            v-bind:autoplay="false"
            v-bind:item-width="160"
            v-bind:height="300"
            :display-amount="5"
            class="slide_serials"
          >
            <split-carousel-item
              v-for="currency in info.slice(0, 14)"
              :key="currency.id"
            >
              <img :src="currency.image" class="style-poster" />
              <p class="container__title">{{ currency.title }}</p>
            </split-carousel-item>
          </split-carousel>
        </div>
      </div>
      <!-- </section> -->

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
import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";

@Component({
  components: {
    SplitCarousel,
    SplitCarouselItem,
  },
})
export default class SuggestBlock extends Vue {
  name = "blockSuggest";
  info: any = [];
  // data() {
  //   return {
  //     info: [],
  //   };
  // }

  suggestFilms() {
    axios
      .get("https://imdb-api.com/ru/API/InTheaters/k_12itu7xr")
      .then((response) => (this.info = response.data.items));
    return this.info;
  }

  mounted() {
    this.suggestFilms();
    if (localStorage.getItem("info")) {
      try {
        this.info = JSON.parse(localStorage.getItem("info")!);
      } catch (e) {
        localStorage.removeItem("info");
      }
    }
  }
}
</script>

<style lang="scss">
h1 {
  margin-top: 40px;
  margin-bottom: 30px;
}
h2 {
  margin-top: 20px;
  margin-bottom: 20px;
}
section {
  margin: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 30px;
  padding-bottom: 20px;
}
.container_carousel-flex {
  display: flex;
  flex-direction: row;
  //align-items: center;
  justify-content: center;
  align-items: center;
  // flex-wrap: wrap;
  // overflow-wrap:break-word;
  overflow-block: hidden;
  margin-left: 20px;
  .currency {
    margin-bottom: 10px;
    text-align: left;
    display: inline-block;
    flex-direction: column;
    // .style_title {
    //   align-items: center;
    //   display: block;
    //   width: 140px;
    // }
    .style-poster {
      border-radius: 5px;
      top: 0;
      bottom: 0;
      width: 140px;
      min-width: 140px;
      height: 300px;
    }
  }
}
</style>
