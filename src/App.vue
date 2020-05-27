<template>
    <div id="app" class="antialiased text-gray-700 leading-normal bg-gray-100 min-h-screen overflow-x-hidden pb-24">
        <div class="container mx-auto px-6">
            <header class="mt-10 mb-6">
                <div>
                    <a href="#" class="block h-10">
                        <img src="./assets/img/logo.png" class="h-10" alt="Vire">
                    </a>
                </div>

                <p class="mt-2">
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

