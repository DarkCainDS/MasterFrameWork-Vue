<template>
    <section id="content">
        <h2 class="subheader">Last Articles</h2>

        <!--Listado de Articulos-->
        <div id="articles">
            <article class="article-item" id="article-template">
                <div class="image-wrap">
                    <img src="https://external-preview.redd.it/ySAA-yDsA_WhDJQ9NYCSS2SReYyjUt3MtS16hNFt6-M.jpg?auto=webp&s=509a0e0f91db431a7ded748eee872e0ad8246645"
                        alt="Alexandria" />
                </div>
                <h2>Test Article</h2>
                <span class="date">
                    5 Minutes ago
                </span>
                <a href="#">See more</a>
                <div class="clearfix"></div>
            </article>
            <!--Añadir articulos via JS-->
            <h1>{{this.name}}</h1>
            
        </div>
        
        <button @click="loadMore()" class="btn">Change Name</button><br/>
        <button @click="redirectForm()" class="btn">Form</button>
    </section>
    


</template>

<script>
export default {
    name: 'ArticleComponent',
    created() {
        console.log('Hi World and created')
    },
    updated() {
        console.log('Hi World and updated')
    },
    mounted() {
        console.log('Hi World and mounted')
    },
    data(){
        return {
            name: 'Diego',

        }
    },
    methods: {
        loadMore() {
            console.log('Load More')
            this.name = 'DarkcainDs'
            console.log(this.name)
        },
        redirectForm(){
            this.$router.push('/Form')
        }
    }

};
</script>
