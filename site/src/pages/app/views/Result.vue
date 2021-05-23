<template>
  <article class="markdown">
    <ExampleHeaderArea
      name="Result"
      title="结果"
      desc="用于反馈一系列操作任务的处理结果。"
    >
      <li>当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-result
          status="success"
          title="提交成功"
          subtitle="已提交申请，等待部门审核。"
          extra="<button type='button' class='rab-btn rab-btn-primary'>返回首页</button> 
         <button type='button' class='rab-btn'>打印</button>"
        />
      </template>
      <template #header><span id="Success">Success</span></template>
      <template #desc>成功的结果</template>
      <template #code><Success /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-result
          title="请勿重复操作"
          extra="<button type='button' class='rab-btn rab-btn-primary'>返回首页</button>"
        />
      </template>
      <template #header><span id="Info">Info</span></template>
      <template #desc>展示处理结果</template>
      <template #code><Info /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-result
          status="warning"
          title="操作发生了一些问题"
          extra="<button type='button' class='rab-btn rab-btn-primary'>重新提交</button>"
        />
      </template>
      <template #header><span id="Warning">Warning</span></template>
      <template #desc>警告类型的结果</template>
      <template #code><Warning /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-result
          status="error"
          title="提交失败"
          subtitle="请检查并修改以下信息后再重新提交"
          extra="<button type='button' class='rab-btn rab-btn-primary'>返回修改</button>"
        >
          <div>
            <h4 class="typography">您提交的内容有以下错误:</h4>
            <div class="typography">
              <i class="rab-icon rab-icon-ios-close-circle-outline"></i>
              您的帐户已被冻结。
              <a>立即解冻></a>
            </div>
            <div class="typography">
              <i class="rab-icon rab-icon-ios-close-circle-outline"></i>
              您的帐户还没有资格申请。
              <a>申请解锁></a>
            </div>
          </div>
        </r-result>
      </template>
      <template #header><span id="Error">Error</span></template>
      <template #desc>
        <p>复杂的错误反馈。</p>
        <p>注意：标签容器内必须具有一个父元素！</p>
      </template>
      <template #code><Error /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-result
          status="403"
          title="403"
          subtitle="对不起，您没有权限访问此页。"
          extra="<button type='button' class='rab-btn rab-btn-primary'>返回首页</button>"
        />
      </template>
      <template #header><span id="403">403</span></template>
      <template #desc></template>
      <template #code><F03 /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-result
          status="404"
          title="404"
          subtitle="对不起，您访问的页面不存在。"
          extra="<button type='button' class='rab-btn rab-btn-primary'>返回首页</button>"
        />
      </template>
      <template #header><span id="404">404</span></template>
      <template #desc></template>
      <template #code><F04 /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-result
          status="500"
          title="500"
          subtitle="对不起，服务器出了点问题。"
          extra="<button type='button' class='rab-btn rab-btn-primary'>返回首页</button>"
        />
      </template>
      <template #header><span id="500">500</span></template>
      <template #desc></template>
      <template #code><FV500 /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-result
          icon="ios-happy"
          title="太棒了，我们已经完成了所有的操作！"
          extra="<button type='button' class='rab-btn rab-btn-primary'>下一步</button>"
        />
      </template>
      <template #header><span id="自定义图标">自定义图标</span></template>
      <template #desc></template>
      <template #code><CustomIcon /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Result from "../../../../../src/components/result";
import { Anchor, ExampleHeaderArea, CodeBox } from "../../../components";
import {
  Info,
  Success,
  Warning,
  Error,
  F03,
  F04,
  FV500,
  CustomIcon,
  APITable,
} from "../../../examples-code/components/result";

onMounted(() => new Result());

const anchors: string[] = [
  "Success",
  "Info",
  "Warning",
  "Error",
  "403",
  "404",
  "500",
  "自定义图标",
  "API",
];
</script>

<style scope>
.typography {
  overflow-wrap: break-word;
  margin-bottom: 8px;
}

.typography .rab-icon {
  color: red;
}
</style>
