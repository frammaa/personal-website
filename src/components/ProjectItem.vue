<template>
    <section class="projects">
        <div class="content">
            <h3 class="title"> {{post.title}} </h3>
            <p class="text"> {{post.description}} </p>
            <a class="text" target="_blank" :href="post.link"> open on {{getDomain(post.link)}} <i class="fas fa-external-link-alt fa-xs"></i> </a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProjectItem',
    props: {
        post: Object
    },
    methods: {
        getDomain(link) {
            var a = document.createElement('a');
            a.href = link;
            return a.hostname;
        }
    }
}

</script>

<style scoped>

.projects{
    display: flex;
    flex-direction: row;
    align-content: center;
    /* margin: 2rem 1rem; */
    padding: 1rem 0 ;
    border-bottom: 3px solid black;
}

i{
    font-size: 0.7em;
    margin: 0 0.3em;
}

h3,p{
    margin: 0;
}
a {
    text-decoration: none;
    font-size: 0.85em;
}

a:link, a:visited {
  text-decoration: underline;
  color: inherit;
}

a:hover, a:active {
    text-decoration-thickness: 0.1em;
}


</style>>
