<template>
  <div class="deduction">
    <h2>扣费流水</h2>
    <div class="renwHeader clearfix">
      <template>
        <RadioGroup v-model="dateType" class="fl" @on-change="handleSetDate">
          <Radio label="day">当日</Radio>
          <Radio label="week">本周</Radio>
          <Radio label="month">本月</Radio>
          <Radio label="mySet">自定义</Radio>
        </RadioGroup>
        <DatePicker
          type="daterange"
          :options="options3"
          style="width: 250px"
          transfer
          format="yyyy年MM月dd日"
          class="slec fl"
        ></DatePicker>
      </template>
      <div class="mgleft fl">状态
        <i-select :model.sync="model1" style="width:180px" class="slec">
          <i-option
            v-for="(item,index) in cityList"
            :value="item.value"
            :key="index"
          >{{ item.label }}</i-option>
        </i-select>
      </div>
      <div class="mgleft fl">来源
        <i-select :model.sync="model2" style="width:180px" class="slec">
          <i-option
            v-for="(item,index) in cityList1"
            :value="item.value"
            :key="index"
          >{{ item.label }}</i-option>
        </i-select>
      </div>
      <div class="mgleft fr">搜索
        <i-input
          placeholder="用户名/节点ip"
          class="seach"
          v-model="seachVal"
          @keyup.enter.native="toSeachVal"
        ></i-input>
      </div>
    </div>
    <div class="table">
      <i-table border :columns="columns1" :data="data1" :loading="loading"></i-table>
      <div class="fl page">显示第1到第20条记录，总共{{this.total}}条记录每页显示20条记录</div>
      <Button type="primary" class="page fr" @click="goPage" style=" margin-left: 10px;">跳转</Button>
      <Page
        :total="total"
        :current.sync="current"
        show-elevator
        class="page fr"
        @on-change="getData"
        @on-page-size-change="handleChangeSize"
      ></Page>
    </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "deduction",
  data() {
    return {
      dateType: "day",
      model1: "",
      model2: "",
      pageNum: 0,
      seachVal: "", //搜索关键字
      loading: false,
      total: 100, //总条数
      size: 10,
      current: 1, //当前第几页
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
      //   表格数据
      columns1: [
        {
          title: "序号",
          key: "id",
          width: 60,
          align: "center"
        },
        {
          title: "操作",
          key: "work",
          width: 150,
          align: "center"
        },
        {
          title: "任务ID",
          key: "name",
          width: 80,
          align: "center"
        },
        {
          title: "任务名",
          key: "age",
          width: 80,
          align: "center"
        },
        {
          title: "用户名",
          key: "age",
          width: 150,
          align: "center"
        },
        {
          title: "提交时间",
          key: "name",
          width: 150,
          align: "center"
        },
        {
          title: "状态",
          key: "age",
          width: 80,
          align: "center"
        },
        {
          title: "节点IP",
          key: "name",
          width: 150,
          align: "center"
        },
        {
          title: "装换耗时",
          key: "age",
          width: 100,
          align: "center"
        },
        {
          title: "文件大小",
          key: "name",
          width: 100,
          align: "center"
        },
        {
          title: "来源",
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
      ],
      options3: {
        disabledDate(date) {
          // return date && date.valueOf() > Date.now() - 86400000;
          return date && date.valueOf() > Date.now();
        }
      }
    };
  },
  mounted() {
    // 初始化时候请求数据
    this.getData();
  },
  methods: {
    // 获取数据
    getData() {
      // 如果加载中，跳出当前防止用户一直点击触发事件
      if (this.loading) return;
      // 请求数据的时候添加加载效果
      this.loading = true;
      // 发送器请求获取数据
    },
    handleChangeSize(val) {
      this.size = val;
      // 当前数据处理完执行的数据队列
      this.$nextTick(() => {
        // 调用数据
        this.getData();
      });
    },
    // 跳转分页
    goPage() {
      var pageNumber = $(".ivu-page-options-elevator").children(
        "input[type=text]"
      );
      this.pageNum = parseInt(pageNumber.val());
      this.current = this.pageNum;
    },
    // 时间计算方式
    handleSetDate(type) {
      const today = new Date().getTime();
      let date;
      // 数值计算时间戳
      switch (type) {
        case "day":
          date = today;
          break;
        case "week":
          date = today - 86400000 * 7;
          break;
        case "month":
          date = today - 86400000 * 30;
          break;
      }

      this.countDate = [new Date(date), new Date(today)];
    },
    // 搜索获取数据
    toSeachVal() {
      console.log(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.deduction {
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
      width: 160px;
    }
  }
  .page {
    margin-top: 10px;
  }
  //   表格栏
  .table {
    margin-top: 20px;
    .ivu-table td {
      height: 30px;
    }
  }
}
</style>