<template>
    <div class="downcountarea absolute w-full flexCenter color-#fff">
        <ul>
            <li v-for="item of data" class="font-size-1.5vw list-none text-center text-left">{{ item.title }}还有<span class="dateNum relative font-size-3vw">{{ ' ' + computeDatePlus(item.timestamp) + ' ' }}</span>天
            </li>
        </ul>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import { useDownCountStore } from '../stores/downcount.ts';
const DownCountStore = useDownCountStore()
const { data } = storeToRefs(DownCountStore)

const duration = (endDate) => {
    var startDate = Date.now()
    if (startDate > endDate) {
        return 0;
    }
    if (startDate == endDate) {
        return 1;
    }
    var days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
    return days | 0;
}

/*const computeDate = (item) => {
    if (item.m != 0 && item.y != 0) {
        let date = new Date(item.y, item.m - 1, item.d)
        return how(date)
    }
    else if (item.m = 0) {
        let current = new Date.getDate()
        return how(new Date(item.y, (item.d >= current) ? item.m - 1 : new Date.getMonth(), item.d))
    }
    else {
        let currentDate = new Date.getDate()
        let currentMonth = new Date.getMonth() + 1
        //获取现实中的月份与日期进行比较。若现实月份大/日期大则把目标设为原目标日期。反之则自动加一年。
        if (item.m > currentMonth) {
            return how(new Date(item.y, month, item.d))
        } else if (item.m == currentMonth) {
            let isNextYear = (item.d >= currentDate)
            return how(new Date(isNextYear ? item.m - 1 : new Date.getMonth(), item.m, item.d))
        } else return how(new Date(item.y, item.m - 1, item.d))
    }
}*/

const computeDatePlus = (timestamp) => {
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