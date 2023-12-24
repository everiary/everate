import { defineStore } from "pinia";
import { ref } from "vue";
import { useConfigStore } from "./config";

interface Downcount {
  title: string;
  title_draft: string;
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
      title_draft: "",
      timestamp: 1704038400000,
      date: {
        year: 2024,
        month: 1,
        day: 1,
      },
    };
    const downcount = ref([
      downcountEG,
      {
        title: "喜欢Ta 2年整",
        title_draft: "",
        timestamp: 1716134400000,
        date: {
          year: 2024,
          month: 5,
          day: 20,
        },
      },
      {
        title: "Everate, 启动！",
        title_draft: "",
        timestamp: 1698451200000,
        date: {
          year: 2023,
          month: 10,
          day: 28,
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
      for (const item of downcount.value) {
        let { year, month, day, hour, minute, second } = parseTimestamp(
          item.timestamp
        );
        item.date = {
          year: year,
          month: month,
          day: day,
        };
        item.title_draft = "";
      }
      return;
    }

    function applyDate() {
      let { config } = useConfigStore();
      let confirmation = config.safety.notification_before_operation.value
        ? window.confirm("确认修改 倒计时 吗？")
        : true;
      if (confirmation) {
        for (const item of downcount.value) {
          item.timestamp = Date.UTC(
            item.date.year,
            item.date.month - 1,
            item.date.day
          );
          item.title = item.title_draft ? item.title_draft : item.title;
        }
        return;
      }
    }

    return { downcount, clearDate, applyDate, parseTimestamp };
  },
  {
    persist: true,
  }
);
