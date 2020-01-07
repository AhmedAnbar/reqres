<template>
  <v-container>
    <v-row class="text-center" justify="center" align="center">
      <v-col md="12">
        <v-card>
          <v-card-title><v-btn text :to="{name: 'users'}">Back</v-btn></v-card-title>
          <v-card-text>
            <template v-if="user">
              <v-avatar size="150">
                <img :src="user.avatar">
              </v-avatar>
              <p class="display-1 pt-3">{{ user.first_name }} {{ user.last_name }}</p>
              <p class="title">{{ user.email }}</p>
            </template>
          </v-card-text>
          <v-card-actions class="text-center">
            <v-spacer></v-spacer>
            <EditUserDialog v-if="user" :user="user" />
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn icon x-larg v-on="on" @click="del(user.id)">
                  <v-icon x-larg color="red lighten-1">fa-times-circle</v-icon>
                </v-btn>
              </template>
              <span>Delete</span>
            </v-tooltip>
          </v-card-actions>
        </v-card> 
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {UserApi} from '@/helpers/api'
import EditUserDialog from '@/components/EditUserDialog'
export default {
  name: 'UserPage',
  components: {EditUserDialog},
  data() {
    return {
      user: null,
    }
  },
  methods: {
    del(id) {
    this.$axios.delete(UserApi + id)
      .then(() => {
        this.$router.push({name: 'users'})
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        this.$router.push({name: 'users'})
      })
    }
  },
  created() {
    this.$axios.get(UserApi + this.$route.params.id)
    .then(response => {
      this.user = response.data.data
    })
    // eslint-disable-next-line no-console
    .catch(error => {console.log(error)})
  }
}
</script>
