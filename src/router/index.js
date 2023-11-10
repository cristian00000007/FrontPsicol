import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Estudiantes from '../views/Estudiantes.vue'
import VerEstudiantes from '../views/VerEstudiantes.vue'
import CrearEstudiante from '../views/CrearEstudiante.vue'
import EditarEstudiante from '../views/EditarEstudiante.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/VerEstudiantes/:id',
    name: 'Ver',
    component: VerEstudiantes
  },
  {
    path: '/Estudiantes',
    name: 'Lista',
    component: Estudiantes
  },
  {
    path: '/CrearEstudiantes',
    name: 'Crear',
    component: CrearEstudiante
  },
  {
    path: '/EditarEstudiante/:id',
    name: 'Editar',
    component: EditarEstudiante
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
