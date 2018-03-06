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

    mounted() {
this.$store.dispatch('getMyTunes')
    },

    methods: {
      musicSearch() {
        this.$store.dispatch('getMusicByArtist', this.artist)
      },
      getMyMusic(itune) {
        this.$store.dispatch('getMyTunes', itune)
      },
      addToMyTunes(itune) {
        this.$store.dispatch("addToMyTunes", itune)
      },
      removeTrack(itune) {
        this.$store.dispatch("removeTrack")
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
      mytunes() {
        return this.$store.state.mytunes
      },
      activeTune() {
        return this.$store.state.activeTune
      }
    }
  }
</script>


<style>
  .my-Tunes {
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