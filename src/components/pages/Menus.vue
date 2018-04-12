<template>
  <div id="menus">
    <header>
      <img class="logo" src="../../assets/img/logo.jpg" alt="">
    </header>

    <main>
      <ul class="all-menus" v-if="this.$store.state.menus.length">
        <li v-for="(item, index) in this.$store.state.menus" :key="item.code" @click="chooseMenu(item.code)">
          <img :src="item.picturePath" alt="">
          <p class="title">{{item.name}}</p>
        </li>
      </ul>
      <!--<div class="switch-language">-->
        <!--<button @click="chooseLanage('chinese')">中文版</button>-->
        <!--<button @click="chooseLanage('english')">English</button>-->
      <!--</div>-->
    </main>

    <footer>
      <p class="software-verson">iMenu V2.16.1</p>
      <a href="#"><img src="" alt="">登录</a>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    beforeCreate(){
      //获取菜谱种类
      this.$store.dispatch('setMenus')
    },
    methods: {
      chooseLanage(value){
        console.log(value)
        this.$store.commit('switchLanguage',value)
        this.$router.push('foodlist')
      },
      chooseMenu(menuId){
          console.log(menuId)
          this.$store.commit('switchMenus',menuId)
          this.$router.push('foodlist')
      }
    }
  }
</script>

<style lang="scss" scoped>
  #menus {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  header {
    padding: 20px;
    border: 1px solid;

  .logo {
    width: 100px;
    border-radius: 10px;
  }

  @media screen and (max-width: 500px) {
    .logo {
      width: 50px;
    }
  }

  }

  main {
    border: 1px solid;
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  .all-menus {
    flex: 1;
    padding: 0 10%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    overflow-y: auto;

  >
  li {
    width: 30%;
    text-align: center;

  img {
    width: 100%;
  }

  .title {
    margin: 10px 0;
  }

  }

  }

  @media screen and (max-width: 500px) {
    .all-menus {
      flex-direction: column;

  >li {
     width: 80%;
   }
  }

  }

  .switch-language {
    border: 1px solid yellow;
    padding: 10px;
    text-align: center;
  }

  }

  footer {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    border: 1px solid;

  .software-verson {
    font-weight: bold;
  }

  }


</style>
