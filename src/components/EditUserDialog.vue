<template>
  <div>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn icon x-larg v-on="on" @click.stop="dialog = true">
          <v-icon x-larg color="primary lighten-1">fa-edit</v-icon>
        </v-btn>
      </template>
      <span>Edit</span>
    </v-tooltip>
    <v-dialog
      v-model="dialog"
      max-width="370"
    >
      <v-card class="pa-5">
        <v-card-title class="headline">Edit {{user.first_name}} {{user.last_name}} Data</v-card-title>
            <v-form @submit.prevent="edit">
              <v-text-field 
                v-model="form.name"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.job"
                label="Job"
                required
              ></v-text-field>
              <v-btn text type="submit">Edit</v-btn>
            </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import {UserApi} from '@/helpers/api'
export default {
  name: 'EditUserDialog',
  props: ['user'],
  data() {
    return {
      dialog: false,
      valid: false,
      form: {
        name: null,
        job: null
      }
    }
  },
  methods: {
    edit() {
      if (this.valid) {
        this.$axios.patch(UserApi + this.user.id, )
        .then(() => {
          this.$router.push({name: 'users'})
        })
        // eslint-disable-next-line no-console
        .catch(error => {console.log(error)})
      }
    },
    formValid() {
      return this.form.name != null && this.form.job != null ? this.valid = true : null
    }
  }
}
</script>
