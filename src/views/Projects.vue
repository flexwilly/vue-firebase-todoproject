<template>
  <div class="Projects">
    <h1 class="text-h4 text-grey">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects " :key="project.title">
          <v-expansion-panel-title>{{ project.title }}</v-expansion-panel-title>
          <v-expansion-panel-text class="text-bold px-4 text-grey">
            {{ project.due }}
          </v-expansion-panel-text>
          <v-expansion-panel-text class="text-bold px-4 text-grey">
            {{ project.content }}
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from '../fb'
import {query,collection,getDocs} from 'firebase/firestore'

export default{
  name: 'Projects',
 data :()=>{
   return{
    projects:[]
   }
 },
 computed:{
   myProjects(){
      return this.projects.filter(project=>{
        return project.person === 'The Net Ninja'
      })
   }
 },
 methods:{
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
