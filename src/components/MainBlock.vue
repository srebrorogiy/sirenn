<template>
  <div class="block-content">
    <div class="container">
      <h1>Main content</h1>
      <Suggestions />
      <Wishlist />
      <CategoryMovies />
      <CategorySerials />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Suggestions from './Suggestions.vue';
import Wishlist from './Wishlist.vue';
import CategoryMovies from './CategoryMovies.vue';
import CategorySerials from './CategorySerials.vue';

@Component ({
  components: {
    Suggestions,
    Wishlist,
    CategoryMovies,
    CategorySerials
  }
})

export default class MainBlock extends Vue {
  name = 'blockContent'
}
</script>

<style lang="scss">
.container {

  width: 1140px;
}

</style>