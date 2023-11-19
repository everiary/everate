import { defineStore } from "pinia";
import { ref } from "vue";

interface Downcount {
  title: string,
  date: {
    y: number,// 0代表每年/月对应日期
    m: number,
    d: number
  }
}

export const useDownCountStore = defineStore(
  "downcount",
  () => {
    const downcountEG: Downcount = {
      title: '新年',
      date: {
        y: 2024,
        m: 1,
        d: 1
      }
    }
    const data = ref([downcountEG,{
      title: '喜欢Ta 2年整',
      date: {
        y: 2024,
        m: 5,
        d: 20
      }
    },{
      title: '2025 高考',
      date: {
        y: 2025,
        m: 6,
        d: 6
      }
    }])

    return { data };
  },
  {
    persist: true,
  }
);