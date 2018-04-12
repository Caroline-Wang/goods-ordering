<template>
  <div :style="{background:backgroundColor}" class="tab-item" :class="{active:isActive}"
       :data-code="data.code" v-text="data.name"
       @click="changeToThisTab1"
  >
  </div>
</template>

<script>
  export default {
    name:'TabItem',
    props:{
      data:{
        type:Object,
        required:true
      },
      backgroundColor:{
        type:String,
        default:'#ddd'
      },
      isActive:{
        type:Boolean,
        default:false
      },
      dataInit:{
        type:Boolean,
        default:false
      }
    },
    computed:{
      classObject(){
        return {
          tabActive:this.isActive
        }
      }
    },
    methods:{
      changeToThisTab1(){
          console.log('切换tab')
        this.$emit('changeToThisTab',{tabCode:this.data.code,dataInit:this.dataInit})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab-item{
    box-sizing: content-box;
    width: 1em;
    padding: 6px;
  }
  .active{
    color: #ffffff;
  }
</style>
