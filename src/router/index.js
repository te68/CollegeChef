import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile.vue'
import MealHistory from '../views/MealHistory.vue'
import RecipeFinder1 from '../views/RecipeFinder1.vue'
import RecipeFinder2 from '../views/RecipeFinder2.vue'
import RecipeFinder3 from '../views/RecipeFinder3.vue'
import RecipeDetail from '../components/RecipeDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/meal-history',
    name: 'MealHistory',
    component: MealHistory
  },
  {
    path: '/',
    name: 'RecipeFinder1',
    component: RecipeFinder1
  },
  {
    path: '/recipe-finder-2/:time',
    name: 'RecipeFinder2',
    component: RecipeFinder2
  },
  {
    path: '/recipe-finder-3/:time',
    name: 'RecipeFinder3',
    component: RecipeFinder3
  },
  {
    path: '/recipes/:recipe_id',
    name: 'RecipeDetail',
    component: RecipeDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
