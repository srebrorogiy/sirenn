<template>
  <div class="main-block">
    <div class="container-flex">
      <header>
        <div class="container_flex_head">
          <HeaderBlock />
        </div>
      </header>
      <MainBlock />
      <FooterBlock />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import HeaderBlock from "./HeaderBlock.vue";
import MainBlock from "./MainBlock.vue";
import FooterBlock from "./FooterBlock.vue";

@Component({
  components: {
    HeaderBlock,
    MainBlock,
    FooterBlock,
  },
})
export default class MainWrapper extends Vue {
  name = "main-block";

  main_title = "Main block";
}
</script>

<style lang="scss">

header {
  background-color: rgb(204, 94, 112);
  width: 100%;
  .container_flex_head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1140px;
    margin-left: auto;
    margin-right: auto;

  }
}
</style>