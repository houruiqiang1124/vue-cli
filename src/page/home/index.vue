<template>
    <div>
        <header class="header">
            <div class="header-map">
                <i class="iconfont icon-dingwei"></i>
                <span>北京市顺义区中核二三</span>
                <i class="iconfont icon-moreunfold"></i>
            </div>
            <div class="header-search">
                <input type="search" placeholder="搜索饿了么商家、商品名称">
            </div>
        </header>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="swiper-slide_item" v-for="(item, index) in swipperNav.one" :key="index">
                        <img :src="item.url" alt="">
                        <span>{{item.title}}</span>
                    </div>
                    
                </div>
                <div class="swiper-slide">
                    <div class="swiper-slide_item" v-for="(item, index) in swipperNav.two" :key="index">
                        <img :src="item.url" alt="">
                        <span>{{item.title}}</span>
                    </div>
                    
                </div>
            </div>
        </div>
        <footerbar></footerbar>
    </div>
</template>

<script>
import footerbar from '@/components/footerBar';
import vueAwesomeSwiper from "vue-awesome-swiper";
export default {
    data() {
        return {
            swipperNav: {
                one: [
                    {title: "美食", url: "https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg"},
                    {title: "商超遍历", url: "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg"},
                    {title: "水果", url: "https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg"},
                    {title: "下午茶", url: "https://fuss10.elemecdn.com/7/a9/77ff360f7d3fde2d459727ad09fcfjpeg.jpeg"},
                    {title: "医药健康", url: "https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg"},
                    {title: "浪漫鲜花", url: "https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg"},
                    {title: "厨房生鲜", url: "https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg"},
                    {title: "跑腿代购", url: "https://fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg"},
                    {title: "地方小吃", url: "https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg"},
                    {title: "签到领红包", url: "https://fuss10.elemecdn.com/5/de/bebe83947afee0b0f38257b0e3866jpeg.jpeg"}
                ],
                two: [
                    {title: "地方菜系", url: "https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg"},
                    {title: "麻辣烫", url: "https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg"}
                ] 
            }
        }
    },
    components: {
		footerbar
    },
    mounted() {
        var mySwiper = new Swiper(".swiper-container")
    }
}
</script>

<style lang="less" scoped>
@import '../../../static/less/base.less';
    .header {
        background: @themeBgColor;
        padding: 1rem;
        .header-map {
            width: 60%;
            margin-bottom: 1rem;
            color: #FFF;
            .textOverflow1;
            i, span {
                font-size: 1.6rem;
                font-weight: bold;
            }
        }
        .header-search {
            width: 100%;
            height: 3rem;
            margin: 0 auto;
            background: #FFF;
            input {
                width: 100%;
                height: 100%;
                outline: none;
            }
            input::-webkit-input-placeholder {
                text-align: center;
                font-size: 1.4rem;
            }
        }
    }

    .swiper-container {
        padding-top: 1rem;
        width: 100%;
        height: 18rem;
        background: #FFF;

        .swiper-slide {
            display: flex;
            flex-wrap: wrap;
            text-align: center;
        }
        .swiper-slide_item {
            display: flex;
            flex-direction: column;
            width: 20%;
            align-items: center;
            font-size: 1.3rem;
            img {
                width: 4rem;
            }
        }
    } 
</style>
