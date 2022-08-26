<template>
  <div class="header-block">
    <div class="container">
        <Menu />
        <Search />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Search from './Search.vue';
import Menu from './Menu.vue';


@Component ({
  components: {
    Search,
    Menu,
  }
})

export default class HeaderBlock extends Vue {
    name = 'headerBlock'
}

</script>

<style lang="scss">
header-block {
  .container {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}
}
</style>