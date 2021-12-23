<template>
  <div>
    <Navigation currentPage="kitchen"/>

      <h1 class="mb-4">My Kitchen 🧑🏼‍🍳</h1>
      <p>Let us know what's in your kitchen so that we can help you find the perfect recipe!</p>

      <h3 class="subheading">What cookware do you have?</h3>
      <div class="mb-3" id="materials-section">
          <b-form-group id = "box1">
            <b-form-checkbox-group
            v-model= "selected" 
            :options = "option1" checked></b-form-checkbox-group>
          </b-form-group>

          <b-form-group id = "box2">
            <b-form-checkbox-group 
            v-model= "selected" 
            :options = "option2" checked></b-form-checkbox-group>
          </b-form-group>
      </div>
      
      <div class = "mt-4" id = "ingredients-section">
        <h3 class = "subheading">Which ingredients do you typically buy?</h3>
        <AddIngredient id="add" @addIngredient="addIngredient"/> 
          <div v-if="ingredients.length > 0" id="ingredient-container">
            <div class="ingredient-box" v-for="(ingredient) in ingredients" :key="ingredient">
              <IngredientBox @deleteIngredient="deleteIngredient" v-bind:name="ingredient"/>
            </div>
          </div>
      <b-button v-if="ingredients.length > 0" @click="clear" id="clearButton" variant="danger" class="ml-3">Clear All</b-button>
      </div>
    </div>

</template>

<script>
// @ is an alias to /src
import data from '../assets/data.json'
import IngredientBox from '@/components/IngredientBox.vue'
import AddIngredient from '@/components/AddIngredient.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Profile',
  components: {
    IngredientBox,
    AddIngredient,
    Navigation
  },
  data(){
    return{
      selected: data['supplies'],
      option1: data['supplies'].slice(0,8),
      option2: data['supplies'].slice(8, (data['supplies'].length)),
      ingredients: sessionStorage.ingredients ? sessionStorage.ingredients.split(',') : [],
    }
  },
  methods: {
    deleteIngredient(name) {
      this.ingredients = this.ingredients.filter(item => item !== name)
      sessionStorage.ingredients = this.ingredients
      sessionStorage.currentIngredients = this.ingredients
    },
    addIngredient(name) {
      this.ingredients.unshift(name.charAt(0).toUpperCase() + name.slice(1))
      sessionStorage.ingredients = this.ingredients
      sessionStorage.currentIngredients = this.ingredients
    },
    clear(){
      this.ingredients = []
      sessionStorage.ingredients = this.ingredients
      sessionStorage.currentIngredients = this.ingredients
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: Poppins-Semi;
  color: rgb(231, 164, 38);
}

.subheading{
  font-family: Poppins-Medium;
  font-size: 22px;
  margin-bottom: 10px;
}

#ingredient-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 20px;
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

#materials-section{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#box1, #box2{
  display: block;
  float: left;
  padding: 5px;
  padding-top: 5px;
  text-align: left;
  font-size: 14px;
}

#box1.span{
  margin-left: 5px;
}

#clearButton{
  margin-bottom: 45px;
}
</style>
