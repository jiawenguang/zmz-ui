<template>
  <div class="zmz-formattime" :class="{ 'zmz-formattime--countDown': countDownflag }">
    <template>
      <template v-if="countDownflag">
       <p class="zmz-formattime__countDown"><span>{{time.d}}</span><em>天</em><span>{{time.h}}</span><em>时</em><span>{{time.m}}</span><em>分</em><span>{{time.s}}</span><em>秒</em></p>
      </template>
      <template v-else>
       <span class="zmz-formattime__horizon">{{ handleTime }}</span>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  name: 'ZmzFormattime',
  props: {
    type: {
      type: String,
      default: ''
    },
    horizontime: {
      type: String ,
      default: ''
    },
    countDownTime: {
      type: String,
      default: ''
    },
    suffixtext: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      time: {
        d:0,
        h:0,
			  m:0,
			  s:0,
      },
      interval:null
    };
  },
  mounted() {
    if(this.countDownTime){
      this.handlecountDownTime(this.countDownTime)
    }
    if(this.type =='difference'){
      clearInterval(this.interval);
    }
  },
  computed: {
    countDownflag() {
      return this.countDownTime || (this.countDownTime && this.horizontime);
    },
    handleTime() {
      var minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
      var hour = minute * 60;
      var day = hour * 24;
      var week = day * 7;
      var halfamonth = day * 15;
      var month = day * 30;
      var year = day * 365;
      var compatible = this.horizontime.replace(/-/g, '/');
      var now = new Date().getTime(); //获取当前时间毫秒
      var dateTimeStamp = new Date(compatible).getTime();
      var diffValue = now - dateTimeStamp; //时间差
      if (diffValue < 0) {
        return;
      }
      var minC = diffValue / minute; //计算时间差的分，时，天，周，月
      var hourC = diffValue / hour;
      var dayC = diffValue / day;
      var weekC = diffValue / week;
      var monthC = diffValue / month;
      var yearC = diffValue / year;
      var result;
      if (yearC == 1) {
        result = ' ' + parseInt(yearC) + (this.suffixtext && this.suffixtext.Y ? this.suffixtext.Y : '年前');
      } else if (monthC >= 1 && monthC <= 12) {
        result = ' ' + parseInt(monthC) + (this.suffixtext && this.suffixtext.M ? this.suffixtext.M : '月前');
      } else if (weekC >= 1 && weekC <= 4) {
        result = ' ' + parseInt(weekC) + (this.suffixtext && this.suffixtext.W ? this.suffixtext.W : '周前');
      } else if (dayC >= 1 && dayC <= 7) {
        result = ' ' + parseInt(dayC) + (this.suffixtext && this.suffixtext.D ? this.suffixtext.D : '天前');
      } else if (hourC >= 1 && hourC <= 24) {
        result = ' ' + parseInt(hourC) + (this.suffixtext && this.suffixtext.H ? this.suffixtext.H : '小时前');
      } else if (minC >= 1 && minC <= 60) {
        result = ' ' + parseInt(minC) + (this.suffixtext && this.suffixtext.S ? this.suffixtext.S : '分钟前');
      } else if (diffValue >= 0 && diffValue <= minute) {
        result = this.suffixtext && this.suffixtext.Y ? this.suffixtext.Y : '刚刚';
      } else {
        var datetime = new Date();
        datetime.setTime(dateTimeStamp);
        var Nyear = datetime.getFullYear();
        var Nmonth = datetime.getMonth() + 1 < 10 ? '0' + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
        var Ndate = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate();
        var Nhour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours();
        var Nminute = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes();
        var Nsecond = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds();
        result = Nyear + '-' + Nmonth + '-' + Ndate + ' ' + Nhour + ':' + Nminute + ':' + Nsecond;
      }
      return result;
    }
  },
  methods: {
    handlecountDownTime(countDownTime) {
      var that = this;
      this.interval = setInterval(() => {
        var date = new Date(countDownTime) - new Date(); //计算剩余的毫秒数
        if (date == 0) {
          clearInterval(that.interval);
        } else {
          that.time.d = parseInt(date / 1000 / 60 / 60 / 24, 10);
          var h = parseInt((date / 1000 / 60 / 60) % 24, 10);
          if (h < 10) {
             h = '0' +  h;
          }
          var m = parseInt((date / 1000 / 60) % 60, 10); //计算剩余的分钟
          if (m < 10) {
             m = '0' +  m;
          }
          var s = parseInt((date / 1000) % 60, 10); //计算剩余的秒数
          if (s < 10) {
             s = '0' +  s;
          }
          that.time.h = h
          that.time.m = m
          that.time.s = s
        }
      }, 1000);
    },
  }
};
</script>
