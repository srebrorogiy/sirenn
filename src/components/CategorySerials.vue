<template>
  <div class="categoty-serials">
    <div class="container-category-seri">
      <h3>
        <!-- <router-link :to="{ name: 'itemTest' }"> все сериалы </router-link> -->
        <router-link style="text-decoration: none; color: inherit" to="/serials"
          >Все сериалы</router-link
        >
      </h3>
      <div class="container-category-seri-item">
        <split-carousel
          v-bind:autoplay="false"
          v-bind:item-width="160"
          v-bind:height="300"
          :display-amount="5"
          v-bind:arrow-visible="false"
        >
          <split-carousel-item
            v-for="item in itemSerials.slice(0, 14)"
            :key="item.id"
          >
            <img :src="item.image" alt="poster" class="style-poster" />
            <p class="container__title">
              {{ item.title }}
            </p>
          </split-carousel-item>
        </split-carousel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import Component from "vue-class-component";
import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";

@Component({
  components: {
    SplitCarousel,
    SplitCarouselItem,
  },
})
export default class Serials extends Vue {
  name = "categorySerials";

  itemSerials: any = null;
  // data() {
  //   return {
  //     itemSerials: [],
  //   };
  // }

  getSerials() {
    axios
      .get("https://imdb-api.com/ru/API/Top250TVs/k_12itu7xr")
      .then((response) => (this.itemSerials = response.data.items));
    return this.itemSerials;
  }

  mounted() {
    this.getSerials();
  }
}
</script>

<style lang="scss">
.container-category-seri-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow-block: hidden;
  margin-left: 20px;
}
.item-ser {
  margin-top: 15px;
  margin-right: 20px;
  margin-bottom: 10px;
  text-align: left;
  display: inline-block;
  flex-direction: column;
  .item-ser p {
    margin-top: 15px;
  }
}
</style>
