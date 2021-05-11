<template>
    <Header msg="Header"/>
    <Body/>
    <Footer/>
</template>

<script>
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

export default {
    name: 'App',
    components: {
        Header,
        Body,
        Footer,
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
    font-size: clamp(20px, 3vw, 23px);
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
