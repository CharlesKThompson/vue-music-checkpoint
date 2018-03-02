<template>
  <div class="Home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <form class="col-sm-6" @submit.prevent='musicSearch'>
      <input type="text" v-model="artist" placeholder="Search Title">
      <button type="submit" class="clicker">Search Tunes</button>
    </form>
    <div>
      <itunes></itunes>
    </div>
  </div>
</template>

<script>

  import MyTunes from './MyTunes.vue'
  import Itunes from './Itunes.vue'
  export default {
    name: 'Home',
    data() {
      return {
        artist: ''
      }
    },

    methods: {
      musicSearch() {
        this.$store.dispatch('getMusicByArtist', this.artist)
      }
    },

    components: {
      Itunes,
      MyTunes
    }
  }
</script>


<style>
  .my-tunes {
    display: inline-block;
    min-height: 500px;
    min-width: 45%;
    background: rgb(61, 119, 61);
  }

  .itunes {
    display: inline-block;
    background: grey;
    min-height: 500px;
    min-width: 45%;
  }
</style>