
<template>
    <layout     
            bgColor='hsl(0,0%,15%)'
            enableTopOffset>
        <div class="page-favorite-root" :style="style">
            
            对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。

因此，我们为什么不把组件的共享状态抽取出来，以一个全局单例模式管理呢？在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！

通过定义和隔离状态管理中的各种概念并通过强制规则维持视图和状态间的独立性，我们的代码将会变得更结构化且易维护。

这就是 Vuex 背后的基本思想，借鉴了 Flux、Redux 和 The Elm Architecture。与其他模式不同的是，Vuex 是专门为 Vue.js 设计的状态管理库，以利用 Vue.js 的细粒度数据响应机制来进行高效的状态更新。

如果你想交互式地学习 Vuex，可以看这个 Scrimba 上的 Vuex 课程，它将录屏和代码试验场混合在了一起，你可以随时暂停并尝试。
            
        </div>
    </layout>
</template>

<script>
import layout from './../scrollcontainer'
import { mapMutations } from 'vuex'
export default {
    components: { layout },
    computed:{
        style(){
            return {

            }
        }
    },
    methods:{
        ...mapMutations(['setAppbarTitleThemeByIndex']),
    },
    mounted(){
        this.setAppbarTitleThemeByIndex(1)
    }
}
</script>

<style lang="scss" scoped>
.page-favorite-root{
    width: 100%;
    height: auto;

    padding: 0 32px;
    box-sizing: border-box;

    // background-color: rgba(255, 0, 0, 0.115);
    font-size: 1.6em;
    line-height: 300%;
    color: white
    // background-image: url(./../../../assets/2.jpg);
}
</style>