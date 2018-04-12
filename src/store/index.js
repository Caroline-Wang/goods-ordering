import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    lang:'zh',
    menuCode:'',
    config:{
      tabsColor:['red','brown','#ddd','yellow','green','pink','blue']
    },
    menus:[],
    foodCategory:[],
    currentShowCategory:{
      tabCode:'',
      dropListCode:''
    }
  },
  getters:{
    initDropList:(state)=>{
      if(state.foodCategory.length){
        let currentFoodCategory=[];
        currentFoodCategory=[].concat(state.foodCategory.filter((item,index)=>{
          if(state.currentShowCategory.tabCode){
            return item.code===state.currentShowCategory.tabCode
          }else{
            return index===0
          }
        }))
        return currentFoodCategory[0].foodItems ? currentFoodCategory[0].foodItems : []
      }else{
        return []
      }
    },

    getDropListItems:(state,getters)=>{
      let currentDropList=getters.initDropList
      if(currentDropList.length){
        let currentFoodCategoryDropList=[];
        currentFoodCategoryDropList=[].concat(currentDropList.filter((item,index)=>{
          if(state.currentShowCategory.dropListCode){
            return item.code===state.currentShowCategory.dropListCode
          }else{
            return index===0
          }
        }))
        return currentFoodCategoryDropList[0].foods ? currentFoodCategoryDropList[0].foods : []
      }else{
        return []
      }
    }

  },
  mutations:{
    switchLanguage(state,value){
      state.lang=value
    },

    switchMenus(state,value){
      state.menuCode=value
    },

    switchTab(state,code){
      state.currentShowCategory.tabCode=code
      //将下拉列表置空
      state.currentShowCategory.dropListCode=''
    },

    switchDropShowList(state,code){
      if(code){
        state.currentShowCategory.dropListCode=code
      }
    },

    setMenus(state,data){
      state.menus=data
    },

    setFoodCategory(state,data){
      state.foodCategory=data
    },

    setCurrentCategoryFoods(state,{parentCode,itemFoods}){
      state.foodCategory.filter((item)=>{
        if(item.code===parentCode){
          Vue.set(item,'foodItems',itemFoods)
          Vue.set(item,'dataInit',true)
        }
      })
    }

  },
  actions:{
    setMenus(context){
      setTimeout(function () {
        var testData={
          data:[
            {
              "code":"01",
              "name":"菜谱1",
              "picturePath":"https://i.loli.net/2018/04/11/5acd79b2efaa9.jpg"
            },
            {
              "code":"02",
              "name":"菜谱2",
              "picturePath":"https://i.loli.net/2018/04/11/5acd79b2efa36.jpg"
            }
          ]
        }
        context.commit('setMenus',testData.data)
      },2000)
    },

    setFoodCategory(context){
      setTimeout(function () {
        var testData={
          data:[
            // { "code":"0101", "name":"主厨推荐" },
            { "code":"0102", "name":"冷菜" },
            { "code":"0103", "name":"热菜" },
            { "code":"0104", "name":"汤羹" },
            { "code":"0105", "name":"主食" },
            { "code":"0106", "name":"酒水饮料" },
            { "code":"0107", "name":"套餐" }
          ]
        }
        context.commit('setFoodCategory',testData.data)
        context.dispatch('setCurrentCategoryFoods',testData.data[0].code)
      },2000)
    },

    setCurrentCategoryFoods(context,foodCategoryCode){
      setTimeout(function () {
        var testData;
        if(foodCategoryCode==='0102'){
          testData={
            data:[
              {
                "code":"010102",
                "name":"广东潮州风味",
                "foods":[
                  {
                    "code":"01411",
                    "name":"蜜汁烧叉烧",
                    "recommend":true,
                    "prices":[
                      {
                        "number":1,
                        "value":"20.00",
                        "unit":"小碗"
                      },
                      {
                        "number":2,
                        "value":"30.00",
                        "unit":"大碗"
                      }
                    ],
                    picturePaths:[
                      "https://i.loli.net/2018/04/11/5acdb0d624b94.png"
                    ]
                  },
                  {
                    "code":"01412",
                    "name":"潮州卤水拼盘",
                    "recommend":false,
                    "prices":[
                      {
                        "number":1,
                        "value":"30.00",
                        "unit":"份"
                      }
                    ],
                    picturePaths:[
                      "https://i.loli.net/2018/04/11/5acdb0c973b36.png"
                    ]
                  }
                ]
              },
              {
                "code":"010103",
                "name":"江南风味",
                "foods":[
                  {
                    "code":"01413",
                    "name":"镇江菠菜水晶肉",
                    "recommend":true,
                    "prices":[
                      {
                        "number":1,
                        "value":"25.00",
                        "unit":"小份"
                      },
                      {
                        "number":2,
                        "value":"35.00",
                        "unit":"大份"
                      }
                    ],
                    picturePaths:[
                      "https://i.loli.net/2018/04/11/5acdb142cd1db.png"
                    ]
                  }
                ]
              }
            ]
          }
        }
        if(foodCategoryCode==='0103'){
          testData={
            data:[
              {
                "code":"010201",
                "name":"海鲜",
                "foods":[
                  {
                    "code":"0146575",
                    "name":"阿拉斯加帝王蟹",
                    "recommend":true,
                    "prices":[
                      {
                        "number":1,
                        "value":"50.00",
                        "unit":"份"
                      }
                    ],
                    picturePaths:[
                      "https://i.loli.net/2018/04/11/5acdb0d624b94.png"
                    ]
                  },
                  {
                    "code":"01424234",
                    "name":"鱼香炸响铃",
                    "recommend":false,
                    "prices":[
                      {
                        "number":1,
                        "value":"35.00",
                        "unit":"份"
                      }
                    ],
                    picturePaths:[
                      "https://i.loli.net/2018/04/11/5acdb0c973b36.png"
                    ]
                  }
                ]
              },
              {
                "code":"010202",
                "name":"禽肉",
                "foods":[
                  {
                    "code":"014135436",
                    "name":"山核桃牛仔柳",
                    "recommend":true,
                    "prices":[
                      {
                        "number":1,
                        "value":"55.00",
                        "unit":"位"
                      }
                    ],
                    picturePaths:[
                      "https://i.loli.net/2018/04/11/5acdb142cd1db.png"
                    ]
                  }
                ]
              }
            ]
          }
        }
        context.commit('setCurrentCategoryFoods',{parentCode:foodCategoryCode,itemFoods:testData.data})
      },2000)
    }

  }
})

export default store
