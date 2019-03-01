/**
 * 整体表单配置项
 */

export const formConfig = (Vue) => ({
  formRule: {
    props: {
      model: {
        date: '',
        distortCascade: {
          first: '',
          second: '',
          third: '',
        },
        delivery: true,
        type: [],
        cascader: [],
        rate: 0,
        region: '',
      },
      rules: {
        region: [{ required: true, message: '请选择活动区域' }],
        date: [{ type: 'date', required: true, message: '请选择活动日期' }],
      },
      'label-width': '100px',
      'label-suffix': ':',
    },
  },
  formItemsRule: [
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
        label: '活动时间',
        prop: 'date',
      },
      slot: {
        name: 'el-date-picker',
        props: {
          placeholder: '请输入活动时间',
        },
        events: {
          change: (val) => {
            console.log(`活动日期：${val}, 组件实列：${Vue}`);
          },
        },
      },
    },
    {
      props: {
        label: '扭曲级联',
        prop: 'distortCascade',
        required: true,
      },
      slot: {
        name: 'dynamic-select',
        events: {
          validateResult: (result) => {
            Vue.dynamicSelectInternalValidateResult = result;
          },
        },
      },
    },
    {
      props: {
        label: '正常级联',
        prop: 'cascader',
      },
      slot: {
        name: 'el-cascader',
        props: {
          options: [
            {
              value: 'zhinan',
              label: '指南',
              children: [
                {
                  value: 'shejiyuanze',
                  label: '设计原则',
                  children: [
                    {
                      value: 'yizhi',
                      label: '一致',
                    },
                    {
                      value: 'fankui',
                      label: '反馈',
                    },
                    {
                      value: 'xiaolv',
                      label: '效率',
                    },
                    {
                      value: 'kekong',
                      label: '可控',
                    },
                  ],
                },
                {
                  value: 'daohang',
                  label: '导航',
                  children: [
                    {
                      value: 'cexiangdaohang',
                      label: '侧向导航',
                    },
                    {
                      value: 'dingbudaohang',
                      label: '顶部导航',
                    },
                  ],
                },
              ],
            },
            {
              value: 'zujian',
              label: '组件',
              children: [
                {
                  value: 'basic',
                  label: 'Basic',
                },
                {
                  value: 'form',
                  label: 'Form',
                },
              ],
            },
          ],
        },
      },
    },
    {
      props: {
        label: '显示活动性质',
        prop: 'delivery',
      },
      slot: {
        name: 'el-switch',
        events: {
          change: (val) => {
            const displayAttr = val ? 'block' : 'none';
            Vue.config.formItemsRule.forEach((item) => {
              if (item.props.prop === 'type') {
                item.props.style.display = displayAttr;
              }
            });
          },
        },
      },
    },
    {
      props: {
        label: '活动性质',
        prop: 'type',
        style: {
          display: 'block',
        },
      },
      slot: {
        name: 'el-checkbox-group',
        events: {
          change: (val) => {
            console.log('活动性质：', val);
          },
        },
        slot: {
          name: 'el-checkbox-button',
          list: [
            {
              label: '地推活动',
            },
            {
              label: '线下主题活动',
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
        label: '活动区域数量',
        prop: 'rate',
      },
      slot: {
        name: 'el-slider',
        props: {
          'show-input': true,
        },
      },
    },
  ],
  formOperateRule: [
    {
      label: '返回',
      props: {
        size: 'medium',
      },
      method: () => {
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
        Vue.broadcast('dynamic-select', 'dynamicResetFiles');
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
        // 这里做的可能有些复杂
        // 注：如果把表单中的复杂项拿出来，单独封装成一个组件，内部又要集成自己的校验方式（具体请查阅业务场景代码: dynamic-select）
        // 不妨使用事件分发的，给外部表单留有触发校验通道，
        Vue.broadcast('dynamic-select', 'dynamicValidate');
        ref.validate((valid) => {
          if (valid && Vue.dynamicSelectInternalValidateResult) {
            Vue.$confirm('此操作将提交表单, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
            }).then(() => {
              Vue.$message({
                type: 'success',
                message: `恭喜你，提交成功成功! - 提交数据为：${JSON.stringify(
                  Vue.config.formRule.props.model,
                )}`,
              });
            });
          }
        });
      },
    },
  ],
});

/**
 * 为你封装的复杂组件添加对应的提示信息
 * 思路：内部 暴露 组件 实例，在外部表单提交时调用内部校验方法即可！
 */
// const validateTips = (rule, value, callback) => {
//   if (!value.first && !value.second && !value.third) {
//     callback(new Error('请选择一级类目（表单提供）'));
//   }
//   if (value.first && !value.second && !value.third) {
//     callback(new Error('请选二级类目（表单提供）'));
//   }
//   if (value.first && value.second && !value.third) {
//     callback(new Error('请选择三级类目（表单提供）'));
//   }
//   callback();
// };
