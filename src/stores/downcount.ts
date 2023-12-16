import { defineStore } from "pinia";
import { ref } from "vue";

interface Downcount {
  title: string;
  timestamp: number;
  date: {
    year: number;
    month: number;
    day: number;
  };
}

export const useDownCountStore = defineStore(
  "downcount",
  () => {
    const downcountEG: Downcount = {
      title: "新年",
      timestamp: 1704038400000,
      date: {
        year: 2024,
        month: 1,
        day: 1,
      },
    };
    const data = ref([
      downcountEG,
      {
        title: "喜欢Ta 2年整",
        timestamp: 1716134400000,
        date: {
          year: 2024,
          month: 5,
          day: 20,
        },
      },
      {
        title: "2025 高考",
        timestamp: 1749171600000,
        date: {
          year: 2025,
          month: 6,
          day: 6,
        },
      },
    ]);

    function parseTimestamp(time: number) {
      let date = new Date(time);
      return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      };
    }

    function clearDate() {
      for (const item of data.value) {
        let { year, month, day, hour, minute, second } = parseTimestamp(
          item.timestamp
        );
        item.date = {
          year: year,
          month: month,
          day: day,
        };
      }
      return;
    }
    function applyDate() {
      for (const item of data.value) {
        item.timestamp = Date.UTC(
          item.date.year,
          item.date.month,
          item.date.day
        );
      }
      return;
    }

    return { data, clearDate, applyDate, parseTimestamp };
  },
  {
    persist: true,
  }
);
