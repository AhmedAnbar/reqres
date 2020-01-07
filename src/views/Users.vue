<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col xs="12">
        <v-card>
          <v-alert type="warning" v-if="message">
            {{message}}
          </v-alert>
          <v-card-title>Users List</v-card-title>
          <v-card-text>
            <template v-if="users">
              <v-list-item dense v-for="user in users" :key="user.id" tile :to="{ name: 'user', params: { id: user.id }}">
                <v-list-item-avatar>
                  <v-img :src="user.avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{user.first_name}} {{user.last_name}}</v-list-item-title>
                  <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-pagination
                v-model="pagination.page"
                :length="pagination.pages"
                @input="next"
              ></v-pagination>
            </template>
            <v-list-item dense v-else>
              <v-list-item-content>
                <v-list-item-title>No Users Found</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

          </v-card-text>
        </v-card> 
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import {UsersApi} from '@/helpers/api'
export default {
  name: 'UsersPage',
  data() {
    return {
      users: null,
      pagination: {
        page: 1,
        pages: 2
      }
    }
  },
  computed: {
    message() {
      return this.$store.getters['user/getMessage']
    }
  },
  methods: {
    next (page) {
      this.$axios.get(UsersApi + page)
    .then(response => {
      // eslint-disable-next-line no-console
      this.users = response.data.data
      this.pagination.page = response.data.page
      this.pagination.pages = response.data.total_pages
    })
    // eslint-disable-next-line no-console
    .catch(error => {console.log(error)})
    }
  },
  created() {
    this.$axios.get(UsersApi + this.pagination.page)
    .then(response => {
      // eslint-disable-next-line no-console
      this.users = response.data.data
      this.pagination.page = response.data.page
      this.pagination.pages = response.data.total_pages
    })
    // eslint-disable-next-line no-console
    .catch(error => {console.log(error)})
  }
}
</script>
