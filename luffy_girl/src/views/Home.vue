<template>
    <div class="home">
        <el-carousel :interval="5000" arrow="always" height="400px">
            <el-carousel-item v-for="img in imgs">
                <img :src="img">
            </el-carousel-item>
        </el-carousel>
<div>

            <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0"
                width="600" height="490" id="cc_1C926636F8D5088B9C33DC5901307461">
            <param name="movie"
                   value="https://p.bokecc.com/flash/single/61DDA5A0A849BEF9_1C926636F8D5088B9C33DC5901307461_false_F76BE04EE17CEEBE_1/player.swf"/>
            <param name="allowFullScreen" value="true"/>
            <param name="allowScriptAccess" value="always"/>
            <param value="transparent" name="wmode"/>
            <embed src="https://p.bokecc.com/flash/single/61DDA5A0A849BEF9_1C926636F8D5088B9C33DC5901307461_false_F76BE04EE17CEEBE_1/player.swf"
                   width="600" height="490" name="cc_1C926636F8D5088B9C33DC5901307461" allowFullScreen="true"
                   wmode="transparent" allowScriptAccess="always"
                   pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"/>
        </object>
</div>

    </div>
</template>

<script>

    export default {
        data: function () {
            return {
                imgs: []
            }

        },
        methods: {
            init: function () {
                let _this = this
                this.$http.request({
                    url: this.$url + 'get_imgs/',
                    method: 'get',
                }).then(function (response) {
                    _this.imgs = response.data
                })
            }
        },
        mounted: function () {
            this.init()

        }
    }
</script>

<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
