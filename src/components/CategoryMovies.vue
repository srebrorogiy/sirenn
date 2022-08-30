<template>
  <div class="categoty-movies">
    <div class="container-category-mov">
      <p>фильмы</p>
      <!-- <h2>{{ movie.title }}</h2> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Movies extends Vue {
  name = "categoryMovies";
}
</script>
