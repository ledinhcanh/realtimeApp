<template>
  <v-card color="grey lighten-5" flat height="100px" tile>
    <v-toolbar dense>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>

      <router-link
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          v-if="item.show">
        <v-btn text>{{ item.title }}</v-btn>
      </router-link>

    </v-toolbar>
  </v-card>
</template>

<script>
export default {
    data(){
        return {
            items: [
                {title: 'Form', to:'/forum',show: true},
                {title: 'Ask Question', to:'/question',show: User.loggedIn()},
                {title: 'Category', to:'/category',show: User.loggedIn()},
                {title: 'Login', to:'/login',show: !User.loggedIn()},
                {title: 'Logout', to:'/logout',show: User.loggedIn()},
            ]
        }
    },
    created() {
        EventBus.$on('logout', () => {
            User.logout();
        });
    }
};
</script>

<style>
</style>
