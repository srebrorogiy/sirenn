<template>
  <div class="footer-block">
    <h1>Footer</h1>
    <Contacts />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Contacts from './Contacts.vue';

@Component ({
    components: {
      Contacts
    }
})

export default class FooterBlock extends Vue {
    name = 'footerBlock'

}
</script>