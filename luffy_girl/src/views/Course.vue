<template>
    <div class="course">
        <h1>我是课程</h1>

        <el-tabs type="border-card">
            <el-tab-pane v-for="ca in course_category">
                <span slot="label" @click="init(ca.id)"> {{ca.name}}</span>
                <el-col :span="8" v-for="course in courses">
                    <el-card :body-style="{ padding: '0px' }">
                        <img :src="course.course_img" class="image">
                        <div style="padding: 14px;">
                            <span>{{course.name}}</span>
                            <div class="bottom clearfix">
                                <el-button type="text" class="button">
                                    <!--<router-link to="/course">课程</router-link>|-->
                                    <router-link :to="{'name':'courseDetail','params':{'id':course.id}}">详情
                                    </router-link>
                                </el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-tab-pane>
        </el-tabs>
        <el-row>


        </el-row>


    </div>
</template>

<script>


    export default {
        data: function () {
            return {
                courses: [],
                currentDate: new Date(),
                course_category: [{'id': '1', 'name': 'go'}, {'id': '2', 'name': 'python'}, {
                    'id': '3',
                    'name': 'linux'
                }]
            }

        },
        methods: {
            init: function (category = 0) {
                let _this = this
                this.$http.request({
                    url: _this.$url + 'course/' + '?sub_category=' + category,
                    method: 'get'
                }).then(function (response) {
                    //console.log(response)
                    //服务端返回的数据
                    console.log(response.data)
                    _this.courses = response.data.data
                }).catch(function (response) {
                    console.log(response)
                })

            },

        },
        mounted: function () {
            this.init()

        }
    }
</script>


<style>
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>
