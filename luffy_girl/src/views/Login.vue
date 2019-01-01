<template>
    <div class="login">
        <h1>登录</h1>

        <p>用户名:<input type="text" v-model="name"></p>
        <p>密码:<input type="password" v-model="pwd"></p>

        <button @click="login" class="btn bg-danger">登录</button>
    </div>
</template>

<script>


    export default {
        data: function () {
            return {
                name:'',
                pwd:''
            }

        },
        methods: {
            login: function () {
                let _this = this
                this.$http.request({
                    url: _this.$url + 'login/',
                    method: 'post',
                    data:{'name':_this.name,'pwd':_this.pwd}
                }).then(function (response) {
                    console.log(response.data)
                    alert(_this.$store.state.name)
                    if(response.data.status==100){
                        //往stort.js的state的字典中写入值
                        // _this.$store.state.name=_this.name
                        // _this.$store.state.token=response.data.token
                        //调用store下的某个方法,用commit,第一个参数是方法名,第二个参数是参数
                        _this.$store.commit('login',response)
                    }
                    alert(_this.$store.state.name)

                }).catch(function (response) {
                    console.log(response)
                })

            },

        },
    }
</script>


<style>
</style>
