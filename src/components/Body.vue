<template>
    <dir class="body-container">
        <Description />
        <div class="contact-button">
            <Button text="Send me an email!" href="mailto:marciani3@gmail.com"></Button>
        </div>
        <Links />
        <h1>Projects and work experience</h1>
        <ProjectList :posts="posts"/>
    </dir>
</template>

<script>
import Description from "./Description";
import Links from "./Links";
import ProjectList from "./ProjectList";
import Button from "./Button";

export default {
    name: "Body",
    components: {
        Description,
        Links,
        ProjectList,
        Button,
    },
    data() {
        return {
            posts: [],
        };
    },
    created() {
        this.posts = [
            {
                id: 1,
                title: "Print&Play",
                link: "https://printandplayexhibition.com",
                description: "Art gallery website developed in vanilla HTML, CSS and JS.",
            },
            {
                id: 2,
                title: "IJVM emulator",
                link: "",
                description: "Emulator written in C that executes IJVM binaries. \
                Main features include being able to debug the binary using breakpoints, \
                saving a snapshot of the machine state upon receiving SIGINT \
                to later resume the execution, and a heap implementation to work with arrays.",
            },
            {
                id: 3,
                title: "Exploding Kittens",
                link: "",
                description: "A graphical implementation of the card game \"Exploding Kittens\" \
                developed with three other students over the course of 4 weeks. Main features include a server capable of \
                running several rooms concurrently and a GUI. Written in Java, I focused on the \
                graphical aspect using the JavaFX library."
            },
            {
                id: 4,
                title: "Personal website",
                link: "https://github.com/frammaa/personal-website",
                description: "This website, written using Vue.js. Source code available publicly on Github.",
            },
        ];
    },
};
</script>

<style>
h1 {
    margin: 0;
}
.body-container {
    margin: 0;
    padding: 0;
    width: 100%;
}
.body-container > * {
    margin-top: 2rem;
}
.contact-button {
    display: flex;
    justify-content: center;
    /* align-items: center; */
}
</style>