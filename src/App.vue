<template>
    <div id="app" class="antialiased text-gray-700 leading-normal bg-gray-100 h-screen overflow-x-hidden">
        <div class="container mx-auto px-6">
            <header class="mt-10 mb-6">
                <h1 class="text-2xl text-gray-800">Vire Walkie Talkie</h1>

                <p>
                    <span class="px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-xs">Realtime voice chat</span>
                </p>
            </header>

            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',

    components: {
        //
    }
}
</script>

