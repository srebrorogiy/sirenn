<template>
  <div class="categoty-movies">
    <div class="container-flex">
      <div class="container-flex">
        <div class="container">
          <div class="header__container">
            <Menu />
            <SearchItem />
          </div>
          <PromoBanner />
        </div>
      </div>

      <router-link to="/serials">сериалы</router-link>
      <!-- <h3 v-on:click="getAllMovies">все фильмы</h3> -->
      <!-- <P>{{movie}}</P> -->

      <div class="container-category-mov-items1">
        <div v-for="item in movie" :key="item.id">
          <p>{{ item.title }}</p>
          <!-- <p>{{ item.rank }}</p> -->
          <img :src="item.image" alt="poster" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import Component from "vue-class-component";
import MenuBlock from "./Menu.vue";
import SearchBlock from "./SearchItem.vue";

const MoviesProps = Vue.extend({
  props: {
    movie: Object,
  },
});

@Component({
  components: {
    MenuBlock,
    SearchBlock,
  },
})
export default class AllMovies extends MoviesProps {
  name = "categoryMovies";
  message = "pizdec";

  getAllMovies() {
    alert(this.message);
  }

  // movieItem: any =
  data() {
    return {
      movie: [],
    };
  }

  mounted() {
    axios
      .get("https://imdb-api.com/en/API/Top250Movies/k_12itu7xr")
      .then((response) => (this.movie = response.data.items));
    return this.movie;
  }
}
</script>

<style lang="scss">
.container-category-mov-items1 {
  display: flex;
  flex-direction: column;
}
</style>
