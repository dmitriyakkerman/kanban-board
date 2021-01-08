<template>
    <div class="auth">
        <h1>Sign Up</h1>
        <form @submit.prevent="submitForm" class="auth-form">
            <div class="input-field">
                <input id="name" type="text" v-model.trim="name" :class="{invalid: $v.name.$dirty && !$v.name.required}">
                <label for="name">Name</label>
                <span v-if="$v.name.$dirty && !$v.name.required" class="red-text">Type name</span>
            </div>
            <div class="input-field">
                <input id="email" type="email" v-model.trim="email" :class="{invalid: ($v.email.$dirty && !$v.email.email) || ($v.email.$dirty && !$v.email.required)}">
                <label for="email">Email</label>
                <span v-if="$v.email.$dirty && !$v.email.required" class="red-text">Type email</span>
                <span v-else-if="$v.email.$dirty && !$v.email.email" class="red-text">Type correct email</span>
            </div>
            <div class="input-field">
                <input id="password" type="password" v-model.trim="password" :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.email.$dirty && !$v.password.minLength)}">
                <label for="password">Password</label>
                <span v-if="$v.password.$dirty && !$v.password.required" class="red-text">Type password</span>
                <span v-else-if="$v.email.$dirty && !$v.password.minLength" class="red-text">Password length should be at least {{ $v.password.$params.minLength.min }} symbols</span>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action">Sign Up
                <i class="material-icons right">send</i>
            </button>
            <router-link to="/login" class="waves-effect waves-teal btn-flat">Log In</router-link>
        </form>
    </div>
</template>

<script>

    import {email, required, minLength} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        validations: {
            name: {
                required
            },
            email: {
                email,
                required
            },
            password: {
                required,
                minLength: minLength(8)
            }
        },
        computed: {
            error() {
                return this.$store.getters.error
            }
        },
        watch: {
            error(value) {
                this.$alert(value.code)
            }
        },
        methods: {
            async submitForm() {
                if(this.$v.$invalid) {
                    this.$v.$touch();

                    return;
                }

                let formData = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }

                try {
                    await this.$store.dispatch('register', formData)
                    this.$alert('You were successfully registered! Now log in!')
                    this.$router.push('/login')
                }
                catch (e) {
                    throw new Error(e)
                }
            }
        }
    }

</script>