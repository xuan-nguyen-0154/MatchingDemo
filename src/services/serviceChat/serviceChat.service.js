import service from "../base.service"
import accessConfig from "../../config"

class ServicesChat {

    PAGE_ID= accessConfig.accessConfig.pageID
    ACCESS_TOKEN = accessConfig.accessConfig.accessToken
    GRAPHQL_VERSION= accessConfig.accessConfig.graphqlVersion

    getChatList() {
        return service.get(`${this.GRAPHQL_VERSION}/${this.PAGE_ID}/conversations?fields=participants,messages{id,created_time,from,to,message,attachments,tags}&access_token=${this.ACCESS_TOKEN}`)
    }

    searchChatList(idUser) {
        return service.get(`${this.GRAPHQL_VERSION}/${this.PAGE_ID}/conversations?platform=messenger&user_id=${idUser}&access_token=${this.ACCESS_TOKEN}`)
    }

    sendMessage(queryParam) {
        return service.post(`${this.GRAPHQL_VERSION}/${this.PAGE_ID}/messages`, queryParam)
    }

}

export default ServicesChat
