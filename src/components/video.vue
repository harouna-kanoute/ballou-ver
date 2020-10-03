 <template>
    <div class="video-player">
        <video autoplay controls class="video" width="700px" ref="video">
            <source src="@/assets/video1.mp4" type="video/mp4">
        </video>
    </div>
</template>

<script>
    export default {
        name: "VideoPlayer",
        computed: {
            videoElement () {
            return this.$refs.video;
            }, 
        }
	}
</script>

<style scoped>
    .video-player{
        width: 100%;
        background-color: #2ecc71;
        margin:0;
    }
    .video{
        margin: auto;
        padding: 20px;
    }
</style>