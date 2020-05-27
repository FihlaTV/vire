<template>
    <div>
        <div>
            <div>
                <h6 class="text-xs uppercase font-semibold tracking-wider text-gray-600">Recent Chat Sessions</h6>
            </div>

            <div class="mt-3 rounded-lg overflow-hidden">
                <div v-for="chat in chats" :key="chat.id">
                    <router-link class="block bg-white hover:bg-gray-200 px-4 py-3" :to="{ name: 'chat', params: { id: chat.id } }">{{ chat.id }}</router-link>
                </div>
            </div>
        </div>

        <div class="mt-4">
            <div class="mt-3 rounded-lg">
                <button @click="createChatRoom" class="rounded-lg px-4 py-2 bg-blue-500 hover:bg-blue-600 text-sm font-medium text-white leading-relaxed shadow-md">
                    Create new chat
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebase';

    export default {
        props: ['uid'],

        data() {
            return {
                chats: []
            }
        },

        firestore() {
            return {
                chats: db.collection('chats')
                    .where('owner', '==', this.uid)
            }
        },

        methods: {
            async createChatRoom() {
                const newChat = await db.collection('chats').add({
                    createdAt: Date.now(),
                    owner: this.uid,
                    members: [this.uid]
                });

                console.log(newChat);
            }
        }
    }
</script>
