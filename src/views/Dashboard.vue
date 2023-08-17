<template>
  <div class="Dashboard">
    <h1 class="text-h4 text-grey">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="mb-3">
        <v-btn
          size="x-small"
          prepend-icon="mdi-folder"
          flat
          color="grey"
          v-on:click="sortBy('title')"
          ><v-tooltip location="top" activator="parent"
            >Sort Project by project name </v-tooltip
          >By project name</v-btn
        >
        <v-btn
          size="x-small"
          prepend-icon="mdi-account"
          flat
          color="grey"
          class="mx-3"
          v-on:click="sortBy('person')"
          ><v-tooltip location="top" activator="parent"
            >Sort Project by person
          </v-tooltip>
          By person</v-btn
        >
      </v-row>
      <!---using cards-->
      <!---we use flat prop to prevent box shadow-->
      <v-card v-for="project in projects" :key="project.id">
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col md="6">
            <v-card-title class="caption text-grey">Project Title</v-card-title>
            <v-card-text>{{project.title}}</v-card-text>
          </v-col>
          <v-col sm="4" md="2">
            <v-card-title class="caption text-grey">Person</v-card-title>
            <v-card-text>{{ project.person }}</v-card-text>
          </v-col>
          <v-col sm="4" md="2">
            <v-card-title class="caption text-grey">Due By</v-card-title>
            <v-card-text>{{ project.due }}</v-card-text>
          </v-col>
          <v-col sm="4" md="2">
            <div class="right">
              <v-chip
                size="small"
                :class="`${project.status} my-2 caption text-white`"
                >{{project.status}}</v-chip
              >
            </div>
          </v-col>
        </v-row>
      </v-card>
      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<script>
import db from '../fb'
import {query,collection,getDocs} from 'firebase/firestore'

export default{
  name: 'Dashboard',
  data(){
    return{
    projects: []

  }},
  methods:{
    sortBy(prop){
      this.projects.sort((a,b)=> a[prop]< b[prop]? -1:1)
    },
   async getProject(){
      const querySnap = await getDocs(query(collection(db,'projects')));

      //add each document to the 'projects' array and loop
      querySnap.forEach((doc)=>{
        this.projects.push(doc.data());
      })
    }
  },
  created(){
     this.getProject()
  }

};
</script>

<style>
.project.complete{
  border-left: 15px solid #3cd1c2;

}
.project.ongoing{
  border-left: 15px solid orange;
}
.project.overdue{
  border-left: 15px solid tomato;

}
.v-chip.complete{
  background: #3cd1c2;

}
.v-chip.ongoing{
  background: orange;
}
.v-chip.overdue{
  background: tomato;

}
</style>
