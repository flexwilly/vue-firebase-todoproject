<template>
  <v-btn flat color="success">
    Add New Project
    <v-dialog width="600px" activator="parent" v-model="dialog">
      <v-card>
        <v-card-title><h2>Add a new project</h2></v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
              :rules="inputRules"
            ></v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="mdi-table-edit"
              :rules="inputRules"
            ></v-textarea>
            <!---datepicker-->
            <v-text-field
              type="date"
              label="Due date"
              prepend-icon="mdi-calendar"
              v-model="due"
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              flat
              color="success"
              class="mx-0 mt-3"
              v-on:click="submit"
              :loading="loading"
              >Add project</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-btn>
</template>
<script>
import db from '../fb'
import {collection, addDoc} from 'firebase/firestore'
export default{
  data(){
        return{
                title:'',
                content:'',
                due:null,
                inputRules:[
                  v => v.length >=3 || 'Minimum length is 3 characters'
                ],
                loading:false,
                dialog:false,
        }
  },
  methods:{
       async submit(){
                if(this.$refs.form.validate()){
                 //set the loading to true
                 this.loading = true;
                 // console.log(this.title,this.content)
                 //data to send
                 const project = {
                  title:this.title,
                  content:this.content,
                  due: this.due,
                  person: 'The Net Ninja',
                  status:'ongoing'
                 }
                //the collection in the firebase app - referrence to projects collection
                const colsRef = collection(db,'projects');

                //cretate document and return its referrence with addDoc
                const docRef = await addDoc(colsRef,project);
                //stop loading once the data has been inserted
                this.loading = false;
                //close the dialog after inserting
                this.dialog=false;

                //emitting an event
                this.$emit('projectAdded');

                //access auto generated id  with .id
                console.log('Document was created with id ',docRef.id);
               }
                  }
  },

}
</script>
