import vue from 'vue'

import vuex from 'vuex'
import $ from 'jquery'
import axios from "axios"
import router from "../router"

var api = axios.create({
  baseURL: "//localhost:3000/api/",
  timeout: 5000,
  withCredentials: true
})

// var auth = axios.create({
//   baseURL: "//localhost:3000/auth/",
//   timeout: 5000,
//   withCredentials: true
// })


vue.use(vuex)


var store = new vuex.Store({
  state: {
    user: {},
    searchResults: [],
    myTunes: [],
    activeTune: {}
  },

  mutations: {
    setResults(state, payload) {
      state.searchResults = payload
    },
    setActiveTune(state, payload) {
      state.activeTune = payload
    },

    setMyTunes(state, payload) {
      state.myTunes = payload
      state.myTunes.sort(function (a, b) {
        return b.voteCount - a.voteCount
      })
    },
    // setMyTunes(state, payload) {
    //   vue.set(state.myTunes, payload.artistName, payload.myTunes || [])
    // },
    setUser(state, payload) {
      state.user = payload
    }
  },

  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data => {
        data = JSON.parse(data)
        commit('setResults', data.results)
      })
    },

    getItuneById({ commit, dispatch }, payload) {
      api
        .get("itunes/" + payload)
        .then(res => {
          commit("setActiveTune", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    //this should send a get request to your server to return the list of saved tunes
    getMyTunes({ commit, dispatch }, payload) {
      api
        .get("/myTunes/")
        .then(res => {
          commit("setMyTunes", res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    getMyTunesById({ commit, dispatch }, payload) {
      api
        .get("itunes/" + payload)
        .then(res => {
          commit("setMytunes", { ituneId: payload, myTunes: res.data })
        })
    },

    //this will post to your server adding a new track to your tunes
    addToMyTunes({ commit, dispatch }, itune) {
      api
        .post("myTunes/", itune)
        .then(res => {
          dispatch("getMyTunes")
        })
    },

    addVote({ commit, dispatch }, payload) {
      api
      .put("MyTunes/" + payload.ituneId, payload)
      .then(res => {
        dispatch("getVotes")
      })
    },

    //Removes track from the database with delete
    removeTrack({ commit, dispatch }, track) {
      api
        .delete("mytunes/" + track._id)
        .then(res => {
          dispatch("getMyTunes")
        })
        .catch(err => {
          console.log
        })
    },

    updateTrack({ commit, dispatch }, payload) {
      api
        .put("mytunes/" + payload._id, payload)
        .then(res => {
          dispatch("getMyTunes")
        })
    },

    //this should increase the position / upvotes and downvotes on the track
    promoteTrack({ commit, dispatch }, track) {
      var position = track.index
      if (position !== 0) {
        position.splice(track.b, track.a)
      }
    },

    //this should decrease the position / upvotes and downvotes on the track
    demoteTrack({ commit, dispatch }, track) {
      var position = track.index
      if (position !== position.length - 1) {
        position.splice(track.a, track.b)
      }
    },

    setActiveTune({ commit, dispatch }, payload) {
      commit("setActiveTune", payload)
    }
    
  },
  
})

export default store
