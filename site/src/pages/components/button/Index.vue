<template>
    <article class="markdown">
        <Describe title="Button 按钮" desc="按钮用于开始一个即时操作。" name="Button">
            <li>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</li>
        </Describe>
        <Example next-title="幽灵按钮">
            <template #content>
                <button type="button" class="rab-btn">默认按钮</button>
                <button type="button" class="rab-btn rab-btn-primary">主要按钮</button>
                <button type="button" class="rab-btn rab-btn-dashed">虚线按钮</button>
                <button type="button" class="rab-btn rab-btn-text">文本按钮</button>
                <br /><br />
                <button type="button" class="rab-btn rab-btn-info">信息按钮</button>
                <button type="button" class="rab-btn rab-btn-success">成功按钮</button>
                <button type="button" class="rab-btn rab-btn-warning">警告按钮</button>
                <button type="button" class="rab-btn rab-btn-error">危险按钮</button>
                <p>按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。</p>
                <p>通过添加不同的类名创建不同样式的按钮</p>
            </template>
            <template #code><Code1 /></template>
        </Example>
        <Example next-title="图标按钮及按钮形状">
            <template #content>
                <div class="ghost-box">
                    <button type="button" class="rab-btn rab-btn-ghost">默认按钮</button>
                    <button type="button" class="rab-btn rab-btn-primary rab-btn-ghost">
                        主要按钮
                    </button>
                    <button type="button" class="rab-btn rab-btn-dashed rab-btn-ghost">
                        虚线按钮
                    </button>
                    <button type="button" class="rab-btn rab-btn-text rab-btn-ghost">
                        文本按钮
                    </button>
                    <br /><br />
                    <button type="button" class="rab-btn rab-btn-info rab-btn-ghost">
                        信息按钮
                    </button>
                    <button type="button" class="rab-btn rab-btn-success rab-btn-ghost">
                        成功按钮
                    </button>
                    <button type="button" class="rab-btn rab-btn-warning rab-btn-ghost">
                        警告按钮
                    </button>
                    <button type="button" class="rab-btn rab-btn-error rab-btn-ghost">
                        危险按钮
                    </button>
                </div>
                <p>幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。</p>
            </template>
            <template #code><Code2 /></template>
        </Example>
        <Example next-title="按钮尺寸">
            <template #content>
                <button
                    type="button"
                    icon="ios-search"
                    class="rab-btn rab-btn-primary rab-btn-circle"
                ></button>
                <button type="button" icon="ios-search" class="rab-btn rab-btn-primary">
                    搜索
                </button>
                <button
                    type="button"
                    icon="ios-search"
                    class="rab-btn rab-btn-primary rab-btn-circle"
                >
                    搜索
                </button>
                <button type="button" class="rab-btn rab-btn-primary rab-btn-circle">
                    圆角按钮
                </button>
                <br /><br />
                <button type="button" icon="ios-search" class="rab-btn rab-btn-circle"></button>
                <button type="button" icon="ios-search" class="rab-btn">搜索</button>
                <button type="button" icon="ios-search" class="rab-btn rab-btn-circle">搜索</button>
                <button type="button" class="rab-btn rab-btn-circle">圆角按钮</button>
                <p>
                    通过设置<code>icon</code>属性在button内嵌入一个icon，或者直接在button内添加
                    <code>i</code>标签。
                </p>
                <p>
                    使用<code>button</code>的<code>icon</code>属性，图标位置将添加在最左边，如果需要自定义位置，则直接在button内添加
                    <code>i</code>标签。
                </p>
                <p>通过添加类名<code>rab-btn-circle</code>，可将按钮置为圆的形状。</p>
            </template>
            <template #code><Code3 /></template>
        </Example>
        <Example next-title="长按钮">
            <template #content>
                <button type="button" class="rab-btn rab-btn-primary rab-btn-lg">主要按钮</button>
                <button type="button" class="rab-btn">默认按钮</button>
                <button type="button" class="rab-btn rab-btn-dashed rab-btn-sm">虚线按钮</button>
                <p>按钮有三种尺寸：大、默认（中）、小</p>
                <p>
                    通过添加类名<code>rab-btn-lg</code>和<code>rab-btn-sm</code>将按钮设置为大和小尺寸，不设置为默认（中）尺寸。
                </p>
            </template>
            <template #code><Code4 /></template>
        </Example>
        <Example next-title="不可用状态">
            <template #content>
                <button type="button" class="rab-btn rab-btn-success rab-btn-long">提交按钮</button>
                <br /><br />
                <button type="button" class="rab-btn rab-btn-error rab-btn-long">删除按钮</button>
                <p>
                    通过添加类名<code>rab-btn-long</code>可将按钮宽度设置为 100%
                    使按钮适合其父宽度,常用于弹窗内操作按钮。
                </p>
            </template>
            <template #code><Code5 /></template>
        </Example>
        <Example next-title="加载中状态">
            <template #content>
                <button disabled type="button" class="rab-btn">默认按钮(禁用)</button>
                <button disabled type="button" class="rab-btn rab-btn-primary">
                    主要按钮(禁用)
                </button>
                <button disabled type="button" class="rab-btn rab-btn-dashed">
                    虚线按钮(禁用)
                </button>
                <button disabled type="button" class="rab-btn rab-btn-text">文本按钮(禁用)</button>
                <p>通过添加<code>disabled</code>属性可将按钮设置为不可用状态。</p>
            </template>
            <template #code><Code6 /></template>
        </Example>
        <Example next-title="按钮组合">
            <template #content>
                <button type="button" loading="true" class="rab-btn rab-btn-primary">
                    Loading...
                </button>
                <button type="button" loading="true" class="rab-btn rab-btn-circle"></button>
                <button
                    type="button"
                    loading="true"
                    class="rab-btn rab-btn-primary rab-btn-circle"
                ></button>
                <button type="button" id="loading" class="rab-btn rab-btn-primary" @click="loading">
                    <span>{{ text }}</span>
                </button>
                <p>通过添加<code>loading="true"</code>属性可以让按钮处于加载中状态</p>
            </template>
            <template #code><Code7 /></template>
        </Example>
        <Example next-title="按钮组纵向排列">
            <template #content>
                <h4>基本</h4>

                <div class="rab-btn-group">
                    <button type="button" class="rab-btn">Cancel</button>
                    <button type="button" class="rab-btn rab-btn-primary">Confirm</button>
                </div>

                <div class="rab-btn-group">
                    <button disabled type="button" class="rab-btn">Yesterday</button>
                    <button disabled type="button" class="rab-btn">Today</button>
                    <button disabled type="button" class="rab-btn">Tomorrow</button>
                </div>

                <div class="rab-btn-group">
                    <button type="button" class="rab-btn rab-btn-primary">L</button>
                    <button type="button" class="rab-btn">M</button>
                    <button type="button" class="rab-btn">M</button>
                    <button type="button" class="rab-btn rab-btn-dashed">R</button>
                </div>

                <h4>图标</h4>

                <div class="rab-btn-group">
                    <button type="button" class="rab-btn rab-btn-primary">
                        <i class="rab-icon rab-icon-ios-arrow-back"></i>
                        <span>Backward</span>
                    </button>
                    <button type="button" class="rab-btn rab-btn-primary">
                        <span>Forward</span>
                        <i class="rab-icon rab-icon-ios-arrow-forward"></i>
                    </button>
                </div>

                <div class="rab-btn-group">
                    <button
                        type="button"
                        icon="ios-skip-backward"
                        class="rab-btn rab-btn-primary"
                    ></button>
                    <button
                        type="button"
                        icon="ios-skip-forward"
                        class="rab-btn rab-btn-primary"
                    ></button>
                </div>

                <div class="rab-btn-group">
                    <button type="button" icon="ios-color-wand" class="rab-btn"></button>
                    <button type="button" icon="ios-sunny" class="rab-btn"></button>
                    <button type="button" icon="ios-crop" class="rab-btn"></button>
                    <button type="button" icon="ios-color-filter" class="rab-btn"></button>
                </div>

                <h4>圆角</h4>

                <div class="rab-btn-group rab-btn-group-circle">
                    <button type="button" class="rab-btn rab-btn-primary">
                        <i class="rab-icon rab-icon-ios-arrow-back"></i>
                        <span>Backward</span>
                    </button>
                    <button type="button" class="rab-btn rab-btn-primary">
                        <span>Forward</span>
                        <i class="rab-icon rab-icon-ios-arrow-forward"></i>
                    </button>
                </div>

                <div class="rab-btn-group rab-btn-group-circle">
                    <button
                        type="button"
                        icon="ios-skip-backward"
                        class="rab-btn rab-btn-primary"
                    ></button>
                    <button
                        type="button"
                        icon="ios-skip-forward"
                        class="rab-btn rab-btn-primary"
                    ></button>
                </div>

                <div class="rab-btn-group rab-btn-group-circle">
                    <button type="button" icon="ios-color-wand" class="rab-btn"></button>
                    <button type="button" icon="ios-sunny" class="rab-btn"></button>
                    <button type="button" icon="ios-crop" class="rab-btn"></button>
                    <button type="button" icon="ios-color-filter" class="rab-btn"></button>
                </div>

                <h4>尺寸</h4>

                <div class="rab-btn-group rab-btn-group-lg">
                    <button type="button" class="rab-btn">Large</button>
                    <button type="button" class="rab-btn">Large</button>
                </div>

                <div class="rab-btn-group">
                    <button type="button" class="rab-btn">Default</button>
                    <button type="button" class="rab-btn">Default</button>
                </div>

                <div class="rab-btn-group rab-btn-group-sm">
                    <button type="button" class="rab-btn">Small</button>
                    <button type="button" class="rab-btn">Small</button>
                </div>
                <br />
                <br />
                <div class="rab-btn-group rab-btn-group-lg rab-btn-group-circle">
                    <button type="button" class="rab-btn">Large</button>
                    <button type="button" class="rab-btn">Large</button>
                </div>

                <div class="rab-btn-group rab-btn-group-circle">
                    <button type="button" class="rab-btn">Default</button>
                    <button type="button" class="rab-btn">Default</button>
                </div>

                <div class="rab-btn-group rab-btn-group-sm rab-btn-group-circle">
                    <button type="button" class="rab-btn">Small</button>
                    <button type="button" class="rab-btn">Small</button>
                </div>
                <p>实现按钮组合的效果</p>
            </template>
            <template #code><Code8 /></template>
        </Example>
        <Example>
            <template #content>
                <div class="rab-btn-group rab-btn-group-vertical">
                    <button type="button" icon="logo-facebook" class="rab-btn"></button>
                    <button type="button" icon="logo-twitter" class="rab-btn"></button>
                    <button type="button" icon="logo-googleplus" class="rab-btn"></button>
                    <button type="button" icon="logo-tumblr" class="rab-btn"></button>
                </div>
                <p>按钮组纵向排列</p>
            </template>
            <template #code><Code9 /></template>
        </Example>
        <Code10 />
    </article>
</template>

<script lang="ts" setup>
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
import Button from '../../../../../src/components/button';
import { Describe, Example } from '../../../components/index';
import {
    Code1,
    Code2,
    Code3,
    Code4,
    Code5,
    Code6,
    Code7,
    Code8,
    Code9,
    Code10
} from '../markdown-code/button';

let button: any;

onMounted(() => {
    button = new Button();
});

const text = ref<string>('点击加载');
const loading = () => {
    button.config('#loading').loading = true;
    text.value = '加载中...';
    setTimeout(() => {
        text.value = '点击加载';
        button.config('#loading').loading = false;
    }, 3000);
};
</script>

<style lang="less" scope>
.ghost-box {
    padding: 20px;
    background: rgb(190, 200, 200);
}

.rab-btn-group {
    margin-right: 8px;
    .rab-btn {
        margin-right: 0;
    }
}
</style>