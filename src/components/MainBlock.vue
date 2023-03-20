<template>
  <div class="block-content">
    <div class="container">
      <Suggestions />
      <CategoryMovies />
      <CategorySerials />
      <!-- <Genres /> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Suggestions from "./Suggestions.vue";
import CategoryMovies from "./CategoryMovies.vue";
import CategorySerials from "./CategorySerials.vue";
// import Genres from "./Genres.vue";
import PromoBanner from "./PromoBanner.vue";

@Component({
  components: {
    Suggestions,
    CategoryMovies,
    CategorySerials,
    // Genres,
    PromoBanner,
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
</style>
