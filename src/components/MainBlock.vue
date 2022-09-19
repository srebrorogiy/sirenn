<template>
  <div class="block-content">
    <div class="container">
      <Suggestions />
      <Wishlist />
      <CategoryMovies />
      <CategorySerials />
      <Genres />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Suggestions from "./Suggestions.vue";
import Wishlist from "./Wishlist.vue";
import CategoryMovies from "./CategoryMovies.vue";
import CategorySerials from "./CategorySerials.vue";
import Genres from "./Genres.vue";

@Component({
  components: {
    Suggestions,
    Wishlist,
    CategoryMovies,
    CategorySerials,
    Genres,
  },
})
export default class MainBlock extends Vue {
  name = "blockContent";
}
</script>

<style lang="scss">
.block-content {
  flex: 1;
}

.container {
  width: 1140px;
}
</style>
