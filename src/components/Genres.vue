<template>
  <div class="block-suggest">
    <div class="container">
      <section>
        <h2>По жанрам</h2>
        <div class="styles_carousel">
          <div class="container_carousel-flex">
            <div v-for="currency in info" :key="currency.id" class="currency">
              <!-- <img v-bind:src="currency.image" class="style-poster" /> -->
              <div class="style_title">
                <p>{{ currency.name }}</p>
                <!-- <p>{{ info }}</p> -->
              </div>
            </div>
            <button class="carousel-buttonRight">
              <span class="styles_iconRight">prev</span>
            </button>
            <button class="carousel-buttonLeft">
              <span class="styles_iconLeft">next</span>
            </button>
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
export default class GenresBlock extends Vue {
  name = "blockSuggest";

  // eslint-disable-next-line no-undef
  info: any = null;
  // poster: any = poster;

  mounted() {
    axios
      // .get("https://imdb-api.com/en/API/InTheaters/k_12itu7xr")
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=e765f2fdbe2f58437bef4c2f82b039ce&language=ru"
      )
      .then((response) => (this.info = response.data.genres));
    return this.info;
  }

  genresMovies() {
    let genresMoviesArray = [];
  }
}
</script>

<style lang="scss">
h2 {
  margin-top: 30px;
  margin-bottom: 20px;
}
section {
  // background-color: rgb(255, 246, 248);
  margin: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  // border-radius: 10px;
  // box-shadow: inset 5em 1em gold;
  // box-shadow: 7px 5px 5px rgb(210, 193, 255);
}
.container_carousel-flex {
  display: flex;
  flex-direction: row;
  // align-items: center;
  // justify-content: space-between;
  // flex-wrap: wrap;
  // overflow-wrap:break-word;
  overflow-block: hidden;
  // .currency {
  //   margin-right: 20px;
  //   margin-bottom: 10px;
  //   text-align: left;
  //   display: inline-block;
  //   flex-direction: column;
  //   .style_title {
  //     align-items: center;
  //     display: block;
  //     width: 140px;
  //   }
  // .style-poster {
  //   border-radius: 5px;
  //   top: 0;
  //   bottom: 0;
  //   // position: relative;
  //   width: 140px;
  //   min-width: 140px;
  //   height: auto;
  // }
}
// }
</style>
