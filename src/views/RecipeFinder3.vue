<template>
  <div>
    <BackButton/>
    <div v-if="recipes.length != 0">
      <h1>Recipes Found</h1>
       <p id = "blurb">These are suggested recipes based on your time preference ({{this.$route.params.time}} minutes) as well as your
      ingredients and cookware available.</p>
      <div v-for="(recipe) in recipes" :key="recipe.name">
        <RecipePreview v-if="recipe.time <= time" v-bind:recipeData="recipe" v-bind:route="recipe.route"/>
      </div>
    </div>
   
    <div id="error-div" v-if="recipes.length == 0">
      <span class="error">Sorry, no recipes were found with your time constraints and ingredients available.
        Please change your time or edit your ingredient list if possible.
      </span>
    </div>
    <span id="bottom-space">Invisible</span>
  <Navigation currentPage="recipe"/>
  </div>
</template>

<script>

import RecipePreview from '@/components/RecipePreview.vue'
import data from '../assets/data.json'
import Navigation from '@/components/Navigation.vue'
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'RecipeFinder3',
  data(){
    return{
      recipes: [],
      time: this.$route.params.time
    }
  },
  mounted() {
    let currentIngredients = sessionStorage.currentIngredients.toLowerCase()
    // create an array of recipes based on the current ingredients
    for (const recipe in data["Recipes"]){
      let ingredientArray = data["Recipes"][recipe]["ingredients"]
      let recipeValid = true
      for (const ingredient_id in ingredientArray){
        let ingredient = ingredientArray[ingredient_id]["ingredientName"].toLowerCase()
         if (!currentIngredients.includes(ingredient) && !ingredientArray[ingredient_id]["optional"]){
            let hasSubstitute = false
            // if we don't have ingredient, check if we have substitute
            if (ingredientArray[ingredient_id]["substitute"]){
              const subs = ingredientArray[ingredient_id]["substitute"]
              for (const sub in subs){
                if (currentIngredients.includes(subs[sub].toLowerCase())){
                  hasSubstitute = true
                  }
              }
            }
            if (!hasSubstitute){
            recipeValid = false    
            }
         }
      }
      if (recipeValid){
        this.recipes.push(data["Recipes"][recipe])
      }
    }
  },
  components: {
    RecipePreview,
    Navigation,
    BackButton
  }
}
</script>

<style scoped>
#blurb{
  margin-top: 20px;
  margin-bottom: 30px;
}

h1{
  font-family: Poppins-Semi;
  color: rgb(231, 164, 38);
}

#bottom-space{
  margin-bottom: 50px;
  visibility: hidden;
}

#error-div{
  margin-top: 20px;
}

.error{
  color: red;
  font-size: 20px;
}

</style>