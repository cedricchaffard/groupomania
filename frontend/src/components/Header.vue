<template>
    <header>
        <h1>Groupomania</h1>
        <img src="/frontend/src/assets/images/groupomania_Logos/icon-above-font.png">
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
header{
    background: grey;
    border-bottom: 1px solid black;
      box-shadow: 6px 6px 8px 0 rgba(0, 0, 0, 0.25), -6px -6px 10px 0 rgba(255, 255, 255, 0.55);

}

h1{
    margin: 0;
}

img{
    height: 10%;
    width: 10%;
}

</style>