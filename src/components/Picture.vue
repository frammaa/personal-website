<template>
    <div class="pic-container">
        <img src="../assets/cv-foto.png" />
    </div>
</template>

<script>
export default {
    name: "Picture"
}
</script>

<style>
.pic-container {
    display: inline-block;
    position: relative;
    /* width: clamp(100px, 10vw, 200px);
    height: clamp(100px, 10vw, 200px); */
    min-width: 175px;
    min-height: 175px;
    width: 175px;
    height: 175px;
    overflow: hidden;
    border-radius: 50%;
    margin: auto;
}

.pic-container img {
    width: auto;
    height: 120%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>