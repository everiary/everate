import { defineStore } from "pinia";
import { reactive } from "vue";

interface Config {
  [propName: string]: {
    title: string,
    value: string | boolean | number,
    choices?: string[] | null,
    default: string | boolean | number,
    type: string
  }
}

export const useConfigStore = defineStore(
  "userConfig",
  () => {
    const config:Config = reactive({
      username: {
        title: '用户名',
        value: 'wemsx',
        choices: null,
        default: 'wemsx',
        type: 'input'
      },
      hitokoto_type: {
        title: '一言类型',
        value: 'a',
        choices: ['a','b','c','d','e','f','g','h','i','j','k','l'],
        default: 'a',
        type: 'select'
      },
      enable_about: {
        title: '显示‘关于’',
        value: true,
        choices: null,
        default: true,
        type: 'switch'
      },
      star_speed: {
        title: '背景星星的速度(默认为 9)',
        value: 9,
        choices: null,
        default: 9,
        type: 'input_number'
      },
      star_amount: {
        title: '背景星星的数量(默认 为 8000)',
        value:  8000,
        choices: null,
        default: 8000,
        type: 'input_number'
      },
      notification_before_operation: {
        title: '操作前确认',
        value: true,
        choices: null,
        default: true,
        type: 'switch'
      },
      enable_bing_background: {
        title: '使用 bing 壁纸背景',
        value: false,
        default: false,
        type: 'switch'
      }
    })
    return { config };
  },
  {
    persist: true
  }
);