<template>
    <Header msg="Header"/>
    <Body/>
</template>

<script>
import Header from './components/Header.vue'
import Body from './components/Body'

export default {
    name: 'App',
    components: {
        Header,
        Body,
    }
}
</script>

<style>
html {
    height: 100%;
}
body {
    min-height: 100%;
}
#app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    /* display: flex;
    flex-direction: column; */
    /* align-content: center; */
    font-size: clamp(20px, 3vw, 25px);
    margin: auto;
    font-family: 'Baloo 2', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    /* 
    color: #2c3e50;
    margin-top: 60px; 
    */
    width: clamp(320px, 90%, 52rem);
    height: 100vh;
    background-color: rgb(236, 238, 245);

}
</style>
