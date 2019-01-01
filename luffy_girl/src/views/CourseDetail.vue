<template>
  <div class="courseDetail">
    <h1>我是courseDetail页面</h1>
    <button class="btn btn-primary">点我</button>
    {{course_detail}}

    <div>
    <h3>{{course_detail.course_name}}</h3>
      <h3>{{course_detail.course_slogan}}</h3>
      <p v-for="teacher in course_detail.teachers"><span >
        {{teacher.name}}:{{teacher.brief}}
      </span>
      </p>
      <h2>推荐课程</h2>
     <p v-for="course in course_detail.recommend_courses"><span >
       <router-link :to="{'name':'courseDetail','params':{'id':course.id}}">{{course.name}}</router-link>

      </span>
      </p>
    </div>
  </div>
</template>
<script>


    export default {
        data: function () {
            return {
                course_id: this.$route.params.id,
                course_detail:{},
            }

        },
        methods: {
            init: function () {
                let _this = this
                this.$http.request({
                    url: _this.$url + 'course/'+_this.course_id,
                    method: 'get'
                }).then(function (response) {
                    _this.course_detail = response.data.data
                }).catch(function (response) {
                    console.log(response)
                })

            },

        },
        mounted: function () {
             this.init()

        },
        watch:{
            '$route':function (to,from) {
                console.log('---->to',to)
                console.log('---->from',from)
                //修改课程的id
                this.course_id=to.params.id
                //再去后台加载数据回来
                this.init()
            },
        }
    }
</script>