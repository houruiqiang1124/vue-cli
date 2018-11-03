<template>
    <div class="footerBar">
        <router-link to="/index" active-class="active" class="item">
            <i class="icon iconfont icon-changyonglogo40"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/find" active-class="active" class="item">
            <i class="icon iconfont icon-faxian"></i>   
            <span>发现</span>
        </router-link>
        <router-link to="/order" active-class="active" class="item">
            <i class="icon iconfont icon-icon"></i>
            <span>订单</span>
        </router-link>
        <router-link to="/main" active-class="active" class="item">
            <i class="icon iconfont icon-wode"></i>
            <span>我的</span>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import '../../static/less/base.less';
    .footerBar {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4.5rem;
        background: #FFF;
        display: flex;
        align-items: center;
    }

    .footerBar .item {
        display: flex;
        flex-direction: column;
        width: 25%;
        text-decoration: none;
        background: #FFF;
        text-align: center;
    }

    .footerBar .item span{
        font-size: 1.4rem;
    }

    .footerBar .item i {
        font-size: 20px;
        margin-bottom: 5px;
    }

    .active { 
        color: @themeColor;
    }
</style>
