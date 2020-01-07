const routes = [
  {
    path: '/',
    name: 'resources',
    component: () => import('../views/Resources.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/resource/:id',
    name: 'resource',
    component: () => import('../views/Resource.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/Users.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/User.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterPage.vue')
  }
]

export default routes