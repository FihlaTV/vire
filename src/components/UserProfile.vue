<template>
    <div>
        <div v-if="user">
            Signed in as <span class="font-medium">{{ user.uid }}</span>
        </div>

        <div class="mt-4">
            <button class="rounded-lg px-4 py-2 bg-blue-500 hover:bg-blue-600 text-sm font-medium text-white leading-relaxed shadow-md" @click="auth.signOut()">
                Sign out
            </button>
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
