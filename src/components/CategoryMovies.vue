<template>
  <div class="categoty-movies">
    <div class="container-category-mov">
      <!-- <img v-if="" :src="" alt="" /> -->
      <h3 v-on:click="getAllMovies">все фильмы</h3>
      <div v-for="item in movie" :key="item.id">
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import Component from "vue-class-component";

const MoviesProps = Vue.extend({
  props: {
    movie: Object,
  },
});

@Component
export default class Movies extends MoviesProps {
  name = "categoryMovies";
  message = "pizdec";

  getAllMovies() {
    alert(this.message);
  }

  // movieItem: any =

  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=e765f2fdbe2f58437bef4c2f82b039ce&language=en-US&page=1"
      )
      .then((response) => (this.movie = response.data.results));
    return this.movie;
  }
}
</script>
