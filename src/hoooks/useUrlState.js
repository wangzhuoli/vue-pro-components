import qs from "query-string";
import { onMounted, ref } from "vue";

export default function useUrlState(initialState = {}) {
  const state = ref({});

  onMounted(() => {
    state.value = { ...initialState };
    if (location.search) {
      // 删除第一个？字符串;
      const searchString = location.search.slice(1);
      // 解析url参数
      const searchParse = qs.parse(searchString);
      state.value = { ...state.value, ...searchParse };
    }
  });

  // 更新url
  const update = () => {
    const queryString = qs.stringify(state.value);
    const newUrl = new URL(window.location.href);
    newUrl.search = queryString;
    history.pushState({}, "", newUrl.href);
  };

  return [
    state,
    (newValue) => {
      state.value = { ...state.value, ...newValue };
      update();
    },
  ];
}
