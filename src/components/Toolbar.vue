<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>REQ | RES</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          text
          v-for="(nav, index) in navs"
          :key="index"
          :to="nav.to"
        >
          {{nav.label}}
        </v-btn>
        <template v-if="userIsAuth">
          <v-btn text @click="logout">
            Logout
          </v-btn>
        </template>
        <template v-else>
          <v-btn text :to="{name: 'login'}">
            Login
          </v-btn>
          <v-btn text :to="{name: 'register'}">
            Register
          </v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<script>
  export default {
    name: 'Toolbar',
    data() {
      return {
        navs: [
         {
           label: 'Resources',
           to: '/',
         },
         {
           label: 'Users',
           to: '/users',
         }
       ]
      }
    },
    computed: {
      userIsAuth() {
        return this.$store.getters['user/getUserIsAuth']
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('user/logoutUser')
      }
    }
  }
</script>
