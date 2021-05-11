<template>
  <div class="picture-container">
    <Picture/>
  </div>
    <div class="description-container">
      <section>
        <h4>About</h4>
        <p>
          Hi, I'm a developer and university student, with a passion for well written and 
          designed code, whatever the language.</p>
        <p> I prefer to work with <strong>free and open source software </strong>whenever possible, and I would
          like my work to have a positive impact on the planet, so I focus my attention and passion
          on <strong>green energy and sustainable projects </strong> of any form.
        </p>
        <p>
          I also love to work on embedded software, close to the silicon, understanding the low-level 
          mechanism of the hardware. Hence my love for C!
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