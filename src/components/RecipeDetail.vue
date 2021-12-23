<template>
  <div>
    <BackButton/>
    <h1 id = "recipe-name">{{recipeData["name"]}}</h1>
    <div class="image-container">
     <img class="recipe-image" v-bind:src="imgPath" v-bind:alt="recipeData['name']">
      <p class="img-source">
        <a target="_blank" v-bind:href="imgSource">Image Source</a>
      </p>
    </div>
    <h4 class = "difficulty">{{recipeData["difficulty"]}} | {{recipeData["time"]}} Minutes</h4>
    <h4 class="sub-heading">Ingredients</h4>
      <ul class="ingredient-list">
        <li v-for="item in recipeData['ingredients']" :key="item.ingredientName">
          {{ item.ingredientName }} {{ item["optional"] ? "(optional)": ""}}
          <ul  v-if="item.substitute">
            <li>Substitutes:
              <span v-for="(sub, index) in item.substitute" :key="sub">
               {{ sub }}{{ index != item.substitute.length - 1 ? ",": ""}}
              </span>
            </li>
          </ul>
      </li>
    </ul>
  <h4 class="sub-heading">Instructions</h4>
  <ol class="step-list">
      <li v-for="step in recipeData['steps']" :key="step.instruction">
          {{ step.instruction }} {{ step["optional"] ? "(optional)": ""}}
      </li>
  </ol>
  <b-button variant="success" @click="changePopUp">Finished Recipe</b-button>
  <div v-show="showPopUp">
    <RecipeConfirmation @hide="changePopUp"/>
  </div>

  <!-- <span id="bottom-space">Invisible</span> -->
  <Navigation currentPage="recipe"/>

  </div>


</template>

<script>

import data from '../assets/data.json'
import Navigation from './Navigation.vue'
import BackButton from './BackButton.vue'
import RecipeConfirmation from './RecipeConfirmation.vue'

export default {
  components: { Navigation, BackButton, RecipeConfirmation},
  name: 'RecipeDetail',
  data() {
    return{
        recipeData: data["Recipes"][this.$route.params.recipe_id],
        imgPath: require('../assets/recipe-photos/' + data["Recipes"][this.$route.params.recipe_id]["img"]),
        imgSource: data["Recipes"][this.$route.params.recipe_id]["img-source"],
        showPopUp: false   
    }
  },
  methods: {
    changePopUp() {
      this.showPopUp = !this.showPopUp
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.difficulty {
  font-family: Poppins-Medium;
  font-size: 18px;
  margin-bottom: 15px;
}

#recipe-name{
  font-family: Poppins-Semi;
  font-size: 27px;
  margin-bottom: 30px;
}
  
.image-container{
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}

.recipe-image{
  width: 100%;
  border-radius: 20px;
}

.img-source{
  color: lightgray;
  font-size: 8px;
  margin: 0;
  margin-bottom: 20px;
  text-align: left;
}

.img-source a{
  margin-left: 0 !important;
  font-weight: 100 !important;
}

.sub-heading{
  text-align: left;
  font-family: Poppins-Medium;
  color: rgb(231, 164, 38);
}

.ingredient-list{
  width: 100%;
  text-align: left;
}

.step-list{
  width: 100%;
  text-align: left;
}

.btn-success{
  margin-top: 20px;
  width: 75%;
  margin-bottom: 75px;
}

</style>
