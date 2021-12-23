<template>
  <router-link :to="linkRoute" class="link">
    <b-card 
        :title="this.recipeData['name']"
        :sub-title="subtitle"
        :img-src="imgPath"
        :img-alt="this.recipeData['name']"
        img-left class="mb-3">
        <b-card-text>
          Ingredients:
          <span v-for="(item, index) in recipeData['ingredients']" :key="item.ingredientName">
            <span v-if="index < 6">
               {{ item.ingredientName }}{{ index != 5 && index != recipeData['ingredients'].length - 1 ? ",": ""}}
            </span><span v-if="index == 5">...</span>
          </span>
        </b-card-text>
      </b-card>
  </router-link>
    
</template>

<script>
export default {
  name: 'RecipePreview',
  props: {
    recipeData: Object,
    route: String
  },
  data() {
    return {
      imgPath: require('../assets/recipe-photos/' + this.recipeData["img"]),
      subtitle: this.recipeData['time'] + ' Minutes | ' + this.recipeData['difficulty'],
      linkRoute: "/recipes/" + this.route
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 40%;
  border-radius: 15px;
}

.card{
  border-radius: 15px;
}

.link{
  text-decoration: none;
}

.card-title{
  font-family: Poppins-Medium;
  font-size: 16px;
  color: #2c3e50;
}

.card-subtitle{
  font-size: 12px;
}

.card-text{
  text-align: left;
  font-size: 12px;
  color: #2c3e50;
  font-weight: 250;
}

</style>
