<template>
  <div class="container">
    <!-- <div class="category-movies"> -->
    <!-- <div class="container-category-mov"> -->
    <!-- <img v-if="" :src="" alt="" /> -->
    <!-- <P>{{movie}}</P> -->
    <!-- <section> -->
    <router-link style="text-decoration: none; color: inherit" to="/movies">
      <h3>Все фильмы</h3>
    </router-link>
    <div class="category-movitems">
      <split-carousel
        v-bind:autoplay="false"
        v-bind:item-width="160"
        v-bind:height="300"
        :display-amount="5"
      >
        <split-carousel-item
          v-for="item in itemMovies.slice(0, 14)"
          :key="item.id"
        >
          <img :src="item.image" alt="poster" class="style-poster" />

          <p class="container__title">
            {{ item.title }}
          </p>
        </split-carousel-item>
      </split-carousel>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import Component from "vue-class-component";
import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";

// const MoviesProps = Vue.extend({
// props: {
// itemMovies: Object,
// },
// });

@Component({
  components: {
    SplitCarousel,
    SplitCarouselItem,
  },
})
export default class Movies extends Vue {
  name = "categoryMovies";
  message = "pizdec";

  getAllMovies() {
    alert(this.message);
  }

  itemMovies: any = null;

  data() {
    return {
      itemMovies: [],
    };
  }

  mounted() {
    axios
      .get("https://imdb-api.com/ru/API/Top250Movies/k_12itu7xr")
      .then((response) => (this.itemMovies = response.data.items));
    return this.itemMovies;
  }
}
</script>

<style lang="scss">
.category-movitems {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow-block: hidden;
  margin-left: 20px;
  h3 {
    text-decoration: none;
  }
  .item-mov {
    margin-right: 20px;
    margin-bottom: 10px;
    text-align: left;
    display: inline-block;
    flex-direction: column;
    // .style_title {
    // align-items: center;
    // display: block;
    // width: 140px;
  }
  // .container-title {
  //   overflow-wrap: break-word;
  //   font-size: 15px;
  //   margin-top: 10px;
  //   margin-right: 10px;
  // }
}
</style>
