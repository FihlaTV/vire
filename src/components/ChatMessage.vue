<template>
    <div class="p-4 rounded-lg max-w-lg" :class="owner ? 'bg-gray-200 text-gray-800' : 'bg-blue-500 text-white'">
        {{ message.text }}
    </div>
</template>

<script>
    export default {
        props: ['message', 'owner'],
    }
</script>
