import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookies'
Vue.use(Vuex)

export default new Vuex.Store({
    //存储全局变量
    state: {
        //不要写死,要从cookie中取
        name: Cookie.get('name'),
        token: Cookie.get('token')

    },
    mutations: {
        //    写方法,这里面写的所有方法,第一个参数,必须是state
        login:function (state,response) {
            //修改这两个变量的值
            state.name=response.data.name
            state.token=response.data.token
        //    往cookie中写数据
            Cookie.set('name',response.data.name)
            Cookie.set('token',response.data.token)

        },
        logout:function (state) {
            //修改这两个变量的值
            state.name=""
            state.token=""
        //    往cookie中写数据
            Cookie.set('name',"")
            Cookie.set('token',"")
        }


    },
    actions: {}
})
