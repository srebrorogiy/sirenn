<template>
  <div class="categoty-serials">
    <div class="container-category-seri">
      <h3>
        <!-- <router-link :to="{ name: 'itemTest' }"> все сериалы </router-link> -->
        <router-link style="text-decoration: none; color: inherit" to="/test"
          >Все сериалы</router-link
        >
      </h3>
      <div class="container-category-seri-item">
        <div
          v-for="item2 in itemSerials.slice(0, 14)"
          :key="item2.id"
          class="item-ser"
        >
          <img :src="item2.image" :key="item2.key" class="style-poster" />
          <p>{{ item2.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Serials extends Vue {
  name = "categorySerials";

  itemSerials: any = null;
  data() {
    return {
      itemSerials: [],
    };
  }

  mounted() {
    axios
      .get("https://imdb-api.com/en/API/Top250TVs/k_12itu7xr")
      .then((response) => (this.itemSerials = response.data.items));
    return this.itemSerials;
  }
}
</script>

<style lang="scss">
.container-category-seri-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
