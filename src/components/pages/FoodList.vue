<template>
  <div id="foodList">
    <aside id="xxx">
      <p>left</p>

    </aside>
    <main>
      <!--this is aside-->
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="@/assets/img/1.png" alt="">
          <div>
            这个菜。。。。。。
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/2.png" alt="">
          <div>
            这个菜。。。。。。
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/3.png" alt="">
          <div>
            这个菜。。。。。。
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/4.png" alt="">
          <div>
            这个菜。。。。。。
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/5.png" alt="">
          <div>
            这个菜。。。。。。
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/6.png" alt="">
          <div>
            这个菜。。。。。。
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/7.png" alt="">
          <div>
            这个菜。。。。。。
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/8.png" alt="">
          <div>
            这个菜。。。。。。
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/9.png" alt="">
          <div>
            这个菜。。。。。。
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/img/10.png" alt="">
          <div>
            这个菜。。。。。。
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </main>
    <aside id="yyy">
      right
    </aside>
  </div>
</template>

<script>
  export default {
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
        }
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

    #xxx{
      width: 100px;
      border:1px solid;
    }

    #yyy{
      width: 50px;
      border:1px solid;
    }

    main{
      flex:1;
      padding: 10px;
      overflow: hidden;
      border:1px solid red;
    }

  }
  .swiper-container {
    height: auto!important;
    margin-left: auto;
    margin-right: auto;
    overflow-x: hidden;
  }
  .swiper-slide {
    height: 20%;
    background: #dddddd;

    img{
      width:100%;
      height: 100%;
    }
  }
</style>
