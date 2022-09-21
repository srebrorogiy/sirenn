<template>
  <div class="menu-item">
    <div class="header_nav">
      <router-link :to="{ name: 'main-block' }">
        <p>{{ menubar }}</p>
      </router-link>
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
