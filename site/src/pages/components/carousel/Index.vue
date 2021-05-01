<template>
    <article class="markdown">
        <Describe title="Carousel 走马灯" desc="旋转木马，一组轮播的区域。" name="Carousel">
            <li>当有一组平级的内容。</li>
            <li>当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</li>
            <li>常用于一组图片或卡片轮播</li>
        </Describe>
        <Example next-title="自动切换">
            <template #content>
                <r-carousel>
                    <div>
                        <div class="demo-carousel">1</div>
                        <div class="demo-carousel">2</div>
                        <div class="demo-carousel">3</div>
                        <div class="demo-carousel">4</div>
                    </div>
                </r-carousel>
                <p>最基本的用法，标签内必须具有一个父元素</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="渐显">
            <template #content>
                <r-carousel autoplay="true" id="test">
                    <div>
                        <div class="demo-carousel">1</div>
                        <div class="demo-carousel">2</div>
                        <div class="demo-carousel">3</div>
                        <div class="demo-carousel">4</div>
                    </div>
                </r-carousel>
                <p>
                    设置属性 <code>autoplay="true"</code> 可以自动轮播，同时可以设置属性
                    <code>autoplay-speed</code> 改变自动播放的速度。
                </p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example>
            <template #content>
                <r-carousel effect="fade" autoplay="true">
                    <div>
                        <div class="demo-carousel">1</div>
                        <div class="demo-carousel">2</div>
                        <div class="demo-carousel">3</div>
                        <div class="demo-carousel">4</div>
                    </div>
                </r-carousel>
                <p>设置属性 <code>effect="fade"</code> 切换效果为渐显。</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Code4 />
    </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Carousel from '../../../../../src/components/carousel';
import Describe from '../../../components/comps-describe/Index.vue';
import Example from '../../../components/comps-code-box/Index.vue';
import { Code1, Code2, Code3, Code4 } from '../markdown-code/carousel';

onMounted(() => {
    const carousel = new Carousel();

    carousel.config('#test').events({
        onChange: ([oldValue, value]: [number, number]) => {
            console.log(`原幻灯片索引: ${oldValue}`, `目前激活索引: ${value}`);
        },
        onClick: (index: number) => {
            console.log(index);
        }
    });
});
</script>

<style lang="less" scope>
.demo-carousel {
    height: 250px;
    color: #fff;
    line-height: 250px;
    text-align: center;
    font-size: 20px;
    background: #364d79;
}
</style>