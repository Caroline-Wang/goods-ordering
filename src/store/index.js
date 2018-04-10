import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    language:'',
    menus:[
      {
        id:'1',
        name:'晚餐菜本'
      },
      {
        id:'2',
        name:'午餐菜本'
      },
      {
        id:'3',
        name:'早餐菜本'
      }
    ]
  },
  mutations:{
    switchLanguage(state,value){
      state.language=value
    }
  },
  actions:{

  }
})

export default store
