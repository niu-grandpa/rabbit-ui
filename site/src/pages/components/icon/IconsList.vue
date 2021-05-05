<template>
    <div class="icon-search">
        <!-- <el-input v-model="inputVal" size="medium" placeholder="输入英文关键词搜索，比如 warning" /> -->
        <p class="sub-title">点击下面的图标可以直接复制代码</p>
        <ul class="icons-list" ref="ul">
            <li
                class="icons-item"
                v-for="(cls, i) in allIcons"
                :key="cls"
                @click="handleCopy(cls, i)"
            >
                <i :class="'rab-icon rab-icon-' + cls"></i>
                <p class="icons-class">{{ cls }}</p>
            </li>
        </ul>
        <textarea id="copyBox" ref="inputBox" />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Message from '../../../../../src/components/message';
import list from './icons-list';

const ul = ref<HTMLUListElement>();
const inputBox = ref<HTMLTextAreaElement>();
const inputVal = ref<string>('');
const allIcons = ref<string[]>(list);

// todo: 搜索过滤
// const handleQuery = (val: string) => allIcons.value.filter((item) => item.includes(val));
const handleCopy = (cls: string, index: number) => {
    const child = ul.value!.children[index];
    const input = inputBox.value!;
    const result = `<i class="rab-icon rab-icon-${cls}"></i>`;

    input.value = result;
    input.select();
    document.execCommand('copy');
    Message.success('图标代码已复制到剪切板 🎉');

    child.classList.add('copied');
    setTimeout(() => child.classList.remove('copied'), 3000);
};
</script>

<style lang="less" scoped>
.icon-search {
    position: relative;
    margin: 20px auto 30px;
    text-align: center;

    .el-input {
        width: 500px;
    }

    .sub-title {
        margin: 20px 0 30px;
    }

    .icons {
        &-list {
            list-style: none;
            margin: 10px 0;
            overflow: hidden;
        }

        &-item {
            background-color: inherit;
            border-radius: 4px;
            color: #55585e;
            cursor: pointer;
            float: left;
            height: 100px;
            list-style: none;
            position: relative;
            text-align: center;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;
            width: 18.5%;
            margin: 6px 6px 6px 0;
            padding: 10px 0 0;

            &::after {
                color: #fff;
                content: '复制成功!';
                height: 100%;
                left: 0;
                line-height: 110px;
                opacity: 0;
                position: absolute;
                text-align: center;
                top: 0;
                transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
                width: 100%;
            }

            &.copied {
                &:hover {
                    color: hsla(0, 0%, 100%, 0.2);
                }

                &::after {
                    opacity: 1;
                    top: -10px;
                }
            }

            &:hover {
                background-color: #1890ff;
                color: #fff;

                .rab-icon {
                    transform: scale(1.3);
                }
            }

            .rab-icon {
                font-size: 36px;
                margin: 12px 0 8px;
                transition: transform 0.3s ease-in-out;
                will-change: transform;
            }

            .icons-class {
                padding-top: 8px;
            }
        }
    }

    #copyBox {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        z-index: -999;
    }
}
</style>