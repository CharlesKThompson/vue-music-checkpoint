<template>
    <div class='itunes'>
        <h1>What we found on Itunes:</h1>
        <div class="row justify-content-center">
            <ol class="col-sm-6">
                <li v-for="itune in itunes">
                    <p>{{itune.artistName}}</p>
                    <p>{{itune.collectionName}}</p>
                    <p>{{itune.trackName}}</p>
                    <p>
                        <img v-bind:src="itune.artworkUrl60" alt="album art">
                    </p>
                    <button @click="addToMyTunes(itune)">Add to MyTunes</button>
                    <p>{{itune.upvotes}}</p>
                    <audio controls="controls">
                        <source v-bind:src="itune.previewUrl">
                    </audio>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>



    export default {
        name: 'Itunes',
        data() {
            return {

            }
        },
     //   props: ['itune'],
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
                this.$store.dispatch('addToMyTunes', itune)
            }
        },

    }

</script>

<style scoped>
    .itunes {
        padding: 2rem;

    }

    li {
        justify-content: center;
        text-align: center;
        padding: 1rem;
        border: 1px solid black;
        border-radius: 20px;
        margin: 1rem;
    }

    button {
        margin: 1rem;
    }
</style>