<template>
  <v-card color="grey lighten-5" flat height="100px" tile>
    <v-toolbar dense>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/forum">
        <v-btn text>Forum</v-btn>
      </router-link>
      <router-link to="/question">
        <v-btn text>Ask Question</v-btn>
      </router-link>
      <router-link to="/login">
        <v-btn text>Login</v-btn>
      </router-link>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>