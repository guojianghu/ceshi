<template>
  <div class="task">
    <h2>任务数</h2>
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
        <DatePicker
          type="daterange"
          :options="options2"
          placement="bottom-end"
          placeholder="选择日期"
          style="width: 200px"
          class="slec"
        ></DatePicker>
      </i-col>
    </div>
    <div id="myChart" style="width:1000px;height:500px"></div>
  </div>
</template>

<script>
import api from "@/api";
import echarts from "echarts";
export default {
  name: "task",
  data() {
    return {
      dateType: "day",
      options2: {
        shortcuts: [
          {
            text: "一周",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              return [start, end];
            }
          },
          {
            text: "一个月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              return [start, end];
            }
          },
          {
            text: "三个月",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              return [start, end];
            }
          },
          {
            text: "半年",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 182);
              return [start, end];
            }
          },
          {
            text: "一年",
            value() {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 365);
              return [start, end];
            }
          }
        ]
      }
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
          data: ["提交任务数", "提交人数", "装换失败任务", "转换成功任务数"]
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
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
            name: "提交任务数",
            type: "line",
            stack: "总量",
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "提交人数",
            type: "line",
            stack: "总量",
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "装换失败任务",
            type: "line",
            stack: "总量",
            smooth: true,
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "转换成功任务数",
            type: "line",
            stack: "总量",
            smooth: true,
            data: [320, 332, 301, 334, 390, 330, 320]
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.task {
  h2 {
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  //时间栏
  .renwHeader {
    padding-top: 16px;
    .upTime {
      margin: 0 15px 0 0;
    }
    .slec,
    .seach {
      margin: -10px 0 -6px 90px;
      width: 160px;
    }
  }
  // 折现图
  #myChart {
    margin-left: 20px;
    margin-top: 20px;
  }
}
</style>