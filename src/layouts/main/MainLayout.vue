<template>
  <div class="main-layout">
    <el-container class="main-layout__container">
      <el-main class="main-layout__container--main">
        <div class="main-container">
          <RouterView/>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {},
  data() {
    return {}
  },

  created() {
  },

  computed: {},

  methods: {}
}
</script>

<style lang="scss">
.main-layout {
  height: 100%;
  width: 100%;

  &__container {
    height: 100%;
    width: 100%;

    &--main {
      padding: 0;
      overflow: hidden !important;
      --el-main-padding: none!important;

      .main-container {
        height: 100%;
        width: 100%;
      }
    }

  }
}

</style>
