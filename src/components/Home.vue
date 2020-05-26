<template>
    <div class="xl:w-1/3 lg:w-1/2 md:w-2/3 w-full">
        <header>
            <h1 class="text-xl text-gray-800">Welcome</h1>
        </header>

        <User v-slot:user="{ user }">
            <div v-if="user">
                <UserProfile :user="user" />
            </div>

            <Login v-else />
        </User>
    </div>
</template>

<script>
import Login from './Login';
import User from './User';
import UserProfile from './UserProfile';

export default {
    components: {
        Login,
        User,
        UserProfile
    }
}
</script>
