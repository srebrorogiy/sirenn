<template>
  <div class="main-block">
    <p>{{ main_title }}</p>
    <HeaderBlock />
    <MainBlock />
    <FooterBlock />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import HeaderBlock from './HeaderBlock.vue';
import MainBlock from './MainBlock.vue';
import FooterBlock from './FooterBlock.vue';



@Component ({
    components: {
        HeaderBlock,
        MainBlock,
        FooterBlock,
    }
})

export default class MainWrapper extends Vue {
    name = 'main-block';

    main_title = 'Main block';
}
</script>

<style>
.main-block {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;
}
</style>

