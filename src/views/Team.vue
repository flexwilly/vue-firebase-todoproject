<template>
  <div class="Team">
    <h1 class="text-h4 text-grey">Team</h1>
    <!----container to allow for the grid system-->
    <v-container class="my-5">
      <v-row wrap>
        <v-col sm="6" md="4" lg="3" v-for="person in team " :key="person.name">
          <v-card flat class="text-center text-sm ma-3">
            <v-avatar size="100" class="grey-lighten-2">
              <v-img :src="person.avatar" class="pt-4"> </v-img>
            </v-avatar>
            <v-card-text>
              <div class="text-subtite-1">{{ person.name }}</div>
              <div class="text-grey">{{ person.role  }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey" size="small" prepend-icon="mdi-message"
                >Message</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default{
  name: 'Team',
  data(){
    return{
      team :[
        {name:'The Net Ninja', role:'Web Developer', avatar:'/avatar-1.png'},
        {name:'Ryu', role:'Graphics Designer', avatar:'/avatar-2.png'},
        {name:'Chun li', role:'Web Developer' ,avatar: '/avatar-3.png'},
        {name:'Gouken', role:'Social media Maverick', avatar: '/avatar-4.png'},
        {name:'Yoshi', role:'Sales guru' ,avatar:'/avatar-5.png'},
      ]
    }
  }

};
</script>
