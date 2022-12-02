<template>
  <div class="search-item">
    <div class="search-item_container">
      <form class="search-input-block">
        <div class="flex_search-item">
          <input
            class="search-input"
            type="text"
            placeholder="Фильмы, сериалы"
            v-model="searchValue"
          />
          <span class="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 
                1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 
                1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 
                6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import Component from "vue-class-component";

const SearchItem = Vue.extend({
  props: {
    movies: [],
    genres: [],
  },
});

@Component({})
export default class SearchBlock extends SearchItem {
  name = "SearchItem";
  searchValue = "";

  mounted() {
    axios
      .get("https://imdb-api.com/en/API/SearchMovie/k_12itu7xr/")
      .then((response) => (this.movies = response.data.items));
    return this.movies;
  }
}
</script>

<style lang="scss">
.search-item_container {
  width: 340px;
  .search-input-block {
    .flex_search-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      position: relative;
      input {
        width: 340px;
        padding: 10px;
        border-radius: 5px;
      }
      .search-button {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0.8rem;
        width: 1rem;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
