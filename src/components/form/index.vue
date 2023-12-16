<template>
    <Teleport to="#app">
        <div class="formMain fixed left-0 top-0 w-100vw h-100vh flexCenter " v-show="visible">
            <div class="formClass fixed left-0 top-0 w-100vw h-100vh flexCenter mask -z-1"
                @click="$emit('update:visible', false), clearDate()"></div>
            <div class="formFramework">
                <div class="formBody">
                    <slot />
                </div>
                <!--<div class="formFooter flex items-center justify-end h-10vh">
                    <button @click="$emit('update:visible', false)">cancel</button>
                </div>-->
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDownCountStore } from '@/stores/downcount'
const { clearDate } = useDownCountStore()

defineProps(['visible'])
defineEmits(['update:visible'])

const title = ref('wemsx')

</script>

<style scoped>
/** ANIMATION License
MIT License
Copyright - 2023 gharsh11032000 
Copyright - 2023 omriluz (Omri Luz) 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
.formFramework {
    width: 40vw;
    background: linear-gradient(#212121, #212121) padding-box,
        linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
    border: 0.2vw solid transparent;
    padding: 3.2vh 2.4vw;
    font-size: 1.4vw;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 2vw;
    box-sizing: border-box;
    border-radius: 1.6vw;
    background-size: 200% 100%;
    animation: gradient 5s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>