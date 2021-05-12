<template>
    <header>
        <div class="text-container">
            <h1>Francesco Marciani</h1>
        </div>
    </header>
</template>

<script>
export default {
        name: 'Header',
}
</script>

<style scoped>
header{
    display: flex;
    justify-content: center;
    margin-top: 2rem;

}

h1{
    font-size: clamp(45px, 10vw, 80px);
    font-weight: 900;
    background: -webkit-linear-gradient(45deg, #09009f, #00ff62 110%);;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
}
.text-container {
    margin: auto 0;
}
</style>
