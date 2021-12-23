<template>
  <div>
    <BackButton/>
    <h3 id="header">Great! You have <strong>{{cookTime}} minutes</strong> to cook. </h3> 
     <h3 class="header2" v-if="ingredients.length > 0"> What ingredients do you have?</h3>
     <h3 class="header2" v-if="ingredients.length == 0"> Add your ingredients to get started!</h3>

      <AddIngredient  @addIngredient="addIngredient"/>

      <div class="ingredient-container">
          <div class="ingredient-box" v-for="(ingredient) in ingredients" :key="ingredient">
            <IngredientBox  @deleteIngredient="deleteIngredient" v-bind:name="ingredient"/>
          </div>
      </div>

      <b-button v-if="ingredients.length > 0" @click="clear" id="clearButton" variant="danger" class="ml-3">Clear All</b-button>

 
    <div  class="next-button">
      <router-link :to="'/recipe-finder-3/' + cookTime">
        <b-button @click="updateStorage">Next</b-button>
      </router-link>
    </div>
     
  <Navigation currentPage="recipe"/>
  </div>
</template>

<script>

import IngredientBox from '@/components/IngredientBox.vue'
import AddIngredient from '@/components/AddIngredient.vue'
import Navigation from '@/components/Navigation.vue'
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'RecipeFinder2',
   components: {
    IngredientBox,
    AddIngredient,
    Navigation,
    BackButton
  },
  data(){
    return{
      ingredients: sessionStorage.currentIngredients ? sessionStorage.currentIngredients.split(',') : [],
      cookTime: this.$route.params.time
    }
  },
  methods: {
    deleteIngredient(name) {
      this.ingredients = this.ingredients.filter(item => item !== name)
    },
    addIngredient(name) {
      this.ingredients.unshift(name.charAt(0).toUpperCase() + name.slice(1))
    },
    updateStorage(){
      sessionStorage.currentIngredients = this.ingredients
    },
    clear(){
      this.ingredients = []
      sessionStorage.currentIngredients = this.ingredients
    }
  }
}
</script>

<style scoped>
strong{
  color: rgb(231, 164, 38);
}

#header{
  margin-top: 30px;
  margin-bottom: 15px;
}

.header2{
  margin-bottom: 15px;
}

.ingredient-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top:30px;
  width: 100%;
}

.ingredient-box{
  border: 1px solid #2c3e50;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 5px;
  padding-left: 10px;
  padding-left: 10px;
}

.next-button{
  margin-top: 20px;
  margin-bottom: 40px;
  text-align: right;
}

</style>