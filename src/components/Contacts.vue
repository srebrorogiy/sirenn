<template>
  <div class="contacts-item">
    <div class="container">
      <div>
        <h3>{{ contact }}</h3>
        <div class="footer_socials">
          <div class="container">
            <p>inst</p>
            <p>tg</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class ContactsBlock extends Vue {
  name = "contactsItem";

  contact = "Контакты для связи";
}
</script>

<style lang="scss">
h3 {
  margin-bottom: 20px;
  margin-top: 15px;
}

.footer_socials {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 20px;
}
</style>
