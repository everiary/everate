<template>
    <div class="controlBars">
        <button @click="a">Settings</button>
        <button @click="b">About</button>
    </div>
</template>
<script setup lang="ts">
const a = () => { alert('1') }
const b = () => { alert('2') }
</script>
<style scoped>
.controlBars {
    position: absolute;
    left: 10%;
    width: 80%;
    display: flex;
    grid-column-gap: 2vw;
}

button {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.5vw 1.2vw;
    border: 0.1vw solid rgba(84, 84, 84, .65);
    border-radius: 0.4vw;
    font-size: 1vw;
    font-weight: 600;
}
</style>