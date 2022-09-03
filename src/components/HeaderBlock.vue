<template>
  <div class="header-block">
    <div class="container">
      <div class="styles_header-block">
        <div class="flex">
          <div class="search_container">
            <div class="styles_search">
              <Search />
            </div>
          </div>
          <div class="menu_container">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Search from "./Search.vue";
import Menu from "./Menu.vue";

@Component({
  components: {
    Search,
    Menu,
  },
})
export default class HeaderBlock extends Vue {
  name = "headerBlock";
}
</script>

<style lang="scss">
.header-block {
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: rgb(204, 94, 112);
  width: 1140px;
  align-content: center;
  .container {
    // width: 100%;
    .flex {
      // width: 1140px;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
}

.styles_header-block {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
