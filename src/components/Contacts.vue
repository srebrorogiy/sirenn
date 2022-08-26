<template>
  <div class="contacts-item">
    <div class="container">
        <p>{{ contact }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component ({

})

export default class ContactsBlock extends Vue {
    name = 'contactsItem';

    contact = 'Здесь будут отображены контакты';
}
</script>