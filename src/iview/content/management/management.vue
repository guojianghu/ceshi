<template>
  <div class="renw">
    <h2>版本装换管理</h2>
    <div class="renwHeader clearfix">
      <span class="upTime fl">上传时间</span>
      <template>
        <RadioGroup v-model="dateType" class="fl">
          <Radio label="day">当日</Radio>
          <Radio label="week">本周</Radio>
          <Radio label="month">本月</Radio>
          <Radio label="mySet">自定义</Radio>
        </RadioGroup>
      </template>
      <i-col span="3">
        <DatePicker type="date" placeholder="选择日期" style="width: 120px" class="slec"></DatePicker>
      </i-col>
      <i-col span="4">
        <DatePicker type="date" placeholder="选择日期" style="width: 120px" class="slec"></DatePicker>
      </i-col>
      <div class="fl">状态
        <i-select :model.sync="model1" style="width:100px" class="slec">
          <i-option
            v-for="(item,index) in cityList"
            :value="item.value"
            :key="index"
          >{{ item.label }}</i-option>
        </i-select>
      </div>
      <div class="mgleft fl">来源
        <i-select :model.sync="model2" style="width:120px" class="slec">
          <i-option
            v-for="(item,index) in cityList1"
            :value="item.value"
            :key="index"
          >{{ item.label }}</i-option>
        </i-select>
      </div>
      <div class="mgleft fr">搜索
        <i-input placeholder="用户名/节点ip" class="seach"></i-input>
      </div>
    </div>
    <div class="table">
      <div class="ivu-table ivu-table-default ivu-table-border ivu-table-wrapper">
        <div class="ivu-table-header">
          <table cellspacing="0" cellpadding="0" border="0" style="width: 1339px;">
            <colgroup>
              <col width="60">
              <col width="400">
              <col width="100">
              <col width="160">
            </colgroup>
            <thead>
              <tr>
                <th class="ivu-table-column-center">
                  <div class="ivu-table-cell">
                    <span class>序号</span>
                  </div>
                </th>
                <th class="ivu-table-column-center">
                  <div class="ivu-table-cell">
                    <span class>配置项</span>
                  </div>
                </th>
                <th class="ivu-table-column-center">
                  <div class="ivu-table-cell">
                    <span class>操作</span>
                  </div>
                </th>
                <th class="ivu-table-column-center">
                  <div class="ivu-table-cell">
                    <span class>配置参数</span>
                  </div>
                </th>
                <th class="ivu-table-column-center">
                  <div class="ivu-table-cell">
                    <span class>说明</span>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="ivu-table-body" v-if="!list">
          <table cellspacing="0" cellpadding="0" border="0" style="width: 1339px;">
            <colgroup>
              <col width="60">
              <col width="400">
              <col width="100">
              <col width="160">
            </colgroup>
            <tbody class="ivu-table-tbody">
              <tr class="ivu-table-row">
                <td class="ivu-table-column-center">
                  <div class="ivu-table-cell">
                    <span>1</span>
                  </div>
                </td>
                <td class="ivu-table-column-center">
                  <div class="ivu-table-cell">
                    <span></span>
                  </div>
                </td>
                <td class="ivu-table-column-center">
                  <div class="ivu-table-cell">
                    <span></span>
                  </div>
                </td>
                <td class="ivu-table-column-center">
                  <div class="ivu-table-cell">
                    <span></span>
                  </div>
                </td>
                <td class="ivu-table-column-center">
                  <div class="ivu-table-cell">
                    <span></span>
                  </div>
                </td>
              </tr>
              <tr class="ivu-table-row">
                <td class="ivu-table-column-center">
                  <div class="ivu-table-cell">
                    <span>1</span>
                  </div>
                </td>
                <td class="ivu-table-column-center">
                  <div class="ivu-table-cell">
                    <span></span>
                  </div>
                </td>
                <td class="ivu-table-column-center">
                  <div class="ivu-table-cell">
                    <span></span>
                  </div>
                </td>
                <td class="ivu-table-column-center">
                  <div class="ivu-table-cell">
                    <span></span>
                  </div>
                </td>
                <td class="ivu-table-column-center">
                  <div class="ivu-table-cell">
                    <span></span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="ivu-table-tip" v-if="list">
          <table cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td style="width: 100%;">
                  <span>暂无筛选结果</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="fl page">显示第1到第20条记录，总共222条记录每页显示20条记录</div>
      <Page :total="100" show-elevator class="page fr"></Page>
    </div>
    <div class="tab">
      <Tabs active-key="key1">
        <Tab-pane label="详情" key="key1" class="tabxq">
          <dl>
            <dd>
              内存峰值：
              <span>12G</span>
            </dd>
            <dd>
              原版本：
              <span>3ds 2018</span>
            </dd>
            <dd>
              目标版本：
              <span>3ds</span>
            </dd>
            <dd>
              扣费方式：
              <span>扣除次数/装换</span>
            </dd>
          </dl>
          <dl>
            <dd>
              内存峰值：
              <span>12G</span>
            </dd>
            <dd>
              原版本：
              <span>3ds 2018</span>
            </dd>
            <dd>
              目标版本：
              <span>3ds</span>
            </dd>
            <dd>
              扣费方式：
              <span>扣除次数/装换</span>
            </dd>
          </dl>
          <dl>
            <dd>
              内存峰值：
              <span>12G</span>
            </dd>
            <dd>
              原版本：
              <span>3ds 2018</span>
            </dd>
            <dd>
              目标版本：
              <span>3ds</span>
            </dd>
            <dd>
              扣费方式：
              <span>扣除次数/装换</span>
            </dd>
          </dl>
          <dl>
            <dd>
              内存峰值：
              <span>12G</span>
            </dd>
            <dd>
              原版本：
              <span>3ds 2018</span>
            </dd>
            <dd>
              目标版本：
              <span>3ds</span>
            </dd>
            <dd>
              扣费方式：
              <span>扣除次数/装换</span>
            </dd>
          </dl>
        </Tab-pane>
        <Tab-pane label="操作记录" key="key2">操作记录</Tab-pane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "management",
  data() {
    return {
      dateType: "day",
      model1: "",
      model2: "",
      // 是否有数据
      list: false,
      //   状态选择数据
      cityList: [
        {
          value: "beijing",
          label: "北京市"
        },
        {
          value: "shanghai",
          label: "上海市"
        }
      ],
      //   来源选择数据
      cityList1: [
        {
          value: "shenzhen",
          label: "深圳市"
        },
        {
          value: "hangzhou",
          label: "杭州市"
        }
      ],
      options: {
        // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
        target: "https://",
        // target: "//localhost:3000/upload",
        testChunks: false
      },
      attrs: {
        accept: "image/*"
      }
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "User Info",
        content: `Name：${this.data6[index].name}<br>Age：${
          this.data6[index].age
        }<br>Address：${this.data6[index].address}`
      });
    },
    remove(index) {
      this.data6.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.renw {
  h2 {
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  //  上传时间栏
  .renwHeader {
    padding-top: 16px;
    .upTime {
      margin: 0 15px 0 0;
    }
    .slec,
    .seach {
      margin: -10px 0 -6px 6px;
      width: 140px;
    }
  }
  //   表格栏
  .table {
    margin-top: 20px;
    .ivu-table td {
      height: 48px;
    }
  }
  //   分页
  .page {
    margin-top: 10px;
  }
  //   tab选项卡
  .tab {
    margin-top: 50px;
    background-color: #fff;
    .ivu-tabs-tabpane {
      height: 200px;
    }
    .tabxq {
      dl {
        float: left;
        width: 25%;
        padding-left: 30px;
        text-align: left;
        dd {
          line-height: 26px;
          font-size: 14px;
        }
      }
    }
  }
}
.uploader-example {
  width: 100%;
  font-size: 12px;
}
.uploader-example .uploader-btn {
  margin-right: 4px;
}
.uploader-example .uploader-list {
  width: 100%;
  max-height: 300px;
  border: 1px solid #ccc;
  overflow: auto;
}

.ivu-table-wrapper {
  position: relative;
  border: 1px solid #dcdee2;
  border-bottom: 0;
  border-right: 0;
}
</style>