<template>
  <section class="tree">
    <template v-if="depth !== 0 || showRoot">
      <div :class="verticleLineStyle"
           v-if="depth !== 0">
      </div>
      <div class="horizontal-line"
           v-if="depth !== 0">
      </div>
      <div class="tree-node">
        {{data.label}}
      </div>
      <div class="horizontal-line"
           v-if="data.children && data.children.length > 0">
      </div>
    </template>

    <template v-if="data.children && data.children.length > 0">
      <div class="plus-sign"
           @click="openNode">
        <div v-if="open"
             class="reduce">-</div>
        <div v-else
             class="plus">
          +<span>{{data.children.length}}</span>
        </div>
      </div>

      <div class="horizontal-line"
           v-if="open">
      </div>

      <el-collapse-transition>
        <div v-if="open">
          <Tree v-for="(item, index) in data.children"
                :key="index"
                :data="item"
                :initialShowDepth="initialShowDepth"
                :depth="depth + 1"
                :firstNode="index === 0"
                :lastNode="index === (data.children.length - 1)" />
        </div>
      </el-collapse-transition>
    </template>
  </section>
</template>

<script>
export default {
  name: 'Tree',
  props: {
    /**
     * 树 - 数据模型
     * 如：{
     *   name: '中国',
     *   children: [
     *     {
     *       name: ‘浙江省',
     *       children: [
     *         {
     *           name: '杭州',
     *           children: [
     *             {
     *               name: '西湖区’,
     *               hildren: [...]
     *             }, {
     *               name: '滨江区'
     *             }
     *           ]
     *         }, {
     *           name: '湖州市’,
     *           children: [...]
     *         }
     *       ]
     *     }, {
     *       name: '安徽省‘,
     *       children: [...]
     *     }
     *   ]
     * }
     */
    data: {
      type: Object,
      default: () => ({}),
    },
    /**
     * 是否显示根实例
     */
    showRoot: {
      type: Boolean,
      default: true,
    },
    /**
     * 节点深度层级
     */
    depth: {
      type: Number,
      default: 0,
    },
    /**
     * 初始显示节点深度层级
     */
    initialShowDepth: {
      type: Number,
      default: 2,
    },
    /**
     * 第一个节点
     */
    firstNode: {
      type: Boolean,
      default: true,
    },
    /**
     * 最后一个节点
     */
    lastNode: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      open: this.initialShowDepth - this.depth > 1,
    };
  },

  computed: {
    verticleLineStyle() {
      return {
        'verticle-line': true,
        'first-node': this.firstNode && !this.lastNode,
        'last-node': !this.firstNode && this.lastNode,
        'middle-node': !this.firstNode && !this.lastNode,
      };
    },
  },

  methods: {
    /**
     * 打开节点
     */
    openNode() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scoped>
.tree {
  display: flex;
  align-items: center;
  position: relative;
  .verticle-line {
    width: 1px;
    background: #999;
    position: absolute;
  }
  .first-node {
    height: 50%;
    transform: translate(0, 50%);
  }
  .last-node {
    height: 50%;
    transform: translate(0, -50%);
  }
  .middle-node {
    height: 100%;
  }
  .horizontal-line {
    height: 1px;
    width: 8px;
    background-color: #999;
  }
  .tree-node {
    padding: 2px 4px;
    border: 1px solid #999;
    border-radius: 5px;
    margin: 8px 0;
  }
  .plus-sign {
    height: 22px;
    line-height: 22px;
    padding: 0 5px;
    border: 1px solid #999;
    border-radius: 5px;
    color: #5094df;
    font-weight: bold;
    text-align: center;
    .plus {
      span {
        font-size: 10px;
        transform: scale(0.1);
      }
    }
  }
}
</style>
