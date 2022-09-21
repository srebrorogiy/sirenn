<template>
  <div class="categoty-serials">
    <div class="container-category-seri">
      <h3>
        <router-link :to="{ name: 'itemTest' }"> все сериалы </router-link>
      </h3>
      <div v-for="item2 in itemSerials" :key="item2.id">
        <p>{{ item2.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Serials extends Vue {
  name = "categorySerials";

  itemSerials: any = null;

  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/top_rated?_limit=10&api_key=e765f2fdbe2f58437bef4c2f82b039ce&language=ru&page=1"
      )
      .then((response) => (this.itemSerials = response.data.results));
    return this.itemSerials;
  }
}
</script>
