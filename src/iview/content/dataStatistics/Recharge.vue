<template>
  <div class="recharge">
    <h2>充值</h2>
    <div class="renwHeader clearfix">
      <template>
        <RadioGroup v-model="dateType" class="fl">
          <Radio label="day">当日</Radio>
          <Radio label="week">本周</Radio>
          <Radio label="month">本月</Radio>
          <Radio label="mySet">自定义</Radio>
        </RadioGroup>
      </template>
      <i-col span="4">
        <Date-picker
          type="daterange"
          placement="bottom-end"
          placeholder="选择日期"
          style="width: 200px"
          class="slec"
        ></Date-picker>
      </i-col>
    </div>
    <div id="myChart" style="width:90%;height:600px"></div>
  </div>
</template>

<script>
import api from "@/api";
import echarts from "echarts";
export default {
  name: "recharge",
  data() {
    return {
      dateType: "day"
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "axis"
        },
        legend: {
          left: "10%",
          data: ["充值人数", "充值金额"]
        },
        toolbox: {
          show: true,
          feature: {
            magicType: { type: ["line", "bar"] },
            // restore: {show: true},
            saveAsImage: { show: true }
          }
        },
        grid: {
          //直角坐标系内绘图网格
          containLabel: true //grid 区域是否包含坐标轴的刻度标签。
        },
        dataZoom: {
          //dataZoom 组件 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响。
          type: "slider", //滑动条型数据区域缩放组件
          start: 0, //起始位置0
          end: 100 //结束位置100
        },
        xAxis: {
          type: "category",
          // name: "周数", //坐标轴名称。
          axisTick: {
            //坐标轴刻度相关设置。
            alignWithLabel: true //类目轴为true 的时候有效，可以保证刻度线和标签对齐;
          },
          data: [
            "2018-11-15",
            "2018-11-16",
            "2018-11-17",
            "2018-11-18",
            "2018-11-19"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "充值人数",
            type: "line",
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "充值金额",
            type: "line",
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.recharge {
  h2 {
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  // 时间栏
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
  // 折现图
  #myChart {
    margin-left: -20px;
    margin-top: 20px;
  }
}
// https://blog.csdn.net/weixin_40671802/article/details/79661804（案例）
// https://echarts.baidu.com/option.html#tooltip(参数查询)
</style>