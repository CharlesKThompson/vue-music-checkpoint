<template>
    <div class="my-Tunes">
        <h1>List of MyTunes</h1>
        <div class="row justify-content-center">

            <ol class="col-sm-6">

                <div class="drag">
                    <draggable :list="myTunes.upvotes">
                        <transition-group tag="li" name="list">

                            <li v-for="itune in myTunes" :key="itune.artistName">
                                <p>{{itune.artistName.upvotes}}</p>
                                <p>{{itune.collectionName}}</p>
                                <p>{{itune.trackName}}</p>
                                <p>
                                    <img v-bind:src="itune.artworkUrl60" alt="album art">
                                </p>
                                <button @click="removeTrack(itune)">Remove from MyTunes</button>
                                <button class="btn-success" @click="updateMyTunes(itune)">Up</button>
                                <h3>{{itune.voteCount}}</h3>
                                <p>{{itune.upvotes}}</p>
                                <audio controls="controls">
                                    <source v-bind:src="itune.previewUrl">
                                </audio>
                            </li>
                        </transition-group>
                    </draggable>
                </div>
            </ol>
        </div>


    </div>

</template>

<script>

    import draggable from 'vuedraggable'

    export default {
        name: 'MyTunes',
        data() {
            return {
                list: [],
                coutner: 0
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
            },
            promoteTrack(itune) {
                this.$store.dispatch('promoteTrack', itune)
            },
            demoteTrack(itune) {
                this.$store.dispatch('demoteTrack', itune)
            },
            updateMyTunes(itune) {
                itune.voteCount++
                this.$store.dispatch('updateTrack', itune)
            },
            getVotes(itune) {
                this.$store.dispatch('getVotes', post)
            }
        },
        incCounter() {
            this.counter++
        },

        components: {
            draggable
        }



    }

</script>

<style>
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
</style>