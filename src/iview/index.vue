<template>
  <div class="index">
    <Layout>
      <!-- 侧边栏 collapsible 展开收缩 active-name设置默认高亮 -->
      <Sider class="sider" width="240" v-model="isCollapsed" :class="{ 'sider-hide': isCollapsed }">
        <Menu class="sider-menu" theme="dark" :active-name="activeName">
          <MenuItem name="/renwu" to="/renwu">
            <Icon type="ios-apps"></Icon>
            <span>任务管理</span>
          </MenuItem>
          <MenuItem name="/configure" to="/configure">
            <Icon type="ios-apps"></Icon>
            <span>配置</span>
          </MenuItem>
          <MenuItem name="/administration" to="/administration">
            <Icon type="ios-bookmark"></Icon>
            <span>节点管理</span>
          </MenuItem>
          <MenuItem name="/deduction" to="/deduction">
            <Icon type="ios-bookmark"></Icon>
            <span>扣费流水</span>
          </MenuItem>
          <Submenu key="1" name="/option">
            <template slot="title">
              <Icon type="ios-paper"></Icon>数据统计
            </template>
            <Menu-item key="1-1" name="/task" to="/task">任务数</Menu-item>
            <Menu-item key="1-2" name="/recharge" to="/recharge">充值</Menu-item>
          </Submenu>
          <MenuItem class="userName" name="userName">
            <span>{{name}}</span>
            <span @click="confirm">退出登录</span>
          </MenuItem>
        </Menu>
      </Sider>
      <!-- 内容 -->
      <Content class="content" :class="{ 'content-expand': isCollapsed }">
        <router-view/>
      </Content>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "index",
  created() {
    // 监听路由变化打开对应路由
    this.activeName = this.$route.path;
    // 用户名
    this.name = this.$store.state.username;
  },
  data() {
    return {
      isCollapsed: false, // 侧边栏默认关闭
      activeName: this.$route.path
    };
  },
  methods: {
    confirm() {
      this.$Modal.confirm({
        title: "您确认退出登录吗?",
        onOk: () => {
          this.$Message.info("确认退出");
          localStorage.setItem("myToken", "");
          localStorage.setItem("username", "");
          this.$router.push('/login');
        },
        onCancel: () => {
          this.$Message.info("取消退出");
        }
      });
    }
  }
};

</script>

<style lang="scss" scoped>
// @import "../../assets/index/css/bass.css";

/* 去除灰线 */
.ivu-menu-horizontal.ivu-menu-light:after {
  display: none;
}
.sider {
  position: fixed;
  height: 100%;
  left: 0;
  overflow: auto;
  z-index: 1;
  // 侧边栏 （用户名退出栏）
  .sider-menu {
    position: relative;
    height: 100%;
    .userName {
      width: 100%;
      position: absolute;
      bottom: 20px;
      padding: 0;
      span {
        float: left;
        height: 42px;
        line-height: 42px;
        left: 42px;
        padding-left: 50px;
      }
    }
  }
}
.sider-hide .ivu-menu-item span{
  display: none;
}
.content {
  height: 100%;
  margin-left: 240px;
  padding: 10px;
  background-color: #fff;
  // transition: all 0.2s ease-in-out;
}
// .content-expand {
//   margin-left: 64px;
// }
// 弹框
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  .ivu-modal {
    top: 0;
  }
  .ivu-icon-ios-help-circle:before{
    content:'';
  }
}

// 侧边栏选中后底色
// .ivu-menu-dark {
//   background-color: #001529;
// }
// .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title {
//   background: #001529;
// }

// .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened {
//   background: #000c17;
// }

// .ivu-menu-submenu-title:hover {
//   background: #001529;
// }

// // 侧边栏一级菜单鼠标经过样式
// .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover,
// .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
//   background-color: rgb(0, 21, 41);
// }
// // 侧边栏一级菜单鼠标经过样式
// .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover,
// .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
//   background-color: rgb(0, 21, 41);
// }
// .ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item {
//   padding-left: 52px;
// }
// // 默认选中样式
// .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu),
// .ivu-menu-dark.ivu-menu-vertical
//   .ivu-menu-item-active:not(.ivu-menu-submenu):hover,
// .ivu-menu-dark.ivu-menu-vertical
//   .ivu-menu-submenu-title-active:not(.ivu-menu-submenu),
// .ivu-menu-dark.ivu-menu-vertical
//   .ivu-menu-submenu-title-active:not(.ivu-menu-submenu):hover {
//   background-color: #001529;
// }

</style>

