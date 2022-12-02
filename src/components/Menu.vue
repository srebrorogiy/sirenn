<template>
  <div class="menu-item">
    <div class="header_nav">
      <router-link :to="{ name: 'main-block' }">
        <p class="nav-menu">{{ menubar }}</p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class MenuBlock extends Vue {
  name = "menuItem";

  menubar = "Menu";
}
</script>

<style lang="scss">
p {
  text-decoration: none;
}
</style>
