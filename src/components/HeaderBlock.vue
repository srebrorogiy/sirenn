<template>
  <div class="header scroll">
    <div class="container">
      <div class="styles_header-block">
        <div class="flex">
          <div class="menu_container">
            <Menu />
          </div>
          <div class="search_container">
            <div class="styles_search">
              <Search />
            </div>
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
.header {
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-content: center;
}
/**header {
 

  .header-block {
    // background-color: rgb(204, 94, 112);
    // width: 1140px;
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
}**/
</style>
