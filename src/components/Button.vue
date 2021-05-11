<template>
  <a :href="href" class="header-button">{{ text }}</a>
</template>

<script>
export default {
  name: 'HeaderButton',
  props: {
    text: String,
    href: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-button {
  padding: 0.3em 1.2em;
  margin:0 0.1em 0.1em 0;
  /* margin: auto; */
  border:0.16em solid;
  border-radius:2em;
  box-sizing: border-box;
  text-decoration:none;
  font-size: inherit;
  /* font-family:'Roboto',sans-serif; */
  /* font-weight:300; */
  /* color:#b41818; */
  /* text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35); */
  text-align:center;
  transition: all 0.2s;
}
a {
    text-decoration: none;
    font-size: 0.85em;
}

a:link, a:visited {
  color: inherit;
}

a:hover, a:active {
    text-decoration-thickness: 0.1em;
}
</style>
