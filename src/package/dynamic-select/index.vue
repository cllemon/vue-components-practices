
<template>
  <!--

    这个组件的目的：只是提供一个思路，
    在表单中存在复杂组件时，可以提取出来，化繁为简。

    以下代码纯粹是模拟出一个场景，不具有任何通用性可言：三层级联选择器，每层对应不同校验方式，搜索等。

  -->
  <el-form :model="model"
           :rules="rules"
           ref="dynamicSelect"
           style="display: flex;">

    <el-form-item label=""
                  prop="first">
      <el-select v-model="model.first"
                 placeholder="请选择一级类目"
                 clearable
                 @change="handerChange('first')">
        <el-option v-for="(option, index) in data"
                   :label="option.label"
                   :value="option.value"
                   :key="index">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label=""
                  prop="second"
                  v-if="secodList && secodList.length"
                  style="padding: 0 10px;">
      <el-select v-model="model.second"
                 placeholder="请选择二级类目"
                 clearable
                 @change="handerChange('second')">
        <el-option v-for="(option, index) in secodList"
                   :label="option.label"
                   :value="option.value"
                   :key="index">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label=""
                  prop="third"
                  v-if="thirdList && thirdList.length">
      <el-select v-model="model.third"
                 placeholder="请选择三级类目"
                 clearable
                 @change="handerChange('third')">
        <el-option v-for="(option, index) in thirdList"
                   :label="option.label"
                   :value="option.value"
                   :key="index">
        </el-option>
      </el-select>
    </el-form-item>

  </el-form>

</template>

<script>
export default {
  componentName: 'dynamic-select',

  props: {
    value: {
      required: true,
      default: () => ({}),
    },
    list: {
      type: Array,
      default: () => [
        {
          label: '一级类目 - A',
          value: '1 - A',
          children: [
            {
              label: '二级类目 - 1 - A',
              value: '2 - 1 - A',
              children: [
                {
                  label: '三级类目 - 1 - 1 - A',
                  value: '3 - A - 1 - 1',
                },
                {
                  label: '三级类目 - 1 - 2 - A',
                  value: '3 - A - 1 - 2',
                },
                {
                  label: '三级类目 - 1 - 3 - A',
                  value: '3 - A - 1 - 3',
                },
              ],
            },
            {
              label: '二级类目 - 2 - A',
              value: '2 - 2 -A',
              children: [
                {
                  label: '三级类目 - 2 - 1 - A',
                  value: '3 - A - 2 - 1',
                },
                {
                  label: '三级类目 - 2 - 2 - A',
                  value: '3 - A - 2 - 2',
                },
                {
                  label: '三级类目 -  2 - 3 - A',
                  value: '3 - A - 2 - 3',
                },
                {
                  label: '三级类目 -  2 - 4 - A',
                  value: '3 - A - 2 - 4',
                },
              ],
            },
            {
              label: '二级类目 - 3 - A',
              value: '2 - 3 -A',
            },
          ],
        },
        {
          label: '一级类目 - B',
          value: '2 - B',
          children: [
            {
              label: '二级类目 - 1 - B',
              value: '2 - 1 - B',
            },
            {
              label: '二级类目 - 2 - B',
              value: '2 - 2 - B',
            },
            {
              label: '二级类目 - 3 - B',
              value: '2 - 3 - B',
              children: [
                {
                  label: '三级类目 - 2 - 1 - B',
                  value: '3 - B - 2 - 1',
                },
                {
                  label: '三级类目 - 2 - 2 - B',
                  value: '3 - B - 2 - 2',
                },
              ],
            },
            {
              label: '二级类目 - 3 - B',
              value: '2 - 4 - B',
            },
            {
              label: '二级类目 - 4 - B',
              value: '2 - 5 - B',
            },
          ],
        },
        {
          label: '一级类目 - C',
          value: '3 - C',
        },
      ],
    },
  },

  data() {
    return {
      model: this.value,
      rules: {
        first: [{ required: true, message: '请选择一级类目', trigger: 'change' }],
        second: [{ required: true, message: '请选择二级类目', trigger: 'change' }],
        third: [{ required: true, message: '请选择三级类目', trigger: 'change' }],
      },
      data: this.list,
    };
  },

  computed: {
    secodList() {
      return this.find(this.model.first);
    },
    thirdList() {
      return this.find(this.model.first, true);
    },
  },

  watch: {
    model(val, oldVal) {
      if ((val, oldVal)) {
        this.$emit('input', val);
      }
    },
  },

  methods: {
    find(first, second) {
      let secondList = [];
      let thirdList = [];
      this.data.forEach((item) => {
        if (item.value === first && item.children && item.children.length) {
          secondList = item.children;
        }
      });
      if (first && !second) {
        return secondList;
      }
      if (second && secondList && secondList.length) {
        secondList.forEach((ele) => {
          if (ele.value === this.model.second && ele.children && ele.children.length) {
            thirdList = ele.children;
          }
        });
        return thirdList;
      }
    },
    handerChange(val) {
      if (val === 'first') {
        this.model.second = '';
        this.model.third = '';
      }
      if (val === 'second') {
        this.model.third = '';
      }
    },

    // 重置
    dynamicResetFiles() {
      this.$refs.dynamicSelect.resetFields();
    },
    // 校验
    dynamicValidate() {
      this.$refs.dynamicSelect.validate((valid) => {
        if (valid) {
          this.$emit('validateResult', true);
        } else {
          this.$emit('validateResult', false);
        }
      });
    },
  },

  created() {
    // 简直了
    // /(ㄒoㄒ)/~~
    this.$on('dynamicResetFiles', this.dynamicResetFiles);
    this.$on('dynamicValidate', this.dynamicValidate);
  },
};
</script>

<style lang="scss" scoped>
</style>
