<template>
   <span>
      <button id="backbutton" @click="back">
          <b-icon class="icons" icon="arrow-left-square"></b-icon>
      </button>
    </span>
</template>

<script>
export default {
  name: 'BackButton',
methods: {
    back() {
      return this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#backbutton{
    display: block;
    text-align: left;
    border: none;
    background-color: white;
    padding: none;
}

.icons{
    font-size: 35px;
    color: black;
  }

</style>
