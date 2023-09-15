<template src="./Sidebar.html"></template>
<style src="./Sidebar.scss"></style>

<script>

export default {
  name: 'Sidebar',
  data() {
    return {
      collapseShow: "hidden",
    };
  },
  methods: {
    toggleCollapseShow: function (classes) {
      this.collapseShow = classes;
    },
  },
  components: {
  },
};
</script>
