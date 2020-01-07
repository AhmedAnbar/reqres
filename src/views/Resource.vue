<template>
  <v-container>
    <v-row class="text-center" justify="center" align="center">
      <v-col md="12">
        <v-card>
          <v-card-title><v-btn text :to="{name: 'resources'}">Back</v-btn></v-card-title>
          <v-card-text>
            <template v-if="resource">
              <v-avatar size="150">
                <img :style="`background-color: ${resource.color};`">
              </v-avatar>
              <p class="display-1  pt-5">Name: {{ resource.name }}</p>
              <p class="title">Year: {{ resource.year }}</p>
              <p class="title">Pantone Value: {{resource.pantone_value}}</p>
              <p class="title">Color Code: {{ resource.color }}</p>
            </template>
          </v-card-text>
        </v-card> 
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {ResourceApi} from '@/helpers/api'
export default {
  name: 'ResourcePage',
  data() {
    return {
      resource: null,
    }
  },
  methods: {
    del(id) {
    this.$axios.delete(ResourceApi +id)
    .then(() => {
      this.$router.push({name: 'resource'})
      
    })
    // eslint-disable-next-line no-console
    .catch(error => {console.log(error)})
    }
  },
  created() {
    this.$axios.get(ResourceApi + this.$route.params.id)
    .then(response => {
      this.resource = response.data.data
    })
    // eslint-disable-next-line no-console
    .catch(error => {console.log(error)})
  }
}
</script>
