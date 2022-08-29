<template>
  <div class="footer-block">
    <div class="container">
      <div class="footer-flex">
        <h1>Footer</h1>
        <div class="footer_contacts">
          <Contacts />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Contacts from "./Contacts.vue";

@Component({
  components: {
    Contacts,
  },
})
export default class FooterBlock extends Vue {
  name = "footerBlock";
}
</script>

<style lang="scss">
.footer-block {
  margin-top: 1rem;
}
</style>
