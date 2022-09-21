<template>
  <div class="categoty-movies">
    <div class="container-category-mov">
      <!-- <img v-if="" :src="" alt="" /> -->

      <h3 v-on:click="getAllMovies">все фильмы</h3>
      <!-- <P>{{movie}}</P> -->

      <div v-for="item in movie" :key="item.id">
        <p>{{ item.title }}</p>
        <p>{{ item.rank }}</p>
        <img :src="item.image" alt="poster" />
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
      .get("https://imdb-api.com/en/API/Top250Movies/k_12itu7xr")
      .then((response) => (this.movie = response.data.items));
    return this.movie;
  }
}
</script>
