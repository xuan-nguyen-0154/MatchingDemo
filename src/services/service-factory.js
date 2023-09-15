import ServicesChat from "./serviceChat/serviceChat.service"

const Services = {

}

export const ServiceFactory = {
    get: name => Services[name]
}
