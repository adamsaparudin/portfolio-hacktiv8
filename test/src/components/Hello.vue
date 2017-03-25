<template>
  <div id="app">
    <button type="button"
      @click="setEditorContent">
      Set Editor Contents
    </button>

    <vue-editor
      :editor-content="htmlForEditor" :show-preview="true">
    </vue-editor>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

  export default {
    data: function () {
      return {
        htmlForEditor: null
      }
    },

    components: {
      VueEditor
    },

    methods: {
      setEditorContent: function () {
        this.htmlForEditor = '<h1>Html For Editor</h1>'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
