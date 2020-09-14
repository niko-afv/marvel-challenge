<template>
  <b-container id="app">

    <h1>{{ title }}</h1>
    <CharacterList></CharacterList>
  </b-container>
</template>

<script>
  import CharacterList from './components/CharacterList.vue'

  export default {
    name: 'App',
    components: {
      CharacterList
    },
    data(){
      return {
        title: "First 30 Marvel Characters"
      }
    }
  }
</script>

<style>
  body{
    background:  radial-gradient(circle, #52171d 10%, #071322 45%) no-repeat
  }
  #app{
    padding: 50px 0;
  }
  h1{
    color: #fff;
    text-align: center;
    text-transform: uppercase;
  }
</style>
