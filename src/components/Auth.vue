<template>
    <div>
        <div>
            <h4 class="text-xl text-gray-800">Welcome</h4>

            <p class="text-gray-600 text-sm">{{ newUser ? 'Create an' : 'Sign in to your' }} account to get started.</p>
        </div>

        <hr class="mt-4">

        <div class="mt-4">
            <div>
                <label class="block">
                    <span class="text-gray-600 text-sm font-medium">Email</span>
                    <input type="email" name="email" id="email" autocomplete="email" autofocus="email" class="form-input mt-1 block w-full rounded-lg shadow-none outline-none focus:shadow-none focus:outline-none focus:border-blue-500" placeholder="john@example.com" v-model="email">
                </label>
            </div>

            <div class="mt-3">
                <label class="block">
                    <span class="text-gray-600 text-sm font-medium">Password</span>
                    <input type="password" name="password" id="password" class="form-input mt-1 block w-full rounded-lg shadow-none outline-none focus:shadow-none focus:outline-none focus:border-blue-500" placeholder="iamapassword" v-model="password">
                </label>
            </div>

            <div class="mt-6 flex items-center">
                <button :class="loading ? 'opacity-75 cursor-not-allowed' : ''" class="rounded-lg px-4 py-2 bg-blue-500 hover:bg-blue-600 text-sm font-medium text-white leading-relaxed shadow-md" @click="signInOrCreateUser" :disabled="loading ? true : false" >

                    <span v-if="loading">
                        <span class="spinner mr-4"></span>
                        <span>{{ newUser ? 'Creating account' : 'Signing in' }}...</span>
                    </span>

                    <span v-else>
                        <span>{{ newUser ? 'Sign up' : 'Sign in' }}</span>
                        <span class="ml-1">&rarr;</span>
                    </span>
                </button>

                <span class="ml-3 text-sm text-gray-600">or</span>

                <button class="ml-3 rounded-lg px-4 py-2 bg-white hover:bg-gray-200 text-sm font-medium text-gray-800 leading-relaxed shadow-md" @click="auth.signInAnonymously()">
                    Sign in anonymously
                </button>
            </div>
        </div>

        <div class="mt-6" v-if="errorMessage">
            <div class="px-4 py-4 bg-red-100 rounded-lg text-sm font-medium text-red-800 text-center">
                {{ errorMessage }}
            </div>
        </div>

        <div class="mt-10" v-if="newUser">
            <p class="text-sm text-gray-600">Already have an acocunt? <a href="#" @click.prevent="newUser = false" class="text-blue-500 hover:text-blue-600">Sign in</a></p>
        </div>

        <div class="mt-10" v-else>
            <p class="text-sm text-gray-600">Don't have an account yet? <a href="#" @click.prevent="newUser = true" class="text-blue-500 hover:text-blue-600">Sign up</a></p>
        </div>
    </div>
</template>

<script>
    import { auth } from '../firebase';

    export default {
        data() {
            return {
                auth,
                newUser: false,
                email: null,
                password: null,
                errorMessage: null,
                loading: false
            }
        },

        methods: {
            async signInOrCreateUser() {
                this.loading = true;
                this.errorMessage = null;

                try {
                    if (this.newUser) {
                        await auth.createUserWithEmailAndPassword(this.email, this.password);
                    } else {
                        await auth.signInWithEmailAndPassword(this.email, this.password);
                    }
                } catch (error) {
                    this.errorMessage = error.message;
                }

                this.loading = false;
            }
        }
    }
</script>
