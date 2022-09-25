<template>
  
      <article class="article-item" >
        <div class="image-wrap">
          <img :src=game.image alt="Game" />
        </div>
        <h2>{{game.item}}</h2>
        <span class="date" :class="{
          yearGreen: game.year > 2004,
          yearRed: game.year <= 2004,
        }">
          Release: {{game.year}}
        </span>
        <a href="#">See more</a>
        <div class="clearfix"></div>
      </article>
</template>

<script>



export default {

  name: 'GameComponent',
    props: ['game'],
    components: {
    
    
},
}
</script>