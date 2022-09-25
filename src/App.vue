<template>

  <HeaderComponent></HeaderComponent>
  <SliderComponent></SliderComponent>
  <div class="center">
    <router-view></router-view>
    <!--<ArticleComponent></ArticleComponent>-->
    <AsideComponent></AsideComponent>
  </div>
  <FooterComponent></FooterComponent>

</template>

<script>


import HeaderComponent from './components/HeaderComponent.vue'
import SliderComponent from './components/SliderComponent.vue'
import AsideComponent from './components/AsideComponent.vue'
//import ArticleComponent from './components/ArticleComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SliderComponent,
    AsideComponent,
    //ArticleComponent,
    FooterComponent,

    
},
  data(){
    return {
      message: 'Welcome to My world'
    }
  }
}
</script>

<style>
  @import './assets/Css/style.css';

</style>
