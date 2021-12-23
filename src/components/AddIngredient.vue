<template>
  <div>
    <div id="input-container">
     <b-form-input v-on:keyup.enter="add" id="ingredientInput" v-model="ingredientName" placeholder="Add Ingredients!"></b-form-input>
      <b-button @click="add" id="addButton" variant="outline-primary" class="ml-3">Add</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddIngredient',
  data(){
    return{
      ingredientName: ''
    }
  },
  methods: {
     add(){
      this.$emit('addIngredient', this.ingredientName)
      this.ingredientName = ''
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#input-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#ingredientInput{
  width: 55%;
}

#addButton{
  width: 20%;
  color: rgb(214, 111, 27);
  border-color: rgb(214, 111, 27); 
}

</style>
