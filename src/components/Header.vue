<template>
  <div class="header">
    <ul>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  /* display: flex; */
  /* justify-content: right; */
  position: fixed;
  /* left: 100%; */
  /* flex-direction: row-reverse; */
  margin-top: 1rem;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  /* float: right; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
