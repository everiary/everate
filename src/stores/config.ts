import { defineStore } from "pinia";
import { reactive, ref } from "vue";

/*interface UserConfig {
  title: string,
  id: string,
  value: string | boolean | number | object,
  default: string | boolean | number | object,
  type: string,
  version?: string
}*/

export const useConfigStore = defineStore(
  "userConfig",
  () => {
    const config = reactive({
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
      notification_before_cache_clear: {
        title: '缓存清除前确认',
        value: true,
        choices: null,
        default: true,
        type: 'switch'
      }
    })
    return { config };
  },
  {
    persist: true
  }
);