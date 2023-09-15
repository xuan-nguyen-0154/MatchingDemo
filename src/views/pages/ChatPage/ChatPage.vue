<template src="./ChatPage.html"></template>
<style src="./ChatPage.scss"></style>

<script>
import ChatBox from "../../../components/Chat/ChatBox/ChatBox.vue";
import ProfileBox from "../../../components/Chat/ProfileBox/ProfileBox.vue";

export default {
    name: 'ChatPage',
  components: {
      ChatBox,
      ProfileBox,
  },
};
</script>
