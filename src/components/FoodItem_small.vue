<template>
  <div class="food-item-wrapper">
    <!--{{info}}-->
    <div class="img-wrapper">
      <img :src="info.picturePaths[0]" alt="">
    </div>
    <div class="description-wrapper">
      <div class="choose-wrapper"></div>
      <span class="food-name">{{info.name}}</span>
      <span class="food-price">{{info.prices[0].value}}/{{info.prices[0].unit}}</span>
    </div>
  </div>
</template>

<script>
  export default {
      props:{
        info:{
          type:Object,
          required:true
        }
      }
  }
</script>

<style lang="scss" scoped>
  .food-item-wrapper{
    height:100%;

    >.img-wrapper{
        /*border-radius:6px;*/
        /*overflow: hidden;*/
        width: 100%;
        position: relative;

        &::before{
           content: "";
           padding-top: 80%;
           display: block;
         }

        >img{
           width:100%;
           height: 100%;
           position: absolute;
           top:0;
         }
    }

    >.description-wrapper{
        padding:6px 0;
        display:flex;
        align-items:center;

        >.choose-wrapper{
           width:0.8em;
           height: 0.8em;
           border:1px solid;
         }

        >.food-name{
           margin:0 6px;
           line-height: 1;
           flex:1;
         }

        >.food-price{
           line-height: 1;
         }
    }
  }
</style>
