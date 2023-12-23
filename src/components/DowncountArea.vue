<template>
    <div class="downcountarea absolute w-full flexCenter color-#fff">
        <ul>
            <li v-for="item of downcount" class="font-size-1.5vw list-none text-center text-left">
                {{ item.title }}
                <span v-if="computeDatePlus(item.timestamp) > 0">还有<span class="dateNum relative font-size-3vw">{{ ' ' + computeDatePlus(item.timestamp) + ' ' }}</span>天</span>
                <span v-if="computeDatePlus(item.timestamp) == 0"><span class="dateNum relative font-size-3vw">{{ ' ' + '就是今天' + ' ' }}</span></span>
                <span v-if="computeDatePlus(item.timestamp) < 0">已经过了<span class="dateNum relative font-size-3vw">{{ ' ' + -computeDatePlus(item.timestamp) + ' ' }}</span>天</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useDownCountStore } from '../stores/downcount';
const DownCountStore = useDownCountStore()
const { downcount } = storeToRefs(DownCountStore)

const duration = (endDate:number) => {
    var startDate = Date.now()
    if (startDate == endDate) {
        return 0;
    }
    var days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
    return days | 0;
}


const computeDatePlus = (timestamp:number) => {
    return duration(timestamp)
}
</script>

<style scoped>

.dateNum::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.3vw;
    background-image: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 600%, 600%;
    animation: gradientBG 6s ease infinite;
}

@keyframes gradientBG {
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