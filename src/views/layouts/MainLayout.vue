<template src="./MainLayout.html"></template>
<style src="./MainLayout.scss"></style>

<script>
import Navbar from "./element/Navbars/Navbar.vue"
import Sidebar from "./element/Sidebar/Sidebar.vue"
import Header from "./element/Headers/Header.vue"
import Footer from "./element/Footers/Footer.vue"
export default {
  name: "MainLayout",
  components: {
    Navbar,
    Sidebar,
    Header,
    Footer,
  },
}
</script>
