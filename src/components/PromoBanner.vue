<template>
  <section class="preview">
    <p class="preview__title">что посмотреть</p>
    <!-- <div v-for="item in itemPromo" :key="item.id"> -->
    <h2
      class="preview__heading"
      v-for="item in itemPromo.slice(0, 1)"
      :key="item.id"
    >
      {{ item.title }}
    </h2>
    <router-link style="text-decoration: none; color: inherit" to="/">
      <button class="preview__show preview__btn"><span>Подробнее</span></button>
    </router-link>
    <!-- </div> -->
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component({})
export default class PromoBanner extends Vue {
  name = "promoBanner";

  itemPromo: any = [];

  getPromo() {
    axios
      .get("https://imdb-api.com/en/API/ComingSoon/k_12itu7xr")
      .then((response) => (this.itemPromo = response.data.items));
    return this.itemPromo;
  }

  mounted() {
    this.getPromo();
  }
}
</script>

<style lang="scss">
.preview {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10.8rem 2.3rem 11.2rem 2.3rem;
  margin: 0 auto;
  width: 32.7rem;
  @media (min-width: 768px) {
    padding: 12.6rem 19.5rem 16.7rem 19.5rem;
    width: 68.9rem;
  }
  @media (min-width: 1205px) {
    padding: 12.8rem 0 15.8rem 0;
    align-items: flex-start;
    width: 111rem;
  }
  * {
    text-align: center;
  }
  &__title {
    text-transform: uppercase;
    color: #dadada;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.912rem;
    letter-spacing: 1rem;
  }
  &__heading {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 4rem;
    letter-spacing: 0.129rem;
    margin: 1.6rem 0 2.4rem 0;
    width: 32.8rem;
    @media (min-width: 768px) {
      font-size: 5.6rem;
      line-height: 5.8rem;
      letter-spacing: 0.2rem;
      width: 39.6rem;
    }
    @media (min-width: 1205px) {
      width: 37.9rem;
      margin: 2.4rem 0;
    }
  }
  &__show {
    // color: #9c9c9c;
    // font-weight: 500;
    // font-size: 1.5rem;
    // line-height: 2.5rem;
    // margin-bottom: 2.8rem;
    // width: 32.8rem;
    // @media (min-width: 1205px) {
    //   width: 37.9rem;
    //   margin-bottom: 4rem;
    //   text-align: left;
    // }
    position: relative;
    width: 170px;
    height: 40px;
    border: 4px;
    border-radius: 10px;
    border-color: rgb(255, 234, 238);
    cursor: pointer;
    background: transparent;
    color: rgb(255, 255, 255);
    transition: all 0.3s ease;
    display: inline-block;
    font-size: 14px;
  }
  &__btn {
    background: #fff5f5;
    background: #ff4e65;
    line-height: 42px;
    padding: 0;
    border: none;
  }
  &__btn span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  &__btn:before,
  &__btn:after {
    position: absolute;
    content: "";
    height: 0%;
    width: 1px;
    box-shadow: -1px -1px 20px 0px rgba(255, 255, 255, 1),
      -4px -4px 5px 0px rgba(255, 255, 255, 1),
      7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  }
  &__btn:before {
    right: 0;
    top: 0;
    transition: all 500ms ease;
  }
  &__btn:after {
    left: 0;
    bottom: 0;
    transition: all 500ms ease;
  }
  &__btn:hover {
    background: #fff9f9;
    color: #ff4d65;
    box-shadow: none;
  }
  &__btn:hover:before {
    transition: all 500ms ease;
    height: 100%;
  }
  &__btn:hover:after {
    transition: all 500ms ease;
    height: 100%;
  }
  &__btn span:before,
  &__btn span:after {
    position: absolute;
    content: "";
    box-shadow: -1px -1px 20px 0px rgba(255, 255, 255, 1),
      -4px -4px 5px 0px rgba(255, 255, 255, 1),
      7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  }
  &__btn span:before {
    left: 0;
    top: 0;
    width: 0%;
    height: 0.5px;
    transition: all 500ms ease;
  }
  &__btn span:after {
    right: 0;
    bottom: 0;
    width: 0%;
    height: 0.5px;
    transition: all 500ms ease;
  }
  &__btn span:hover:before {
    width: 100%;
  }
  &__btn span:hover:after {
    width: 100%;
  }
}
</style>
