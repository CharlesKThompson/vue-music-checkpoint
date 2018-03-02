import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'
///import router here when ready to implement auth

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    searchResults: [],
    user: {},
    activeTune: {}
  },

  mutations: {
    setResults(state, results){
      state.searchResults = results
    },
    setActiveTune(state, payload) {
      state.activeTune = payload
    },
    setMyTunes(state, payload) {
      vue.set(state.myTunes, payload.ItunesId, payload.itunes || [])
    },
    setUser(state,payload) {
      state.user = payload
    }
  },

  actions: {
    getMusicByArtist({commit, dispatch}, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data=>{
        data = JSON.parse(data)
        commit('setResults', data.results)
      })
    },

    //this should send a get request to your server to return the list of saved tunes
    getMyTunes({commit, dispatch}){
      
    },

    //this will post to your server adding a new track to your tunes
    addToMyTunes({commit, dispatch}, track){
    },

    //Removes track from the database with delete
    removeTrack({commit, dispatch}, track){
    },

    //this should increase the position / upvotes and downvotes on the track
    promoteTrack({commit, dispatch}, track){
    },

    //this should decrease the position / upvotes and downvotes on the track
    demoteTrack({commit, dispatch}, track){
    },

    setActiveTune({commit, dispatch}, payload) {
      commit("setActiveTune", payload)
    }

  }
})

export default store
