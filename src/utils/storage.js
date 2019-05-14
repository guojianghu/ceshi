// 缓存封装
const ls = window.localStorage;
const ss = window.sessionStorage;

export default {
  ls: {
    get(key) {
      try {
        return JSON.parse(ls.getItem(key));
      } catch (err) {
        return null;
      }
    },
    set(key, val) {
      ls.setItem(key, JSON.stringify(val));
    },
    clear() {
      ls.clear();
    },
    keys() {
      return ls.keys();
    },
    remove(key) {
      ls.removeItem(key);
    }
  },
  ss: {
    get(key) {
      try {
        return JSON.parse(ss.getItem(key));
      } catch (err) {
        return null;
      }
    },
    set(key, val) {
      ss.setItem(key, JSON.stringify(val));
    },
    clear() {
      ss.clear();
    },
    keys() {
      return ss.keys();
    },
    remove(key) {
      ss.removeItem(key);
    }
  },
  cookie: {
    get(name) {
      var arr;
      var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
      else
        return null;
    },
    set(name, value, day) {
      if (day !== 0) {     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
        var expires = day * 24 * 60 * 60 * 1000;
        var date = new Date(+new Date() + expires);
        document.cookie = name + "=" + escape(value) + ";expires=" + date.toUTCString();
      } else {
        document.cookie = name + "=" + escape(value);
      }
    },
    remove(name) {
      this.set(name, ' ', -1);
    }
  }
};


