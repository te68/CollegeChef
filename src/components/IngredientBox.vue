<template>
  <div class="ingredient-content">
    <span class="box-title">{{this.name}}</span>
    <b-icon @click="remove"  id="x-icon" icon="x" variant="danger" />
  </div>
</template>

<script>
export default {
  name: 'IngredientBox',
  props: {
    name: String
  },
  methods: {
     remove(){
      this.$emit('deleteIngredient', this.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ingredient-content{
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  align-items: center;
}

.box-title{
  width: 80%;
  font-family: Poppins-Medium;
  font-size: 15px;
}

.box-icon{
  width: 20%;
  cursor: pointer;
}

#x-icon{
  width: 28px;
  height: 28px;
}

</style>
