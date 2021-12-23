<template>
<div id ="app">
  <div id="nav">
        <router-view/>
  </div>
</div>
</template>

<script>

import data from './assets/data.json'

export default {
   mounted() {
    sessionStorage.ingredients = data['ingredients']
    sessionStorage.currentIngredients = data['ingredients']
    sessionStorage.time = data['availability']
  }
}
</script>


<style>

@font-face{
  font-family: Poppins-Reg;
  src: url(./fonts/Poppins-Regular.ttf) format("truetype")
}

@font-face{
  font-family: Poppins-Semi;
  src: url(./fonts/Poppins-Semi.ttf) format("truetype")
}

@font-face{
  font-family: Poppins-Medium;
  src: url(./fonts/Poppins-Medium.ttf) format("truetype")
}

#app {
  font-family: Poppins-Reg;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 22px;
}

#labels{
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
}

#nav a {
  font-weight: bold;
  /* color: #2c3e50; */
}
</style>
