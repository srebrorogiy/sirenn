<template>
  <div class="main-block">
    <div class="container-flex">
      <header>
        <div class="container_flex_head">
          <HeaderBlock />
        </div>
      </header>
      <MainBlock />
      <footer>
        <div class="container_flex_footer">
          <FooterBlock />
        </div>
      </footer>
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

footer {
  background: rgb(212,112,47);
  background: linear-gradient(152deg, rgba(212,112,47,1) 0%, rgba(251,80,130,1) 48%, rgba(255,113,113,1) 100%);
  width: 100%;
  // margin: 2rem;
  .container_flex_footer {
    display: flex;
    flex-direction: row;
    width: 1140px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>