<template>
  <el-form
    :model="form"
    label-width="auto"
    label-suffix=":"
    class="pro-form"
    ref="formRef"
  >
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in columns" :key="item.prop">
        <el-form-item :label="item.label" :prop="item.prop">
          <component
            :is="elComponentTypeMap[item.searchType || 'input']"
            style="width: 100%"
            clearable
            v-bind="item.searchProps"
            v-model="form[item.prop]"
          >
            <template v-if="item.searchType === 'select'">
              <el-option
                v-for="option in item.searchProps.options"
                :key="option.value"
                :value="option.value"
                :label="option.label"
              />
            </template>

            <template v-if="item.searchType === 'cascader'" #default="{ data }">
              <span>{{ data.label }}</span>
            </template>
          </component>
        </el-form-item>
      </el-col>
    </el-row>

    <div style="margin-top: 20px; text-align: center">
      <el-space>
        <el-button @click="handleResetSearchForm">重置</el-button>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </el-space>
    </div>
  </el-form>
</template>

<script setup lang="ts">
import {
  ElForm,
  ElInput,
  ElSelect,
  ElDatePicker,
  ElCascader,
} from "element-plus";
import { defineProps, ref, defineEmits, watch } from "vue";
import { ProTableColumns } from "@/components/ProTable2/types";

const props = defineProps<{
  columns: ProTableColumns<any>[];
  formValue: { [key: string]: any };
}>();

const emit = defineEmits<{
  (e: "updateFormValue", value: any): void;
}>();

const elComponentTypeMap = {
  input: ElInput,
  select: ElSelect,
  datePicker: ElDatePicker,
  cascader: ElCascader,
};

const formRef = ref<InstanceType<typeof ElForm>>();

const form = ref<{ [key: string]: any }>({});

watch(
  [() => props.formValue],
  () => {
    form.value = props.formValue;
  },
  { immediate: true }
);

// 重置查询表单
const handleResetSearchForm = () => {
  formRef.value?.resetFields();
};

// 点击搜索
const handleSearch = () => {
  emit("updateFormValue", form.value);
};
</script>

<style scoped lang="less"></style>
