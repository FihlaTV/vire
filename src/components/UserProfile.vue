<template>
    <div>
        <div class="flex items-center justify-between" v-if="user">
            <div>
                <div class="text-xs text-gray-600">Signed in as,</div>

                <div>
                    <span class="text-blue-500">{{ user.email ? user.email : user.uid }}</span>
                </div>
            </div>

            <div>
                <button class="rounded-lg px-4 py-2 bg-white hover:bg-gray-200 text-sm font-medium text-gray-800 leading-relaxed shadow-md" @click="auth.signOut()">
                    Sign out
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import { auth } from '../firebase';

    export default {
        props: ['user'],

        data() {
            return {
                auth,
            }
        }
    }
</script>
