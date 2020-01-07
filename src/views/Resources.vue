<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col xs="12">
        <v-card>
          <v-card-title>Resources List</v-card-title>
          <v-card-text>
            <template v-if="resources">
              <v-list-item three-line dense v-for="resource in resources" :key="resource.id" :to="{ name: 'resource', params: { id: resource.id }}">
                <v-list-item-avatar>
                  <img :style="`background-color: ${resource.color};`">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Name: {{resource.name}}</v-list-item-title>
                  <v-list-item-subtitle>Year: {{resource.year}}</v-list-item-subtitle>
                  <v-list-item-subtitle>Pantone Value: {{resource.pantone_value}}</v-list-item-subtitle>
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
                <v-list-item-title>No Resources Found</v-list-item-title>
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
import {ResourcesApi} from '@/helpers/api'
export default {
  name: 'ResourcesPage',
  data() {
    return {
      resources: null,
      pagination: {
        page: 1,
        pages: 2
      }
    }
  },
  methods: {
    next (page) {
      this.$axios.get(ResourcesApi + page)
    .then(response => {
      this.resources = response.data.data
      this.pagination.page = response.data.page
      this.pagination.pages = response.data.total_pages
    })
    // eslint-disable-next-line no-console
    .catch(error => {console.log(error)})
    }
  },
  created() {
    this.$axios.get(ResourcesApi + this.pagination.page)
    .then(response => {
      this.resources = response.data.data
      this.pagination.page = response.data.page
      this.pagination.pages = response.data.total_pages
    })
    // eslint-disable-next-line no-console
    .catch(error => {console.log(error)})
  }
}
</script>
