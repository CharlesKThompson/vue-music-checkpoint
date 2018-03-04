<template>
  <div class="Home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <form class="col-sm-6" @submit.prevent='musicSearch'>
      <input type="text" v-model="artist" placeholder="Search Title">
      <button type="submit" class="clicker">Search Tunes</button>
    </form>
    <div class="row">

      <itunes></itunes>
      <MyTunes></MyTunes>
    </div>

  </div>

</template>

<script>

  import Itunes from './Itunes.vue'
  import MyTunes from './MyTunes.vue'

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
      },
      getMyMusic(itune) {
        this.$store.dispatch('getMyMusic', this.itune)
      },
      addToMyTunes(itune) {
        this.store.dispatch("addToMyTunes")
      },
      removeTrack(itune) {
        this.store.dipsatch("removeTrack")
      }
    },

    components: {
      Itunes,
      MyTunes
    },

    computed: {
      itunes() {
        return this.$store.state.itunes
      },
      activeTune() {
        return this.$store.state.activeTune
      }
    }
  }
</script>


<style>
  .my-tunes {
    display: inline-block;
    min-height: 500px;
    width: 50%;
    background: rgb(61, 119, 61);
  }

  .itunes {
    display: inline-block;
    background: grey;
    min-height: 500px;
    width: 50%;
  }
</style>