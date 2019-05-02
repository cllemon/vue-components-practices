(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7110"],{"74da":function(s,a,t){"use strict";t.r(a);var r=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},n=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h3",{staticStyle:{"border-bottom":"1px dashed #ccc",width:"570px","padding-bottom":"10px"}},[s._v("static-form 配置项代码")]),t("div",{staticStyle:{"background-color":"#0c2a34",padding:"10px","border-radius":"4px",width:"552px",overflow:"scroll"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/**\n * 以下是 demo 整体表单配置项\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" formConfig = "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("Vue")]),s._v(") =>")]),s._v(" ({\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 表单规则")]),s._v("\n  formRule: {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 数据绑定对象")]),s._v("\n      model: {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'cllemon'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("region")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("delivery")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": ["),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'地推活动'")]),s._v("],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("resource")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("desc")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("''")]),s._v(",\n      },\n\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 规则列表")]),s._v("\n      rules: {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": [{ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("required")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请输入活动名称'")]),s._v(" }],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("date")]),s._v(": [{ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("required")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请选择活动日期'")]),s._v(" }],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("region")]),s._v(": [{ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("required")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请选择活动区域'")]),s._v(" }],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("resource")]),s._v(": [{ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("required")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请选择特殊资源'")]),s._v(" }],\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("desc")]),s._v(": [{ "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("required")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请填写活动形式'")]),s._v(" }],\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 表单label宽度")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label-width'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100px'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 表单label对齐方式")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label-position'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'right'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 表单label前缀")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'label-suffix'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("':'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 表单内组件尺寸")]),s._v("\n      size: "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'medium'")]),s._v(",\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("events")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// validate: (val) => {},")]),s._v("\n    },\n  },\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 表单项规则")]),s._v("\n  formItemsRule: [\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 表单项下发属性")]),s._v("\n      props: {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'活动名称'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("prop")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// rules: [{ required: true, message: '请输入活动名称' }],")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 'label-width': '100px',")]),s._v("\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 表单项组件插槽")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// slot 支持数组和对象两种形式")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 这里的 slot 是 el-form-item 下的插槽")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 本想可支持 Object | Array")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 但是 Array 渲染多个插槽，虽然可提供此能力，而我们想提供的仅仅是一个插槽。")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Array 会使配置变得臃肿，且使复杂度变高。")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v('// 建议，复杂组件你自己去实现，全局注册引入 比如：name: "complex-component"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 这样做的好处是：分离复杂逻辑，只关注内在状态变化（即：值改变）也符合模块化思想。")]),s._v("\n      slot: {\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 组件名")]),s._v("\n        name: "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'el-input'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 组件下发属性")]),s._v("\n        props: {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请输入活动名称'")]),s._v(",\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 组件下发事件")]),s._v("\n        events: {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("change")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("val")]),s._v(") =>")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'活动名称值改变结果：'")]),s._v(");\n            "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(val);\n            "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Vue 实例：'")]),s._v(");\n            "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(Vue);\n          },\n        },\n      },\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 表单项下发属性")]),s._v("\n      props: {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'活动时间'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("prop")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'date'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 'label-width': '100px',")]),s._v("\n      },\n\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 表单项组件插槽")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// slot 支持数组和对象两种形式")]),s._v("\n      slot: {\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 组件名")]),s._v("\n        name: "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'el-date-picker'")]),s._v(",\n\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 组件下发属性")]),s._v("\n        props: {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请输入活动时间'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'date'")]),s._v(",\n        },\n\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 组件下发事件")]),s._v("\n        events: {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("change")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("val")]),s._v(") =>")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'活动日期值改变结果：'")]),s._v(");\n            "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(val);\n            "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'Vue实例：'")]),s._v(");\n            "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(Vue);\n          },\n        },\n      },\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'活动区域'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("prop")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'region'")]),s._v(",\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v(": {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'el-select'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请选择活动区域'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("clearable")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("events")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("change")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("val")]),s._v(") =>")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'活动区域：'")]),s._v(", val);\n          },\n        },\n\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// <el-select>")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   <el-option></el-option>")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// </el-select>")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 这里 枚举列表 - 对应 key 值 和 element-ui 保持一致，不去人为修改，保证 API 和 其一致。")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 常见业务场景：可能自己的接口数据key和其不一致，自己可以实现一个 formatter()实现。")]),s._v("\n        slot: {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'el-option'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("list")]),s._v(": [\n            {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'西瓜'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'watermelon'")]),s._v(",\n            },\n            {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'柠檬'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'lemon'")]),s._v(",\n            },\n            {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'柑橘'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'citrus'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n            },\n            {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'芒果'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'mango'")]),s._v(",\n            },\n          ],\n        },\n      },\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'及时配送'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("prop")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'delivery'")]),s._v(",\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v(": {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'el-switch'")]),s._v(",\n      },\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'活动性质'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("prop")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'type'")]),s._v(",\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// <el-checkbox-group>")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   <el-checkbox></el-checkbox>")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// </el-checkbox-group>")]),s._v("\n      slot: {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'el-checkbox-group'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("min")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v(": {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("display")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'flex'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'300px'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("flexWrap")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'wrap'")]),s._v(",\n          },\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("events")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("change")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("val")]),s._v(") =>")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'活动性质：'")]),s._v(", val);\n          },\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'el-checkbox'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("list")]),s._v(": [\n            {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'美食/餐厅线上活动'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'food'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'foods'")]),s._v(",\n            },\n            {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'地推活动'")]),s._v(",\n            },\n            {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'线下主题活动'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v(": {\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'143px'")]),s._v(",\n              },\n            },\n            {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'单纯品牌曝光'")]),s._v(",\n            },\n          ],\n        },\n      },\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'特殊资源'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("prop")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'resource'")]),s._v(",\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// <el-radio-group>")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//   <el-radio></el-radio>")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// </el-radio-group>")]),s._v("\n      slot: {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'el-radio-group'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v(": {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("display")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'flex'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'300px'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("flexWrap")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'wrap'")]),s._v(",\n            "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'margin-top'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'10px'")]),s._v(",\n          },\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("events")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("change")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("val")]),s._v(") =>")]),s._v(" {\n            "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'特殊资源:'")]),s._v(", val);\n          },\n        },\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'el-radio'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("list")]),s._v(": [\n            {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'线上品牌商赞助'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'food'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'foods'")]),s._v(",\n            },\n            {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'线下场地免费'")]),s._v(",\n            },\n          ],\n        },\n      },\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'活动形式'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("prop")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'desc'")]),s._v(",\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v(": {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'el-input'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'textarea'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请输入活动形式内容'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("clearable")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("autosize")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("minRows")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("maxRows")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(" },\n        },\n      },\n    },\n  ],\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 可传可不传")]),s._v("\n  formOperateRule: [\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'返回'")]),s._v(",\n\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'return'")]),s._v(",\n\n      "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 针对el-button")]),s._v("\n      props: {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'medium'")]),s._v(",\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("method")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("operate, ref")]),s._v(") =>")]),s._v(" {\n        Vue.$message({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'恭喜你，返回成功'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'success'")]),s._v(",\n        });\n      },\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'重置'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'medium'")]),s._v(",\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("method")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("operate, ref")]),s._v(") =>")]),s._v(" {\n        ref.resetFields();\n      },\n    },\n    {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'确定'")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("size")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'medium'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'primary'")]),s._v(",\n      },\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("method")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("operate, ref")]),s._v(") =>")]),s._v(" {\n        ref.validate("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("valid")]),s._v(") =>")]),s._v(" {\n          "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (valid) {\n            Vue.$confirm("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'此操作将提交表单, 是否继续?'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'提示'")]),s._v(", {\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("confirmButtonText")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'确定'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("cancelButtonText")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'取消'")]),s._v(",\n              "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'warning'")]),s._v(",\n            }).then("),t("span",{pre:!0,attrs:{class:"hljs-function"}},[t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v(" =>")]),s._v(" {\n              Vue.$message({\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'success'")]),s._v(",\n                "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'提交信息：'")]),s._v(" + "),t("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("JSON")]),s._v(".stringify(Vue.config.formRule.props.model),\n              });\n            });\n          }\n        });\n      },\n    },\n  ],\n});\n")])])])])}],l=t("2877"),p={},e=Object(l["a"])(p,r,n,!1,null,null,null);a["default"]=e.exports}}]);