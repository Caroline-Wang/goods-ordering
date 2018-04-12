<template>
  <div class="drop-list" :data-code="data.code" :class="{active:isActive}"
  >
    <label class="title"
           @click="chooseDropList(data.code)"
    >
      {{data.name}}
    </label>
    <ul>
      <li class="drop-list-item" :data-code="food.code" v-for="food in data.foods" @click="chooseFood(food.code)">
        <span class="food-item item-recommend">
          <svg class="icon" aria-hidden="true" v-if="food.recommend">
            <use xlink:href="#icon-great"></use>
          </svg>
        </span>
        <span class="food-item item-name">{{food.name}}</span>
        <span class="food-item item-price">{{food.prices[0].value}}/{{food.prices[0].unit}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:"DropListItem",
    props:{
      data:{
        type:Object,
        required:true
      },
      isActive:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      chooseDropList(code){
        this.$emit('dropShowItems',code)
      },
      chooseFood(code){
        console.log('当前foodcode：'+ code)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .drop-list{
    margin-bottom:4px;

    >.title{
       display: block;
       width:100%;
       background: navajowhite;
       padding: 2px;
    }

    .drop-list-item{
      font-size:0.8em;
      display: flex;
      display: none;

      .food-item{
        margin-top: 4px;
      }

      .food-item.item-recommend{
        box-sizing: content-box;
        width: 1em;
        padding:0 2px;
      }
      .food-item.item-name{
        flex:1;
      }
      .food-item.item-price{
        padding:0 2px;
      }
    }
  }

  .drop-list.active{
    >.title{
       background: brown;
     }

    .drop-list-item {
      display: flex;
    }
  }
</style>
