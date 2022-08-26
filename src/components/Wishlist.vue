<template>
  <div class="block-wishlist">
    <div class="container-wlist">
      <p>{{ list }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default class Wishlist extends Vue {
  name = 'blockWishlist';

  list = 'Что хотели посмотреть'
}
</script>

<style>
.container-wlist {
  display: flex;
  align-items: center;
  flex-direction: column;
}

</style>