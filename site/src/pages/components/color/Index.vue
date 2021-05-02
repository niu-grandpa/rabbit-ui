<template>
    <article class="markdown">
        <h1>Color 色彩</h1>
        <Anchor title="概述" />
        <p>
            Rabbit UI 推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和插件之间的视觉一致。
        </p>
        <Anchor title="主色" />
        <p>
            Rabbit UI 使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark Primary
            常用于 active。
        </p>
        <ColorCard :data="mainColors" />
        <Anchor title="辅助色" />
        <p>除了主色外的场景色，需要在不同的场景中使用（例如成功、警告和失败）。</p>
        <ColorCard :data="auxiliaryColors" :span="6" />
        <Anchor title="中性色" />
        <p>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>
        <ColorCard :data="neutralColors" :span="6" />
    </article>
</template>

<script lang="ts" setup>
import { Describe, Example } from '../../../components/index';

interface ColorsProps {
    name: string;
    desc: string;
    dark?: boolean;
}

const mainColors = [
    {
        name: 'Primary',
        desc: '#1890ff'
    } as ColorsProps,
    {
        name: 'Light Primary',
        desc: '#5cadff'
    } as ColorsProps,
    {
        name: 'Dark Primary',
        desc: '#2b85e4'
    } as ColorsProps
];

const auxiliaryColors = [
    {
        name: 'Info',
        desc: '#2db7f5'
    } as ColorsProps,
    {
        name: 'Success',
        desc: '#52c41a'
    } as ColorsProps,
    {
        name: 'Warning',
        desc: '#faad14'
    } as ColorsProps,
    {
        name: 'Error',
        desc: '#ff4d4f'
    }
];

const neutralColors = [
    {
        name: '标题',
        desc: '#2c3e50'
    } as ColorsProps,
    {
        name: '正文',
        desc: '#55585e'
    } as ColorsProps,
    {
        name: '辅助/图标',
        desc: '#808695'
    } as ColorsProps,
    {
        name: '失效',
        desc: '#c5c8ce'
    } as ColorsProps,
    {
        name: '边框',
        desc: '#dcdee2',
        dark: true
    } as ColorsProps,
    {
        name: '分割线',
        desc: '#e8eaec',
        dark: true
    } as ColorsProps,
    {
        name: '背景',
        desc: '#fafafa',
        dark: true
    } as ColorsProps
];
</script>