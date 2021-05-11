<template>
    <div class="link-container">
        <div class="img-container">
            <a target=”_blank” href="https://github.com/asfaloth00"><img class="link-image" src="../assets/github.svg" alt="Github link" /></a>
        </div>
        <div class="img-container">
            <a target=”_blank” href="https://www.linkedin.com/in/francesco-marciani-286941173/"><img class="link-image" src="../assets/linkedin.svg" alt="Github link" /></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Links'
}
</script>

<style scoped>
.link-container{
    display: flex;
    justify-content: center;

}
.link-container a{
    margin:  0 1rem 0 1rem;
}
.link-image {
    /* height: 50px; */
    width: clamp(10px, 10vw, 50px);
    height: auto;
}
img{
    height: 100%;
    width: auto;
}
</style>