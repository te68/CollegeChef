<template>
  <div>
    <b-card id="confirmation-card">
      <div id="close-container">
       <b-icon-x-circle-fill @click="close" id="close" variant="danger"></b-icon-x-circle-fill>
      </div>
        <b-card-text class = "mb-3">
            <h1 class = "emoji">🎉🎉🎉</h1>
            <h1 id = "congrats-text" class = "mb-4">Congratulations!</h1>
            <p class = "mt-3">This recipe will be added to your meal history</p>
        </b-card-text>
        
        <b-row>
            <b-col>
              <router-link to="/"><b-button>Home</b-button></router-link>
            </b-col>

            <b-col><router-link :to="'/meal-history'" class="history-button"> 
                <b-button>See History</b-button>
            </router-link></b-col>
        </b-row>
    </b-card>

  </div>
</template>

<script>
export default {
  name: 'RecipeConfirmation',
  methods:{
    close(){
      this.$emit('hide')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.mt-3{
  margin-top: 5px !important;
  margin-bottom: 5px !important;
}

#close-container{
  text-align: right;
}

#close{
  width: 25px;
  height: 25px;
  cursor: pointer;
}

#congrats-text{
  font-family: Poppins-Medium;
  font-size: 27px;
}

#confirmation-card{
  position: fixed;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 320px;
  margin-top: -150px;
  margin-left: -150px;
}

.finished-recipe{
    width: 70%;
    height: auto;
}
.emoji {
    font-size: 70px;
}
</style>
