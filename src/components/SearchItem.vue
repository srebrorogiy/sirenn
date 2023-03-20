<template>
  <div class="search-item">
    <div class="search-item_container">
      <form class="search-input-block">
        <div class="flex_search-item">
          <div class="search-itemflex">
            <input
              class="search-input"
              type="text"
              placeholder="Фильмы, сериалы"
              v-model="search"
            />
            <div class="result">
              <div
                class="result__styles"
                v-for="movie in searchValue"
                :key="movie.id"
              >
                <span class="result__styles-item">
                  {{ movie.title }}
                </span>
                <div>
                  <img :src="movie.image" class="result__styles-image" />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" value="" class="search-button">
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
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import Component from "vue-class-component";

// const SearchItem = Vue.extend({
//   props: {
//     movies: [],
//     genres: [],
//   },
// });

@Component({})
export default class SearchBlock extends Vue {
  name = "SearchItem";
  items: any = [];
  search = "";

  get searchValue() {
    // return this.items.filter(
    //   (item) => item.title.toLowerCase().indexOf(this.search) !== -1
    // );
    // }
    if (this.search) {
      return this.items.filter((item) => {
        return item.title.toLowerCase().startsWith(this.search);
      });
    } else {
      return [0];
    }
  }
  mounted() {
    this.searchValue();
  }

  beforeMount() {
    axios
      .get("https://imdb-api.com/ru/API/Top250TVs/k_12itu7xr")
      .then((response) => (this.items = response.data.items));
    return this.items;
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
      .search-itemflex {
        flex-direction: column;
        input {
          width: 340px;
          padding: 10px;
          border-radius: 10px;
          outline: none;
          border: none;
        }
        // .result::before {
        //   flex-wrap: wrap;
        //   overflow: scroll;
        //   height: 500px;
        //   position: absolute;
        //   background-color: rgb(255, 255, 255);
        //   border-radius: 10px;
        //   top: calc(100% + 6px);
        //   border: 3px;
        //   .result__styles-image {
        //     width: 3rem;
        //     height: 3rem;
        //   }
      }
      .result::after {
        z-index: 1;
        flex-wrap: wrap;
        overflow: scroll;
        height: 500px;
        position: absolute;
        // background-color: rgb(255, 255, 255);
        border-radius: 10px;
        top: calc(100% + 6px);
        border: 3px;
        &__styles {
          margin-top: 10px;
          margin-left: 10px;
          margin-top: 15px;
          &__styles-item {
            margin-top: 10px;
          }
          .result__styles-image {
            width: 3rem;
            height: 3rem;
          }
        }
      }
    }
    .search-button {
      position: relative;
      cursor: pointer;
      bottom: 0;
      top: 0;
      right: 1.7rem;
      // width: 1rem;
      // display: flex;
      // align-items: center;
      // border-style: none;
      border: 0;
      background-color: transparent;
    }
  }
}
// }
</style>
