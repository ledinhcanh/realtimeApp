<template>
    <v-container>
        <div class="col-4 offset-4">
            <v-form @submit.prevent="login"

            >
                <v-text-field
                    v-model="form.email"
                    label="Email"
                    type="email"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="form.password"
                    label="Password"
                    type="password"
                    required
                ></v-text-field>


                <v-btn
                    color="green"
                    class="mr-4 w-100"
                    type="submit"
                >
                    Login
                </v-btn>
                <router-link to="/signup">
                    <v-btn color="blue" class="mt-2 mr-4 w-100"
                           type="submit">Sign Up
                    </v-btn>
                </router-link>
            </v-form>
        </div>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: null,
                password: null
            }
        }
    },
    created() {
        if(User.loggedIn()){
            this.$router.push({name: 'forum'})
        }
    },
    methods: {
        login() {
            User.login(this.form);
        }
    }
}
</script>

<style>

</style>
