<template>
  <header class="header">
    <div class="container-flex">
      <div class="container">
        <div class="header__container">
          <Menu />
          <SearchItem />
        </div>
        <PromoBanner />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SearchItem from "./SearchItem.vue";
import Menu from "./Menu.vue";
import PromoBanner from "./PromoBanner.vue";

@Component({
  components: {
    SearchItem,
    Menu,
    PromoBanner,
  },
})
export default class HeaderBlock extends Vue {
  name = "headerBlock";
}
</script>

<style lang="scss">
.header {
  width: 100%;
  background-image: url("https://m.media-amazon.com/images/M/MV5BNTZmM2EwOWYtNjk4Ny00OTc4LWEwYjUtMWMwMDVkMjUyNzZkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio1.5000_AL_.jpg");
  background-position: center;
  background-size: cover;
  opacity: 0.9;
  @media (min-width: 768px) {
    background-image: url("https://m.media-amazon.com/images/M/MV5BNTZmM2EwOWYtNjk4Ny00OTc4LWEwYjUtMWMwMDVkMjUyNzZkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio1.5000_AL_.jpg");
    background-position: center;
    background-size: cover;
  }
  @media (min-width: 1205px) {
    background-image: url("https://m.media-amazon.com/images/M/MV5BNTZmM2EwOWYtNjk4Ny00OTc4LWEwYjUtMWMwMDVkMjUyNzZkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_Ratio1.5000_AL_.jpg");
    background-size: cover;
    background-position: center;
  }
  &__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
