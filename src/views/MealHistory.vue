<template>
  <div>
    <h1 id = "history-title" class = "mb-4">🍴 Weekly Meal History 🍲</h1>
    <div class = "datehead">
      <b-icon class = "icon-arrow" icon = "arrow-left" ></b-icon>
      <h1>{{ this.week["period"] }}</h1>
      <b-icon class = "icon-arrow" icon = "arrow-right"></b-icon>
    </div>
    <MealBox v-bind:ind_weekData="week" />
    <Navigation currentPage="history"/>
     <span id="bottom-space">Invisible</span>
  </div>
</template>

<script>
import data from "../assets/data.json"
import MealBox from '@/components/MealBox.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'MealHistory',
  components: {
    MealBox,
    Navigation
  },

  data(){
    return {
      week: data["weeks"]["10-31-21"]
    }
  },
}
</script>

<style scoped>
#history-title{
  font-family: Poppins-Semi;
  color: rgb(231, 164, 38);
}

h1 {
  font-size: 25px;
  margin: auto 10px;
  text-align: center;
  font-weight: bold;
}

.datehead {
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
  align-items: center;
  justify-content: center;
}

.icon-arrow {
  margin-top: auto;
  margin-bottom: auto;
  font-size: 30px;
  margin: 10px;
  color: black;
}

#bottom-space{
  margin-bottom: 50px;
  visibility: hidden;
}
</style>