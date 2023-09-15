<template src="./ListUser.html"></template>
<style scoped lang="scss" src="./ListUser.scss"></style>

<script>

import { imgType, videoType, audioType, documentType } from "../../../constants"

export default {
  name: "ListUser",
  props: {
    dataItems: Array,
    activeItem: String,
  },
  data() {
    return {
      chosenItem: {},
      userName: '',
      chatText: '',
      exitedID: false,
      activeItemId: ''
    };
  },
  created() {
    this.init();
  },

  computed: {
    listUser() {
      this.activeItemId = this.activeItem
      return this.dataItems ? this.dataItems : []
    },
  },

  methods: {

    init() {
    },

    getContent(id) {
      this.activeItemId = id
      this.$emit('getContent', id)
    },

    getUserName(data) {
      return !data ? 'Username' : data.participants.data[0].name
    },

    getDate(dateTimeString) {
      return !dateTimeString ? 'dd/mm/yyyy' : (new Date(dateTimeString.messages.data[0].created_time)).toLocaleDateString()
    },

    getLastMessage(message) {
      const lastMessage = message.messages?.data?.[0]
      if (lastMessage?.attachments) {
        const mimeType = lastMessage.attachments.data[0]?.mime_type;
        if (imgType.includes(mimeType)) {
          return 'Đã gửi 1 ảnh'
        } else if (documentType.includes(mimeType) || audioType.includes(mimeType) || videoType.includes(mimeType)) {
          return 'Đã gửi 1 tập tin'
        }
      } else {
        return lastMessage?.message || 'NA'
      }
    },

    searchChat() {
      if (this.userName !== '') {
        this.$emit('searchChat', this.userName.trim())
      }
    },
  },
}
</script>
