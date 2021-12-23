<template>
  <div>
    <p>You saved approximately <strong>${{this.ind_weekData["money"]}}</strong> this week!</p>
    <h3>You made:</h3>
    <b-card-group columns>
    <div class="meal" v-for="meal in ind_weekData['meals']" :key="meal">
      <b-card
        :title="recipeData[meal]['name']"
        :img-src="require(`../assets/recipe-photos/${recipeData[meal]['img']}`)"
        :img-alt="recipeData[meal]['name']"
        img-top
        align="center"
        class="mb-2">
      </b-card>
    </div>
    </b-card-group>
  </div>
</template>

<script>
import data from '../assets/data.json'
export default {
  name: 'MealBox',
  props: {
    ind_weekData: Object
    }, //individual week obj within weeks e.g. "10-24-21"
  data(){
    return{
      recipeData: data["Recipes"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  border-radius: 15px;
}

.meal{
  margin-top: 20px;
}

h3{
  font-family: Poppins-Medium;
  margin-bottom: 25px;
  margin-top: 30px;
}

strong{
  color: rgb(66, 128, 66);
}

.card {
  width: 60%;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
}

p {
  font-size: 18px;
}

.card-title{
  font-size: 18px;
  font-family: Poppins-Medium;
  color: #2c3e50;
}
</style>
