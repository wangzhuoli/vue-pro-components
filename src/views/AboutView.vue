<template>
  <div class="about">
    <el-button type="primary" @click="changeUrlState">改变</el-button>
  </div>
</template>
<script setup>
import useUrlState from "../hoooks/useUrlState.js";

const [state, setState] = useUrlState({ name: "zs" });
console.log(state);
const changeUrlState = () => {
  setState({ pageSize: 20 });
};

Array.prototype.myMap = function (fn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const value = fn(this[i], i, this);
    result.push(value);
  }
  return result;
};
const arr = [1, 2, 3, 4];

const newArr = arr.myMap((v, i, a) => {
  console.log(v, i, a);
  return v * 2;
});

Array.prototype.myFilter = function (fn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const value = this[i];
    if (fn(value, i, this)) {
      result.push(value);
    }
  }
  return result;
};

const newArr2 = arr.myFilter((v, i, a) => {
  return v % 2 === 0;
});

console.log(newArr2);
</script>
