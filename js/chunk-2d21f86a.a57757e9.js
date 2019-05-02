(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f86a"],{d9cb:function(s,a,t){"use strict";t.r(a);var r=function(){var s=this,a=s.$createElement;s._self._c;return s._m(0)},n=[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h3",{staticStyle:{"border-bottom":"1px dashed #ccc",width:"570px","padding-bottom":"10px"}},[s._v("pure-table 配置项代码")]),t("div",{staticStyle:{"background-color":"#0c2a34",padding:"10px","border-radius":"4px",width:"552px",overflow:"scroll"}},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-jsx"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/**\n * 自定义表格配置项代码\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" moment "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'moment'")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" tableConfig = "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("Vue")]),s._v(") =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// el-table => props")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Table Attributes")]),s._v("\n    tableProps: {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": list, "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 显示的数据")]),s._v("\n      stripe: "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 是否为斑马纹 table")]),s._v("\n      border: "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 是否带有纵向边框")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'highlight-current-row'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 是否要高亮当前行")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'row-key'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("row")]),s._v(") =>")]),s._v(" row.id, "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 行数据的 Key，用来优化 Table 的渲染；")]),s._v("\n    },\n\n    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// el-table => events")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Table Events")]),s._v("\n    tableEvents: {\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'selection-change'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("selection")]),s._v(") =>")]),s._v(" {}, "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//  响应 - 行选择变化")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sort-change'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("{ prop, order }")]),s._v(") =>")]),s._v(" {}, "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 响应 - 排序变化  ascending 升序, descending 降序, null 原始顺序")]),s._v("\n    },\n\n    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// el-table-column => Props")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// Table-Column Attributes")]),s._v("\n    tableColumnList: [\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'selection'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fixed")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'left'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'reserve-selection'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("selectable")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("row, index")]),s._v(") =>")]),s._v(" {},\n      },\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'index'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fixed")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'序号'")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("50")]),s._v(",\n      },\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("prop")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'time'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 对应列内容的字段名，也可以使用 property 属性")]),s._v("\n        label: "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'开始时间'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 显示的标题")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'header-align'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 表头文字对齐方式 （可选）")]),s._v("\n        align: "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 列内容对齐方式（可选）")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'min-width'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("55")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 对应列的最小宽度")]),s._v("\n        sortable: "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 对应列是否可以排序")]),s._v("\n        formatter: "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("val")]),s._v(") =>")]),s._v(" moment(val).format("),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'YYYY-MM-DD'")]),s._v("), "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 当前列内容显示格式处理函数（可选）")]),s._v("\n      },\n      {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("prop")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'head_portrait'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 对应列内容的字段名，也可以使用 property 属性")]),s._v("\n        label: "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'头像'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 显示的标题")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'header-align'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 表头文字对齐方式 （可选）")]),s._v("\n        align: "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'center'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 列内容对齐方式（可选）")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'min-width'")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("55")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 对应列的最小宽度")]),s._v("\n        sortable: "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 对应列是否可以排序")]),s._v("\n        component: {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("is")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'preview-image'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("props")]),s._v(": {},\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("events")]),s._v(": {},\n        },\n        {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("prop")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'name'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'姓名'")]),s._v(",\n        },\n        {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("prop")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'age'")]),s._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'年龄'")]),s._v(",\n        }\n      }\n    ],\n\n    "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 行操作集合 支持 Function | Array")]),s._v("\n    rowOperateList: operateList(Vue),\n  };\n};\n\n\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" list = [\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'id0001'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1551778366013")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("head_portrait")]),s._v(": [],\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'张三'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("age")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("18")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'id0002'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1551771366013")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("head_portrait")]),s._v(": [],\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'张三1'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("age")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("19")]),s._v(",\n  },\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'id0003'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("time")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1551178366013")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("head_portrait")]),s._v(": [],\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'张三2'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("age")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v(",\n  }\n]\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/**\n * 行操作 - 规则\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" createOperatePageJump = "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("Vue, label = "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'操作 - 跳转'")])]),s._v(") =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": label,\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("method")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("row")]),s._v(") =>")]),s._v(" {\n      Vue.$message({\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("showClose")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("message")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`"),t("span",{pre:!0,attrs:{class:"hljs-subst"}},[s._v("${label}")]),s._v("成功`")]),s._v(",\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'success'")]),s._v(",\n      });\n    },\n  };\n};\n\n"),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/**\n * 筛选不同行对应不同操作\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" operateList = "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("Vue")]),s._v(") =>")]),s._v(" {\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),t("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("row")]),s._v(") =>")]),s._v(" {\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" list = [\n      createOperatePageJump(Vue, "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'补卡'")]),s._v(")\n    ];\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (row.id === "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'id0001'")]),s._v(") {\n      list.push(createOperatePageJump(Vue, "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'请假'")]),s._v("));\n    }\n    "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" list;\n  };\n}\n\n\n")])])])])}],l=t("2877"),e={},p=Object(l["a"])(e,r,n,!1,null,null,null);a["default"]=p.exports}}]);