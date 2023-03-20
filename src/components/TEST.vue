<template>
  <div class="menu-item">
    <div class="header_nav">
      <!-- <router-link :to="{ name: 'main-block' }"> -->
      <p>{{ menubar }}</p>
      <p>test</p>
      <iframe
        src="https://www.imdb.com/video/imdb/vi2959588889/imdb/embed?autoplay=false&width=854"
        width="1840"
        height="480"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        frameborder="no"
        scrolling="no"
      ></iframe>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Test extends Vue {
  name = "itemTest";

  menubar = "Menu";
}
</script>

<style lang="scss"></style>
