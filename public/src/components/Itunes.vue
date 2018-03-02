<template>
    <div class="itunes">
        <h1>Find Your Awesomest or Okayest Music Here!</h1>
        <div class="row">
            <ol class="col-sm-6">
                <li v-for="itune in itunes">
                    <p @click="addToMyTunes(itune)"></p>
                </li>
            </ol>

        </div>
    </div>
</template>

<script>

    import MyTunes from './MyTunes'

    
    export default {
        name: 'iTunes',
        data() {
            return {
                
            }
        },

        computed: {
            itunes() {
                return this.$store.state.searchResults
            },
            activeTune() {
                return this.$store.state.activeTune
            }
        },

        methods: {
            addToMyTunes(itune) {
                this.$store.dispatch('setActiveTune', itune)
            }
        },

        components: {
            info: Itunes
        },

        props: ['artist']

    }

</script>

<style>
</style>