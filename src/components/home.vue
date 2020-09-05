<template>
    <div>
        <h1>Home page</h1>
        <div>
            <div class="sectionOne"> 
                <div>un</div>
                <div>deux</div>
            </div>
            <div>
                <button class="btn btn-success">cliquez ici</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       name: 'homeLink'
    }
</script>

<style scoped>
    .sectionOne{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 40px auto;
        height: 200px;
        background: green;
    }
</style>