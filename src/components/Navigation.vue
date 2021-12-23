<template>
  <div id="nav-bar">
  <b-card title="Card Title" no-body>
      <b-card-header header-tag="nav">
        <b-nav id="labels-container">
          <b-nav-item  v-bind:class="{ active: this.currentPage == 'kitchen' }" id="kitchen-nav" to="/profile">My Kitchen</b-nav-item>
          <b-nav-item  v-bind:class="{ active: this.currentPage == 'recipe' }" id="recipe-nav" to="/">Recipes</b-nav-item>
          <b-nav-item  v-bind:class="{ active: this.currentPage == 'history' }" to="/meal-history">History</b-nav-item>
        </b-nav>
      </b-card-header>
      <router-view></router-view>
  </b-card>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    currentPage: String
  }
}

</script>

<style scoped>

#nav-bar{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1.75px solid black;
  border-bottom: 1.75px solid black;
  border-radius: 2px;
  background-color: white;
}

.card{
  background-color: inherit;
  border: none;
}

.card-header{
  border: none;
}

#labels-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.nav-item{
  width: 33.333%;
}

.nav-link{
  color: inherit;
}

#nav-bar a {
  font-weight: bold;
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 15px;
}

.nav-link:hover{
  color: rgb(202, 40, 40);
}

.card-header{
    padding: 0 !important;
}

#kitchen-nav{
    border-right: 1.75px solid black;
}

#recipe-nav{
    border-right: 1.75px solid black;
}

.active{
   color: rgb(214, 111, 27) !important;
}

</style>