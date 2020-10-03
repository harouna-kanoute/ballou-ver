<template>
    <div>
        <h1>Home page</h1>
        <div class="container-fluid">
            <div class="row justify-content-lg-center section sectionOne"> 
                <div class="col-lg-6 col-md-6 col-sm-12 text-justify ">
                    <h2>Bienvenue</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nesciunt deleniti corporis aut exercitationem ea architecto quod rerum. Repellat inventore commodi sapiente sint similique maiores totam libero quod quo optio!
                    </p>
                    <button class="btn btn-larg btn-success">Plus d'info</button>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img class="img" src="../assets/tree3.png" alt="image de decoration">
                </div>
            </div>

            <b-icon  icon = "arrow-up" > </b-icon > 
     
            <div class="row justify-content-lg-center section sectionDeux">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionDeux-First-Block">
                    <div>
                       <img class="img" src="../assets/tree2.png"/>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 sectionDeux-Two-Block">
                    <v-card elevation="2" loading>
                        <div>
                            <h1>Tittle 1</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore aut quae nihil iste eaque tempora delectus fugiat magnam, a adipisci ea sint laboriosam? Earum, temporibus rerum? Explicabo labore consequatur pariatur.
                            </p>
                        </div>
                    </v-card>
                    
                    <v-card elevation="2" loading>
                        <div>
                            <h1>Tittle 1</h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore aut quae nihil iste eaque tempora delectus fugiat magnam, a adipisci ea sint laboriosam? Earum, temporibus rerum? Explicabo labore consequatur pariatur.
                            </p>
                        </div>
                    </v-card>
                </div>
            </div>

            <div class="row justify-content-lg-center section sectionTrois">
                <div>
                    <button class="btn btn-success">cliquez ici</button>
                </div>
            </div>
            <videoPlayer></videoPlayer>
            <div class="row justify-content-lg-center section sectionQuatre">

            </div>
        </div>
    </div>
</template>

<script>
    import videoPlayer from './video.vue'
    export default {
       name: 'homeLink',
       components:{
           videoPlayer
       }
    }

</script>

<style scoped>
    .section{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        margin: 40px auto;
        height: 100%;
    }
    .sectionOne{
        width: 80%;
        margin: auto;
        height: 100vh;
    }
    .sectionDeux{
        display: flex;
        flex-direction: row;
        justify-content: space-around; 
        align-items: center;
        width: 95%;
        margin:auto;
        height: 100%;
        background: none;
    }
    .sectionDeux-First-Block , .sectionDeux-Two-Block{
        /* width: 50%; */
        height: 450px;
        padding: 10px;
    }
    .sectionDeux-First-Block > div{
        width: 100%;
        height: 425px;
        margin: 5px auto;
    }
    .sectionDeux-Two-Block div:nth-child(1){
        background: yellow;
        width: 100%;
        height: 210px;
        margin: 5px auto;
    }
    .sectionDeux-Two-Block div:nth-child(2){
        background: #E1F0C4;
        width: 100%;
        height: 210px;
    }
    .sectionTrois{
        background: black;
        display:flex;
        align-items: center;
        height: 100px;
        width:100%;
    }
    .sectionQuatre{
        width: 100%;
        height: 100vh;
        background-image: url('../assets/uprb12.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        -webkit-backdrop-filter: blur(green);
    }
    .img{
        width: 80%;
    }
</style>