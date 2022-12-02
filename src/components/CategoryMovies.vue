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
    <div class="container-category-mov-items">
      <div
        v-for="item in itemMovies.slice(0, 14)"
        :key="item.id"
        class="item-mov"
      >
        <img :src="item.image" alt="poster" class="style-poster" />
        <p>{{ item.title }}</p>
        <!-- <p>{{ item.rank }}</p> -->
      </div>
    </div>
    <!-- </section> -->
    <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import Component from "vue-class-component";

const MoviesProps = Vue.extend({
  props: {
    itemMovies: Object,
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
  data() {
    return {
      itemMovies: [],
    };
  }

  mounted() {
    axios
      .get("https://imdb-api.com/en/API/Top250Movies/k_12itu7xr")
      .then((response) => (this.itemMovies = response.data.items));
    return this.itemMovies;
  }
}
</script>

<style lang="scss">
.container-category-mov-items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
}
</style>
