<template>
   <div>
      <v-app id="inspire">
         <v-app-bar app color="white" flat>
               <v-avatar
                  :color="
                     $vuetify.breakpoint.smAndDown
                           ? 'grey darken-1'
                           : 'transparent'
                  "
                  size="32"
               ></v-avatar>                       

               <v-tabs centered class="ml-n9" color="grey darken-1">
                  <v-tab to="/" exact>
                     <!-- v-for="link in links" :key="link" -->                     
                     Home                     
                  </v-tab>
                  <v-tab to="/about">                     
                     About                     
                  </v-tab>
                  <v-tab>
                     Link 1
                  </v-tab>
                  <v-tab>                     
                     Logout
                  </v-tab>
               </v-tabs>

               <v-avatar
                  class="hidden-sm-and-down"
                  color="grey darken-1 shrink"
                  size="32"
               ></v-avatar>
         </v-app-bar>

         <v-main class="grey lighten-3">
               <v-container>
                  <router-view></router-view>
               </v-container>
         </v-main>
      </v-app>
   </div>
</template>

<script>
export default {
    data: () => ({
        links: ["Dashboard", "Messages", "Profile", "Updates"]
    })
};
</script>

<style scoped>
   
</style>
