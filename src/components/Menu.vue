<template>
  <div class="menu-item">
      <div class="header_nav">
        <p>{{ menubar }}</p>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component ({
  
})

export default class MenuBlock extends Vue {
    name = 'menuItem';

    menubar = 'Menu';
}

</script>

<style lang="scss">
.header_nav {
  
}
</style>