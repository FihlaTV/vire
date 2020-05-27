<template>
    <div>
        <User class="mt-6" #user="{ user }">
            <div v-if="user" class="relative rounded-lg overflow-hidden bg-white" style="min-height: 600px;">
                <div class="overflow-y-auto px-6 py-2 mb-40" style="height: 500px;">
                    <div class="my-4 flex" :class="user.uid === message.sender ? 'justify-end' : 'justify-start'" v-for="message in messages" :key="message.id">
                        <ChatMessage :message="message" :owner="user.id === message.sender" />
                    </div>

                    <!-- <div class="my-4 flex justify-end">
                        <div class="p-4 bg-blue-500 rounded-lg max-w-lg text-white" v-for="message of messages" :key="message.id">
                            {{ message.text }}
                        </div>
                    </div> -->
                </div>

                <div class="absolute bottom-0 left-0 right-0 p-6 bg-gray-200">
                    <div class="relative">
                        <textarea class="form-textarea block w-full rounded-lg pr-40" v-model="newMessageText" name="text" id="text" placeholder="Type a message and press enter" rows="3"></textarea>

                        <button v-if="newMessageText" :disabled="! newMessageText || loading" @click="addMessage(user.uid)" :class="(newMessageText || loading) ? 'opacity-75' : ''" class="absolute bottom-0 right-0 mr-6 mb-3 rounded-lg px-4 py-2 bg-blue-500 hover:bg-blue-600 text-sm font-medium text-white leading-relaxed shadow-md">Send message</button>
                    </div>
                </div>
            </div>

            <div v-else>
                <div>
                    <p class="max-w-sm">
                        Please sign in or create an account to continue into ChatRoom <span class="font-medium text-blue-500">{{ chatId }}</span>
                    </p>
                </div>

                <Auth class="mt-6 xl:w-1/3 lg:w-1/2 md:w-2/3 w-full" />
            </div>
        </User>
    </div>
</template>

<script>
    import ChatMessage from './ChatMessage';
    import User from './User';
    import Auth from './Auth';
    import { db } from '../firebase';

    export default {
        components: {
            ChatMessage,
            User,
            Auth
        },

        data() {
            return {
                newMessageText: null,
                loading: false,
                messages: []
            }
        },

        computed: {
            chatId() {
                return this.$route.params.id;
            },

            messagesCollection() {
                return db.doc(`chats/${this.chatId}`).collection('messages');
            }
        },

        firestore() {
            return {
                messages: this.messagesCollection
                    .orderBy('createdAt')
                    .limitToLast(10)
            }
        },

        methods: {
            async addMessage(uid) {
                this.loading = true;

                const { id: messageId } = this.messagesCollection.doc();

                await this.messagesCollection.doc(messageId).set({
                    text: this.newMessageText,
                    sender: uid,
                    createdAt: Date.now()
                });

                this.loading = false;
                this.newMessageText = null;
            }
        }
    }
</script>
