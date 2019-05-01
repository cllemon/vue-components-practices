<template>
  <codemirror v-model="code"
              :options="options"
              class="live-code"
              ref="liveEdit">
  </codemirror>
</template>

<script>
import { debounce } from 'lodash';
import { codemirror } from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';
// theme css
import 'codemirror/theme/solarized.css';
// language
import 'codemirror/mode/javascript/javascript.js';
// theme css
import 'codemirror/theme/monokai.css';
// require active-line.js
import 'codemirror/addon/selection/active-line.js';
// styleSelectedText
import 'codemirror/addon/selection/mark-selection.js';
import 'codemirror/addon/search/searchcursor.js';
// hint
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/addon/selection/active-line.js';
// highlightSelectionMatches
import 'codemirror/addon/scroll/annotatescrollbar.js';
import 'codemirror/addon/search/matchesonscrollbar.js';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/search/match-highlighter.js';
// keyMap
import 'codemirror/mode/clike/clike.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/comment/comment.js';
import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/search/search.js';
import 'codemirror/keymap/sublime.js';
// foldGutter
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/fold/markdown-fold.js';
import 'codemirror/addon/fold/xml-fold.js';

const options = {
  mode: 'text/javascript',
  // theme: 'solarized light',
  theme: 'monokai',
  extraKeys: { Ctrl: 'autocomplete' },
  lineNumbers: true,
  matchBrackets: true,
  tabSize: 2,
  styleActiveLine: true,
  styleSelectedText: true,
  line: true,
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
  hintOptions: {
    completeSingle: false,
  },
  showCursorWhenSelecting: true,
};

export default {
  components: {
    codemirror,
  },

  props: {
    value: {
      required: true,
      default: () => {},
    },
  },

  data() {
    return {
      code: `${this.value}`,
      options: options,
    };
  },

  watch: {
    code(val, oldVal) {
      if (val !== oldVal) {
        this.handlerEmit(val);
      }
    },
  },

  mounted() {
    setTimeout(() => {
      this.$refs.liveEdit.refresh();
    }, 100);
  },

  methods: {
    handlerEmit: debounce(function(val) {
      this.$emit('input', val);
    }, 600),
  },
};
</script>

<style lang="scss" scoped>
.live-code {
  width: 576px;
  height: 576px;
  /deep/ .CodeMirror {
    height: 584px;
  }
}
</style>

