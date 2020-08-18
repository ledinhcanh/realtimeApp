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
        methods: {
            login() {
                User.login(this.form);
            }
        }
    }
</script>

<style>

</style>
