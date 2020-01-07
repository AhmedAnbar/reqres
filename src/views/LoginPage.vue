<template>
  <v-container>
    <v-row class="text-center" justify="center" align="center">
      <v-col
        cols="12"
        md="4"
      >
      <v-alert v-if="error" type="error" v-html="error"></v-alert>
        <v-card>
          <v-list-item tow-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">Login Form</v-list-item-title>
              <v-list-item-subtitle>login to view users and resources</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-row justify="center" align="center">
            <v-col cols="10">
              <v-form lazy-validation v-model="valid" @submit.prevent="login">
                <v-text-field 
                  v-model="form.email"
                  :rules="emailRules"
                  label="Email"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="form.password"
                  :rules="passwordRules"
                  label="Password"
                  type="password"
                  required
                ></v-text-field>
                <v-btn text type="submit" :loading="loading">Login</v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'LoginPage',
  data() {
    return {
      valid: false,
      form: {
        email: null,
        password: null
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Name is required',
      ]
    }
  },
  computed: {
    error() {
      return this.$store.getters['user/getError']
    },
    userIsAuth() {
      return this.$store.getters['user/getUserIsAuth']
    },
    loading() {
      return this.$store.getters['user/getLoading']
    }
  },
  methods: {
    login() {
      if(this.valid) {
        this.$store.dispatch('user/loginUser', this.form)
      }
      else {
        this.$store.dispatch('user/setError')
      }
    }
  },
  created() {
    if(this.userIsAuth) {
      this.$router.push({name: 'resources'})
    }
  }
}
</script>
