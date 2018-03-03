<template>
    <div class="my-tunes">
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
                <audio controls="contols">
                    <source v-bind:src="itune.previewUrl">
                </audio>
            </li>
        </ol>
    </div>

</template>

<script>



    export default {
        name: 'myTunes',
        props: ['itune', 'artistName'],
        data() {
            return {

            }
        },

        computed: {
            myTunes() {
                return this.$store.state.myTunes
            },
            activeTune() {
                return this.$store.state.activeTune
            }
        },

        methods: {
            removeTrack(itune) {
                this.$store.dispatch('removeTrack', itune)
            }
        },

        mounted() {
            this.$store.dispatch('getMyTunes', this.activeTune)
        }


    }

</script>

<style>
</style>