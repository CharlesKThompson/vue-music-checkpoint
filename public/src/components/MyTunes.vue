<template>
    <div class="my-tunes">
        <h1>List of MyTunes</h1>
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
export default {
    name: 'My-Tunes',
    data () {
        return {
            
        }
    }
}

</script>

<style>


</style>