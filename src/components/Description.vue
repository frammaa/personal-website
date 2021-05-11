<template>
  <div class="picture-container">
    <Picture/>
  </div>
    <div class="description-container">
      <section>
        <h4>About</h4>
        <p>
          Hi, I'm a developer and university student, with a passion for well written and designed code, whatever the language.</p>
        <p>I also enjoy a more hands-on approach to development and I occasionally tinker with 
          Arduino projects in my spare time. You can see some of my projects in the following page.
        </p>
      </section>
  </div>
  <section>
      <h4>Tech stack <i class="fas fa-arrow-down"></i></h4>
      <p>My strong suits are <strong>C, Scala, and Java</strong> and I have worked with <strong>C++</strong>,
      as well as <strong>HTML, CSS, and JavaScript</strong> and the <strong>Vue.js framework</strong>. 
      My main operating system has been <strong>Linux</strong> for several years so I'm familiar with its environment.</p>
  </section>
</template>

<script>
import Picture from "./Picture"

export default {
    name: "Description",
    components: {
      Picture,
    }
}
</script>

<style scoped>
.picture-container {
  text-align: center;
  margin: 0;
}
main {
  margin: 0;
  /* margin-top: 3em; */
}
.description-container{
  display: flex;
  flex-direction: row;
  flex-flow: column-reverse;
  margin: 0;

}
h4 {
  margin: 0;
}
p{
  margin: 0;
  margin-top: 0.4em;
  text-align: justify;
}
</style>