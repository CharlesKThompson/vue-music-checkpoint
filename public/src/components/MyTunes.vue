<template>
    <div class="my-Tunes">
        <h1>List of MyTunes</h1>
        <ol class="col-sm-6">
            <li v-for="song in myTunes">
                <p>{{itune.artistName}}</p>
                <p>{{itune.collectionName}}</p>
                <p>{{itune.trackName}}</p>
                <p>
                    <img v-bind:src="itune.artworkUrl60" alt="album art">
                </p>
                <button @click="removeTrack(itune)">Remove from MyTunes</button>
                <audio controls="controls">
                    <source v-bind:src="itune.previewUrl">
                </audio>
            </li>
        </ol>
    </div>

</template>

<script>



    export default {
        name: 'MyTunes',
        props: ['itune'],
        data() {
            return {

            }
        },
        

        computed: {
            // myTunes() {
            //     return this.$store.state.myTunes[this.myTunes.artistName] || []
            // },
            activeTune() {
                return this.$store.state.activeTune
            }
        },

        methods: {
            removeTrack(itune) {
                this.$store.dispatch('removeTrack', itune)
            }
        },



    }

</script>

<style>
</style>