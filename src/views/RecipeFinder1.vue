<template>
  <div>
    <h1 id="heading">Let's find a recipe!</h1>
    <h1 id="subheading">How much time do you have to cook?</h1>
    <div id="input-container">
      <b-form-input name="time-input" v-model="time" ></b-form-input>
      <label for="time-input">Minutes</label>
    </div>
    <div class="next-button">
      <router-link :to="'/recipe-finder-2/'+ time">
        <b-button @click="changeTime">Next</b-button>
      </router-link>
    </div>
    
    <Navigation currentPage="recipe"/>
  </div>
</template>

<script>

// import data from '../assets/data.json'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'RecipeFinder1',
  components: {
    Navigation
  },
  data() {
      return {
        time: sessionStorage.time
      }
    },
  methods: {
    changeTime(){
      sessionStorage.time = this.time
    }
  }
}
</script>

<style scoped>

#heading{
  margin-top: 175px;
  font-family: Poppins-Semi;
  color: rgb(231, 164, 38);
}

#subheading{
  margin-top: 40px;
}

#input-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.form-control{
  width: 50px;
  margin-right: 10px;
}

.next-button{
  margin-top: 30px;
  text-align: center;
}

</style>