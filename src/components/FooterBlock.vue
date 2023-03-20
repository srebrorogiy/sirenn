<template>
  <div class="footer">
    <Contacts />
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
.footer {
  margin-top: 1rem;
  align-content: center;
  height: 200px;
  color: #fffbfc;
}
</style>
