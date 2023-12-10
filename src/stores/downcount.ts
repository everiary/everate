import { defineStore } from "pinia";
import { ref } from "vue";

interface Downcount {
  title: string,
  timestamp: number
}

export const useDownCountStore = defineStore(
  "downcount",
  () => {
    const downcountEG: Downcount = {
      title: '新年',
      timestamp: 1704038400000
    }
    const data = ref([downcountEG,{
      title: '喜欢Ta 2年整',
      timestamp: 1716134400000
    },{
      title: '2025 高考',
      timestamp: 1749171600000
    }])

    return { data };
  },
  {
    persist: true
  }
);