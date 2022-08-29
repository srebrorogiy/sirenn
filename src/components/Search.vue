<template>
  <div class="search-item">
    <div class="search-item_container">
        <form class="search-input-block">
          <div class="flex_search-item">
            <input
              class="search-input"
              type="text"
              placeholder="Фильмы, сериалы"
            />
            <div class="search-button">
              <button>Искать</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class SearchBlock extends Vue {
  name = "searchItem";

  methods: {
    getMovies();
  };
}
</script>

<style lang="scss">
.search-item_container {
  width: 340px;
    .search-input-block {
      //border-radius: 5px;
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
      }
    }
}


</style>
