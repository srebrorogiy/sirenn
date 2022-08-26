<template>
  <div class="menu-item">
    <p>{{ menubar }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component ({
  
})

export default class MenuBlock extends Vue {
    name = 'menuItem';

    menubar = 'Menu';
}

</script>+