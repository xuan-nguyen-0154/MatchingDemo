<template src="./HomePage.html"></template>
<style scoped lang="scss" src="./HomePage.scss"></style>

<script>
import {defineAsyncComponent} from 'vue'
import accessConfig from "../../config"
import {ServiceFactory} from "../../services/service-factory"

const ServicesChat = ServiceFactory.get('chats')
const ListUser = defineAsyncComponent(() => import('./ListUser/ListUser.vue'))
const ListMessage = defineAsyncComponent(() => import('./ListMessage/ListMessage.vue'))

export default {
  name: 'HomePage',
  components: {
    ListUser,
    ListMessage,
  },
  data() {
    return {
      items: [],
      chosenItem: {},
      userName: '',
      chatText: '',
      exitedID: false,
      activeItemId: null,
      isLoading: false,
    };
  },
  created() {
    this.init();
  },
  methods: {

    init() {
      this.getAllConversations();
    },

    async getAllConversations() {
      this.isLoading = true
      const res = await ServicesChat.getChatList().catch(() => ({}))
      this.isLoading = false
      this.items = res ? res.data.data : []
      this.chosenItem = this.items[0]
      this.activeItemId = this.chosenItem.id
      this.exitedID = true
    },

    async handleSearchChat(userName) {
      const userItem = this.items.find(item => item.participants.data[0].name === userName)
      if (userItem) {
        this.isLoading = true
        const searchList = await ServicesChat.searchChatList(userItem.participants.data[0].id).catch(() => ({}))
        this.isLoading = false
        this.items = this.items.filter(item => searchList.data.data[0].id === item.id)
        this.activeItemId = this.items[0].id
      } else {
        alert('Không tồn tại User!')
      }
    },

    async submitChat() {
      const queryParam = {
        recipient: {id: this.chosenItem.participants.data[0].id},
        messaging_type: 'RESPONSE',
        message: {text: this.chatText},
        access_token: accessConfig.accessConfig.accessToken
      }
      this.isLoading = true
      const res = await ServicesChat.sendMessage(queryParam).catch(() => ({}))
      this.isLoading = false
      this.chatText = ''
      res ? location.reload() : alert('Không có quyền gửi tin nhắn đến id này!')
    },

    handleGetContent(id) {
      this.exitedID = true
      this.chosenItem = this.items.find(item => item.id === id)
    },

    formatDate(dateTimeString) {
      return (new Date(dateTimeString)).toLocaleDateString()
    },

    reverseData(data) {
      return data.messages.data.slice().reverse()
    },

    formatTime(dateTimeString) {
      return (new Date(dateTimeString)).toLocaleTimeString();
    },
  },
};
</script>
