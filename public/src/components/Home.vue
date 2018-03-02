<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <form class="col-sm-6" @submit.prevent='musicSearch'>
      <input type="text" v-model="artist" placeholder="Search Title">
      <button type = "submit" class = "clicker">Search Tunes</button>
    </form>
    <itunes class="itunes"></itunes>
    <div>
    </div>


    <my-tunes class="my-tunes"></my-tunes>
  </div>
</template>

<script>

import MyTunes from './MyTunes.vue'
import Itunes from './Itunes.vue'
export default {
  name: 'home',
  data () {
    return {
      artist:''
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
.my-tunes{
  display: inline-block;
  min-height: 500px;
  min-width: 50%;
  background: green;
}

.itunes{
  display: inline-block;
  background: red;
  min-height: 500px;
  min-width: 45%;
}

</style>
