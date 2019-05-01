/**
 * 整体表单配置项
 */
export const formConfig = `(Vue) => ({
  // 表单规则
  formRule: {
    props: {
      // 数据绑定对象
      model: {
        name: 'cllemon',
        date: '',
        region: '',
        delivery: false,
        type: ['地推活动'],
        resource: '',
        desc: '',
      },

      // 规则列表
      rules: {
        name: [{ required: true, message: '请输入活动名称' }],
        date: [{ required: true, message: '请选择活动日期' }],
        region: [{ required: true, message: '请选择活动区域' }],
        resource: [{ required: true, message: '请选择特殊资源' }],
        desc: [{ required: true, message: '请填写活动形式' }],
      },
      // 表单label宽度
      'label-width': '100px',
      // 表单label对齐方式
      'label-position': 'right',
      // 表单label前缀
      'label-suffix': ':',
      // 表单内组件尺寸
      size: 'medium',
    },
    events: {
      // validate: (val) => {},
    },
  },

  // 表单项规则
  formItemsRule: [
    {
      // 表单项下发属性
      props: {
        label: '活动名称',
        prop: 'name',
        // rules: [{ required: true, message: '请输入活动名称' }],
        // 'label-width': '100px',
      },
      // 表单项组件插槽
      // slot 支持数组和对象两种形式
      // 这里的slot 是 el-form-item 下的插槽
      // 本想可支持 Object | Array
      // 但是 Array 渲染多个插槽，虽然可提供此能力，而我们想提供的仅仅是一个插槽。
      // Array 会使配置变得臃肿，且使复杂度变高。
      // 建议，复杂组件你自己去实现，全局注册引入 比如：name: "complex-component"
      // 这样做的好处是：分离复杂逻辑，只关注内在状态变化（即：值改变）也符合模块化思想。
      slot: {
        // 组件名
        name: 'el-input',
        // 组件下发属性
        props: {
          placeholder: '请输入活动名称',
        },
        // 组件下发事件
        events: {
          change: (val) => {
            console.log('活动名称值改变结果：');
            console.log(val);
            console.log('Vue实例：');
            console.log(Vue);
          },
        },
      },
    },
    {
      // 表单项下发属性
      props: {
        label: '活动时间',
        prop: 'date',
        // 'label-width': '100px',
      },

      // 表单项组件插槽
      // slot 支持数组和对象两种形式
      slot: {
        // 组件名
        name: 'el-date-picker',

        // 组件下发属性
        props: {
          placeholder: '请输入活动时间',
          type: 'date',
        },

        // 组件下发事件
        events: {
          change: (val) => {
            console.log('活动日期值改变结果：');
            console.log(val);
            console.log('Vue实例：');
            console.log(Vue);
          },
        },
      },
    },
    {
      props: {
        label: '活动区域',
        prop: 'region',
      },
      slot: {
        name: 'el-select',
        props: {
          placeholder: '请选择活动区域',
          clearable: true,
        },
        events: {
          change: (val) => {
            console.log('活动区域：', val);
          },
        },

        // <el-select>
        //   <el-option></el-option>
        // </el-select>
        // 这里 枚举列表 - 对应 key 值 和 element-ui 保持一致，不去人为修改，保证 API 和 其一致。
        // 常见业务场景：可能自己的接口数据key和其不一致，自己可以实现一个 formatter()实现。
        slot: {
          name: 'el-option',
          list: [
            {
              label: '西瓜',
              value: 'watermelon',
            },
            {
              label: '柠檬',
              value: 'lemon',
            },
            {
              label: '柑橘',
              value: 'citrus',
              disabled: true,
            },
            {
              label: '芒果',
              value: 'mango',
            },
          ],
        },
      },
    },
    {
      props: {
        label: '及时配送',
        prop: 'delivery',
      },
      slot: {
        name: 'el-switch',
      },
    },
    {
      props: {
        label: '活动性质',
        prop: 'type',
      },
      // <el-checkbox-group>
      //   <el-checkbox></el-checkbox>
      // </el-checkbox-group>
      slot: {
        name: 'el-checkbox-group',
        props: {
          min: 1,
          style: {
            display: 'flex',
            width: '300px',
            flexWrap: 'wrap',
          },
        },
        events: {
          change: (val) => {
            console.log('活动性质：', val);
          },
        },
        slot: {
          name: 'el-checkbox',
          list: [
            {
              label: '美食/餐厅线上活动',
              name: 'food',
              value: 'foods',
            },
            {
              label: '地推活动',
            },
            {
              label: '线下主题活动',
              style: {
                width: '143px',
              },
            },
            {
              label: '单纯品牌曝光',
            },
          ],
        },
      },
    },
    {
      props: {
        label: '特殊资源',
        prop: 'resource',
      },
      // <el-radio-group>
      //   <el-radio></el-radio>
      // </el-radio-group>
      slot: {
        name: 'el-radio-group',
        props: {
          style: {
            display: 'flex',
            width: '300px',
            flexWrap: 'wrap',
            'margin-top': '10px',
          },
        },
        events: {
          change: (val) => {
            console.log('特殊资源:', val);
          },
        },
        slot: {
          name: 'el-radio',
          list: [
            {
              label: '线上品牌商赞助',
              name: 'food',
              value: 'foods',
            },
            {
              label: '线下场地免费',
            },
          ],
        },
      },
    },
    {
      props: {
        label: '活动形式',
        prop: 'desc',
      },
      slot: {
        name: 'el-input',
        props: {
          type: 'textarea',
          placeholder: '请输入活动形式内容',
          clearable: true,
          autosize: { minRows: 2, maxRows: 2 },
        },
      },
    },
  ],

  // 可传可不传
  formOperateRule: [
    {
      label: '返回',

      value: 'return',

      // 针对el-button
      props: {
        size: 'medium',
      },
      method: (operate, ref) => {
        Vue.$message({
          message: '恭喜你，返回成功',
          type: 'success',
        });
      },
    },
    {
      label: '重置',
      props: {
        size: 'medium',
      },
      method: (operate, ref) => {
        ref.resetFields();
      },
    },
    {
      label: '确定',
      props: {
        size: 'medium',
        type: 'primary',
      },
      method: (operate, ref) => {
        ref.validate((valid) => {
          if (valid) {
            Vue.$confirm('此操作将提交表单, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
            }).then(() => {
              Vue.$message({
                type: 'success',
                message: '提交信息：' + JSON.stringify(Vue.config.formRule.props.model),
              });
            });
          }
        });
      },
    },
  ],
})`;
