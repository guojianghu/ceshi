<template>
  <div class="configure">
    <h2>配置</h2>
    <div class="table">
      <i-table border :columns="columns1" :data="data1"></i-table>
      <div class="fl page">显示第1到第20条记录，总共222条记录每页显示20条记录</div>
      <Page :total="100" show-elevator class="page fr"></Page>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "configure",
  data() {
    return {
      dateType: "day",
      //   表格数据
      columns1: [
        {
          title: "序号",
          key: "id",
          width: 60,
          align: "center"
        },
        {
          title: "配置项",
          key: "age",
          width: 160,
          align: "center"
        },
        {
          title: "操作",
          key: "name",
          width: 100,
          align: "center"
        },
        {
          title: "配置参数",
          key: "age",
          width: 160,
          align: "center"
        },
        {
          title: "说明",
          key: "age",
          align: "center"
        }
      ],
      data1: [
        {
          id: "1",
          work: 18,
          address: "北京市朝阳区芍药居"
        },
        {
          id: "2",
          work: 25,
          address: "北京市海淀区西二旗"
        },
        {
          id: "3",
          work: 30,
          address: "上海市浦东新区世纪大道"
        },
        {
          id: "4",
          work: 26,
          address: "深圳市南山区深南大道"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.configure {
  h2 {
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  //   表格栏
  .table {
    margin-top: 20px;
    .ivu-table td {
      height: 30px;
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
</style>