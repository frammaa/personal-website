<template>
  <h1>Francesco Marciani</h1>
  <p>I'm a developer passionate about software design. 
    I code mostly in C, C++, and Java, and I especially enjoy thinking about the structure of my code before I 
    start coding. I believe this leads to an overall better structure and a codebase 
    that's easier to maintain. I like learning new stuff so I'm super keen about good quality
     documentation!</p>
     <p>I also enjoy a more hands-on approach to development and I occasionally tinker with 
       Arduino projects in my spare time. You can see some of my projects in the following page.
     </p>
</template>

<script>
export default {
    name: "Description"
}
</script>

<style scoped>
h1{
  font-size: clamp(45px, 4vw, 72px);
  font-weight: 900;
  background: -webkit-linear-gradient(45deg, #09009f, #00ff62 90%);;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>