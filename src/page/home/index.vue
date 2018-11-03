<template>
    <div class="home">
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

        <div class="content">
            <!-- menu -->
            <div class="swiper-container" id="menu">
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

            <!-- image轮播 -->
            <div class="bannerBox">
                <div class="bannerBox-left">
                    <h3>品质套餐</h3>
                    <p>搭配齐全吃的好</p>
                    <p>立即抢购 ></p>
                </div>
                <img class="bannerBox-right" src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png" alt="">
            </div>
            <div class="bannerBox2">
                <div class="swiper-container" id="banner">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
                              <img :src="item" alt="">     
                        </div>
                    </div>
                </div>
            </div>

            <!-- 推荐商家 -->
            <div class="businessBox">
                <div class="title">
                    推荐商家
                </div>
                <ul class="businessBox-nav">
                    <li><span>综合排序</span></li>
                    <li><span>距离最近</span></li>
                    <li><span>品质联盟</span></li>
                    <li><span>筛选</span></li>
                </ul>
                <section class="businessBox-list">
                    <ul>
                        <li>
                            <img class="avator" src="https://fuss10.elemecdn.com/9/a7/5bf7b7a64b9e40852bc296d19a998jpeg.jpeg" alt="">
                            <div class="shoplist-right">
                                <div class="titleBox">
                                    <span class="brand">品牌</span>
                                    <span>肯德基宅急送 （东单店）</span>      
                                </div>
                                <div class="order">
                                    <div>
                                        <span>☆</span>
                                        <span>☆</span>
                                        <span>☆</span>
                                        <span>☆</span>
                                        <span>☆</span>
                                    </div>
                                    <span>4.6</span>
                                    <span>&nbsp;月售7408单</span>
                                </div>
                                <div class="distribution clearfix">
                                    <span>￥20起送</span>
                                    <span>|</span>
                                    <span>远距离配送费￥7</span>
                                    <span class="distance float-right">
                                        3.19km | 46分钟
                                    </span>
                                </div>
                                <div class="type">
                                    <span>其他菜系</span>
                                    <span>品质联盟</span>
                                </div>
                                <div class="newOrder">
                                    <div class="newUser">
                                        <span class="shou">首</span>
                                        <span>新用户下单立减17元</span>
                                        <span class="float-right">20个活动</span>
                                    </div>
                                    <div class="youJian">
                                        <span class="jian">减</span>
                                        <span class="textOverflow">满30减15，满60减30，满100减50</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img class="avator" src="https://fuss10.elemecdn.com/9/a7/5bf7b7a64b9e40852bc296d19a998jpeg.jpeg" alt="">
                            <div class="shoplist-right">
                                <div class="titleBox">
                                    <span class="brand">品牌</span>
                                    <span>肯德基宅急送 （东单店）</span>      
                                </div>
                                <div class="order">
                                    <div>
                                        <span>☆</span>
                                        <span>☆</span>
                                        <span>☆</span>
                                        <span>☆</span>
                                        <span>☆</span>
                                    </div>
                                    <span>4.6</span>
                                    <span>&nbsp;月售7408单</span>
                                </div>
                                <div class="distribution clearfix">
                                    <span>￥20起送</span>
                                    <span>|</span>
                                    <span>远距离配送费￥7</span>
                                    <span class="distance float-right">
                                        3.19km | 46分钟
                                    </span>
                                </div>
                                <div class="type">
                                    <span>其他菜系</span>
                                    <span>品质联盟</span>
                                </div>
                                <div class="newOrder">
                                    <div class="newUser">
                                        <span class="shou">首</span>
                                        <span>新用户下单立减17元</span>
                                        <span class="float-right">20个活动</span>
                                    </div>
                                    <div class="youJian">
                                        <span class="jian">减</span>
                                        <span class="textOverflow">满30减15，满60减30，满100减50</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img class="avator" src="https://fuss10.elemecdn.com/9/a7/5bf7b7a64b9e40852bc296d19a998jpeg.jpeg" alt="">
                            <div class="shoplist-right">
                                <div class="titleBox">
                                    <span class="brand">品牌</span>
                                    <span>肯德基宅急送 （东单店）</span>      
                                </div>
                                <div class="order">
                                    <div>
                                        <span>☆</span>
                                        <span>☆</span>
                                        <span>☆</span>
                                        <span>☆</span>
                                        <span>☆</span>
                                    </div>
                                    <span>4.6</span>
                                    <span>&nbsp;月售7408单</span>
                                </div>
                                <div class="distribution clearfix">
                                    <span>￥20起送</span>
                                    <span>|</span>
                                    <span>远距离配送费￥7</span>
                                    <span class="distance float-right">
                                        3.19km | 46分钟
                                    </span>
                                </div>
                                <div class="type">
                                    <span>其他菜系</span>
                                    <span>品质联盟</span>
                                </div>
                                <div class="newOrder">
                                    <div class="newUser">
                                        <span class="shou">首</span>
                                        <span>新用户下单立减17元</span>
                                        <span class="float-right">20个活动</span>
                                    </div>
                                    <div class="youJian">
                                        <span class="jian">减</span>
                                        <span class="textOverflow">满30减15，满60减30，满100减50</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img class="avator" src="https://fuss10.elemecdn.com/9/a7/5bf7b7a64b9e40852bc296d19a998jpeg.jpeg" alt="">
                            <div class="shoplist-right">
                                <div class="titleBox">
                                    <span class="brand">品牌</span>
                                    <span>肯德基宅急送 （东单店）</span>      
                                </div>
                                <div class="order">
                                    <div>
                                        <span>☆</span>
                                        <span>☆</span>
                                        <span>☆</span>
                                        <span>☆</span>
                                        <span>☆</span>
                                    </div>
                                    <span>4.6</span>
                                    <span>&nbsp;月售7408单</span>
                                </div>
                                <div class="distribution clearfix">
                                    <span>￥20起送</span>
                                    <span>|</span>
                                    <span>远距离配送费￥7</span>
                                    <span class="distance float-right">
                                        3.19km | 46分钟
                                    </span>
                                </div>
                                <div class="type">
                                    <span>其他菜系</span>
                                    <span>品质联盟</span>
                                </div>
                                <div class="newOrder">
                                    <div class="newUser">
                                        <span class="shou">首</span>
                                        <span>新用户下单立减17元</span>
                                        <span class="float-right">20个活动</span>
                                    </div>
                                    <div class="youJian">
                                        <span class="jian">减</span>
                                        <span class="textOverflow">满30减15，满60减30，满100减50</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
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
            },
            banner: [
                "https://fuss10.elemecdn.com/7/b5/370d86b37cba5551b6d1642500345jpeg.jpeg",
                "https://fuss10.elemecdn.com/a/5e/ead3f480a9386a6f5b101a4d9bcb0jpeg.jpeg"
            ]
        }
    },
    components: {
		footerbar
    },
    mounted() {
        var mySwiper = new Swiper("#menu");
        var mySwiper2 = new Swiper("#banner", {
            loop: true
        })
    }
}
</script>

<style lang="less" scoped>
@import '../../../static/less/base.less';
    .content {
        background: #FFF;
        padding: 10px;
    }
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

    // menu
    .swiper-container {
        width: 100%;
        background: #FFF;
        .swiper-slide {
            display: flex;
            flex-wrap: wrap;
            text-align: center;
        }
        .swiper-slide_item {
            margin-bottom: 1.5rem;
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

    // image轮播
    .bannerBox {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background: #F7F7F7;
        .bannerBox-left {
            h3 {
                font-size: 1.6rem;
                font-weight: bold;
            }
            p:first-of-type {
                margin: 0.5rem 0;
                font-size: 1.4rem;
                color: #777;
            }
            p:last-child {
                font-size: 1.2rem;
                color: #af8260;
            }
        }
        .bannerBox-right {
            width: 15rem;
        }
    }
    .bannerBox2 {
        img {
            width: 100%;
            height: 10rem;
        }
    }

    // businessBox 推荐商家
    .businessBox {
        .title {
            padding: 1.5rem;
            box-sizing: border-box;
            text-align: center;
            font-size: 1.4rem;
            position: relative;
            // font-weight: bold;
        }
        .title:after, .title::before {
            content: "";
            border-top: 1px solid #999;
            display: block;
            position: absolute;
            width: 8%;
            top: 50%;
        }
        .title:before {
            left: 28%;      /* 左偏离 */
        }
        .title:after {
            right: 28%;     /* 右偏离 == 左偏离 */
        }
        .businessBox-nav {
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 1.4rem;
        }
        .businessBox-list {
            ul {
                margin-top: 1.5rem;
                li {
                    padding: 1rem 0;
                    display: flex;
                    align-items: flex-start;
                    font-size: 1.6rem;
                    border-bottom: 1px solid #eee;
                    .avator {
                        width: 5rem;
                    }
                    .shoplist-right {
                        width: 100%;
                        margin-left: 10px;
                        .titleBox {
                            span {
                                font-weight: bold;
                            }          
                        }
                        .order {
                            margin-top: 0.8rem;
                            display: flex;
                            font-size: 1.4rem;
                            div {
                                margin-right: 10px;
                            }
                        }
                        .distribution {
                            margin-top: 0.8rem;
                            font-size: 1.4rem;
                        }
                        .type {
                            margin-top: 0.8rem;
                            font-size: 1.4rem;
                            span {
                                border:1px solid rgb(221, 221, 221); 
                            }
                        }
                        .newOrder {
                            margin-top: 1.5rem;
                            font-size: 1.4rem;
                            .newUser {
                                .shou {
                                    background: rgb(112, 188, 70);
                                    color: #FFF;
                                }  
                            }

                            .youJian {
                                margin-top: 1rem;
                                .jian {
                                    background: rgb(240, 115, 115);
                                    color: #FFF;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
