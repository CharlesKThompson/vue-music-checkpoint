<template>
    <div class='itunes'>
        <h1>What we found on Itunes:</h1>
        <div class="row">
            <ol class="col-sm-6">
                <li v-for="itune in itunes">
                    <p @click="addToMyTunes(itune)">{{itune.artistName}}</p>
                    <p>{{itune.collectionName}}</p>
                    <p>{{itune.trackName}}</p>
                    <p> <img v-bind:src="itune.artworkUrl60" alt="album art"></p>
                    <audio controls="contols">
                        <source v-bind:src="itune.previewUrl">
                    </audio>
                </li>
            </ol>
            <info class ="col-sm-6" :itune="activeTune" :artist="artist"></info>
        </div>
    </div>
</template>

<script>


    import MyTunes from './MyTunes'


    export default {
        name: 'itunes',
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
            info: MyTunes
        },

        props: ['artist']

    }

</script>

<style scoped>
</style>