<template>
  <div id="app">
    <editor
      api-key="no-api-key"
      :init="{
        height: 500,
        selector: 'textarea#emoticons',
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
          'lists code emoticons',
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help | emoticons',
      }"
    />
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "TinyMCE",
  components: {
    editor: Editor,
  },
};
</script>

<style scoped>
#app.about {
  padding: 0;
}
</style>

