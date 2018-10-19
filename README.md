# vue-cli

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## vue快速构建

```
    vue init webpack project || vue init webpack .

    初始化项目：
        Project name vue-cli    // 项目名称
        Project description A Vue.js project    // 项目描述
        Author houruiqiang <houruiqiang@d-heaven.com>   // 作者
        Vue build standalone    // 打包方式
        Install vue-router? Yes     // 下载vue-router
        Use ESLint to lint your code? No    // 使用ESLint规范代码
        Set up unit tests No    // 设置单元测试号
        Setup e2e tests with Nightwatch? No  单元测试

    npm install

    npm run dev

    浏览器输入：http://localhost:8080/#/
```

## css
    scoped css作用域

## 父组件给子组件传值
### 父组件给子组件传值
    1、父组件调用子组件，赋予一个属性
        <Father :title="title" />
    2、子组件定义props接收参数，页面直接写参数名称
        props: ["title"]  
### 父组件给子组件方法传值
    父组件
        <Father :title="title" :run="run" />
        run(data) {
            console.log("我是子组件触发的，与参数" + data)
        }
    子组件
        props: ["title", "run"]
        <button @click="run('123')">触发父组件run方法</button>
### 传父组件实例给子组件
    <Father :title="title" :run="run" :home="this"/>

## 父组件获取子组件实例
    1、给子组件定义ref
        <Father ref="child"/>
    2、使用this.$refs.child获取子组件实例
        this.$refs.child

## 非父子组件之间传值
    1、声明vue实例
        import Vue from "vue";
        let vueEvent = new Vue();
        export default vueEvent;   

    2、兄弟组件home引入vue实例，$emit发送信息
        VueEvent.$emit("toNew2", this.msg)
        
    3、兄弟组件new2引入vue实例，接收信息
        VueEvent.$on("toNew2", function(e) {
            console.log(e)
        })

## vue-router路由配置
### 静态路由
    1. 安装
        1.1 npm install vue-router --save
    2、引入并Vue.use(Router)
        import Router from 'vue-router'
        Vue.use(Router)
    3. 配置路由
        1. 引入组件 创建组件
        2. 定义路由
        3. 实例化vue-router
        4. 挂载
        5. <router-view/>  放在APP.vue中。出口
        6. <router-link to="/path">click</router-link>
    4. {path: "*", component: "/home"} 默认跳转地址
### 动态路由传参
    1. 路由配置
        {path: "/newsDetails/:id", component: NewsDetails}
    2. 页面跳转, :to
        <router-link :to="'/newsDetails/' + item.id">{{item.title}}</router-link>
    3. 详情页面在 mounted生命周期里面接收参数
        this.$route.params

## 编程式导航,用来js跳转
    1. this.$router.push({path: 'news'})
### 命名路由
        1. {path: "/news", component: NewsDetails, name: "news"}
        2. this.$outer.push({name: 'news', params: {userId: 123}})

## 路由的嵌套

    1. 在路由配置添加children
        {
            path: "/user",
            component: user,
            children: [
                {
                    path: "list1",
                    component: list1
                },
                {
                    path: "list2",
                    component: list2
                }
            ]
        }
    2. 使用路由,如：
        <router-link to="/user/userChild"></router-link>
    3. 子路由需要使用 <router-view></router-view>