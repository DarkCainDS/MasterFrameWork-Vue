<template>
  <section id='content'>
    <h2>Games</h2>

    <div id="articles">
      <GameComponent v-for="game in games" :key="game.id" :game="game" />
    </div>
  </section>
</template>

<script>
  import GameComponent from './GameComponent.vue'
export default {
  name: 'HelloWorld',
  components: {
    GameComponent,
  },
  

  data() {
    return {
      name: 'Diego',
      games: [
        { id: 1, item: 'Shadow of the colossus', year: '2005', image: 'https://cdn.shopify.com/s/files/1/0024/6808/5809/products/shadow-of-the-colossus-ps4-fisicos-y-ssellados-stock-ya-D_NQ_NP_631480-MLA29022221848_122018-F_1200x630.jpg?v=1592507523' },
        { id: 2, item: 'ICO', year: '2001', image: 'https://gamefaqs.gamespot.com/a/box/2/4/5/11245_front.jpg' },
        { id: 3, item: 'Last Guardian', year: '2016', image: 'https://media.vandal.net/i/ivandal/1200x630/31654/the-last-guardian-2016126114145_1.jpg' },
        { id: 4, item: 'Enemy Zero', year: '1996', image: 'https://www.mobygames.com/images/covers/l/423583-enemy-zero-sega-saturn-manual.jpg' },
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
