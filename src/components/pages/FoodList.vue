<template>
  <div id="foodList">
    <aside class="category-list">
      <ul class="drop-list-wrapper" v-if="initDropList">
        <li v-if="initDropList.length" v-for="(currentList,index) in initDropList">
          <DropListItem :isActive="currentList.code===currentDropListItem || (currentDropListItem==='' && index===0) ? true:false"
            :data="currentList"
            @dropShowItems="dropShowListItems"
          />
        </li>
      </ul>
    </aside>
    <main>
      <swiper :options="swiperOption" v-if="FoodItemsShow.length">
        <swiper-slide v-for="(item,index) in FoodItemsShow">
          <FoodItem_small :info="item"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </main>
    <aside class="nav-tabs">
      <ul v-show="foodCategory.length">
        <li v-for="(item,index) in foodCategory">
          <TabItem :backgroundColor="tabsColor[index%tabsColor.length]"
                   :isActive="item.code===currentTab || (currentTab==='' && index===0) ? true:false"
                   :data="item" :dataInit="item.dataInit===true ? true:false"
                   @changeToThisTab="switchTab"
          />
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
  import TabItem from '@/components/TabItem'
  import DropListItem from '@/components/DropListItem'
  import FoodItem_small from '@/components/FoodItem_small'
  export default {
    components:{
      FoodItem_small,TabItem,DropListItem
    },
    beforeCreate(){
      //获取菜品分类大类
      this.$store.dispatch('setFoodCategory')
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        tabsColor:this.$store.state.config.tabsColor
      }
    },
    computed:{
      foodCategory(){
        return this.$store.state.foodCategory
      },
      currentTab(){
        return this.$store.state.currentShowCategory.tabCode
      },
      currentDropListItem(){
        return this.$store.state.currentShowCategory.dropListCode
      },
      initDropList(){
        return this.$store.getters.initDropList
      },
      FoodItemsShow(){
        return this.$store.getters.getDropListItems
      }
    },
    methods:{
      switchTab({tabCode,dataInit}){
        this.$store.commit('switchTab',tabCode)
        if(!dataInit){ //说明要加载的项未被加载过，需要异步加载
          this.$store.dispatch('setCurrentCategoryFoods',tabCode)
        }

      },
      dropShowListItems(code){
        console.log('展示dropList！！')
        console.log(code)
        this.$store.commit('switchDropShowList',code)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #foodList{
    width: 100%;
    height:100%;
    display: flex;
    justify-content: space-between;
    padding:14px 8px;

    .nav-tabs{
      border:1px solid;
      background: #dddddd;
      height:100%;
      overflow:auto;

    }

    .category-list{
      width: 14em;
      border:1px solid;
      background: #dddddd;
    }

    main{
      flex:1;
      padding: 10px;
      overflow: hidden;
      border:1px solid red;

      .swiper-container {
        height: auto!important;
        margin-left: auto;
        margin-right: auto;
        overflow-x: hidden;
      }
      .swiper-slide {


      }


    }

  }
</style>
