<template>
    <button @click="increment">  Increment </button>
    <p>{{ count }}</p>
</template>

<script>
export default {
    data() {
        return { count:0 };
    },

    methods:
    {
        increment() {
            this.count++;
        }
    }
}
</script>