<template>
    <div class="flex items-start flex-col lg:flex-row">
        <div class="xl:w-1/3 lg:w-1/2 md:w-2/3 w-full">
            <User v-slot:user="{ user }">
                <div v-if="user">
                    <UserProfile :user="user" />

                    <hr class="my-6">

                    <ChatList />
                </div>

                <Auth v-else />
            </User>
        </div>
    </div>
</template>

<script>
import Auth from './Auth';
import User from './User';
import UserProfile from './UserProfile';
import ChatList from './ChatList';

export default {
    components: {
        Auth,
        User,
        UserProfile,
        ChatList,
    }
}
</script>
