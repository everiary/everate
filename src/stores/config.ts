import { defineStore } from "pinia";
import { ref } from "vue";

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
    const config = ref([{
      title: '用户名',
      id: 'username',
      value: 'wemsx',
      default: 'wemsx',
      type: 'input'
    },
    {
      title: '显示‘关于’',
      id: 'enable_about',
      value: true,
      default: true,
      type: 'switch'
    }])
    return { config };
  },
  {
    persist: true,
  }
);