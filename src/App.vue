<script lang="ts">
//import Vue from 'vue';
import { Component, Vue } from 'vue-property-decorator';
import { Header } from '@/components'

@Component ({
    components: {

    }

    prop
})
export default class Test extends Vue {
  message: string = 'Films'
}

</script>
<template>
  <div id="app">
    {{ message }}
  </div>

</template>

//<style lang="scss">
//  
//</style>