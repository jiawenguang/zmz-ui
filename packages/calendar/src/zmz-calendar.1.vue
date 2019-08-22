<template>
  <div class="zmz-calendar">
    <div v-for='(item, index) in languageArray' class="zmz-calendar__months">
      {{item}}
    </div>
    <div class="header">
			{{monthName}} {{year}}
		</div>
    <div class="week">
			<div v-for="item in week" class="zmz-calendar__weeks">
				{{item}}
			</div>
		</div>
    <div class="zmz-calendar__days">
      <div v-for="(item, index) in days" :key='index' class="dayIndex" @click='choose(index)' :class="{choose: chooseIndex == index}">
        <!-- //item为string 为本月日期 -->
        <div v-if="typeof(item) == 'string'">
          {{item}}
        </div>
        <!-- //否则为非本月日期 添加class setGrey -->
        <div v-else class="setGrey">
          {{item[0]}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "ZmzCalendar",
    props: {
      language: {
        type: String,
        default: 'zh'
      },
      languageArr: {
        type: Array,
      },
      showIcon: {
        type: Boolean,
        default: false
      },
      center: {
        type: Boolean,
        default: false
      },
      closeText: {
        type: String
      },
      closable: {
        type: Boolean,
        default: true
      },
      description: {
        type: String
      }
    },
    data() {
      return {
        months: [{
            'zh': ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          },
          {
            'zh-num': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
          },
          {
            'en': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
              'November', 'December'
            ]
          }
        ],
        monthLastDay: {
          0: 31,
          1: 28,
          2: 31,
          3: 30,
          4: 31,
          5: 30,
          6: 31,
          7: 31,
          8: 30,
          9: 31,
          10: 30,
          11: 31
        },
        chooseIndex: -1,
				leapyear: false,
				firstDayIndex: 0,
        week: ['周日', '周一', '周二', '周三', '周四', '周五', '周六',],
        days:[],
      }
    },
    computed: {
      languageArray() {
        var arr = []
        var newarr = []
        if (this.languageArr) {
          newarr = this.months.concat(this.languageArr)
        } else {
          newarr = this.months
        }
        newarr.forEach((item) => {
          if (item.hasOwnProperty(this.language)) {
            var name = this.language
            arr = item[name]
          }
        })
        return arr;
      },
      typeClass() {
        return `zmz-alert--${this.type}`;
      },
      iconClass() {
        //暂无对应图标
        return `zmz-icon--${this.type}`
        // return "zmz-icon-qzone";
      },
      isBoldTitle() {
        return this.description ? "is-bold" : "";
      },
      isBigIcon() {
        return this.description ? "is-big" : "";
      }
    },
    methods: {
      choose(index) {
        this.chooseIndex = index;
      },
      judgeDays() {
        let lastMonthIndex = (this.monthIndex - 1) <= 0 ? 11 : this.monthIndex - 1;
        let lastDay = this.getMonthLastDay(this.year, lastMonthIndex);
        this.generateDays(lastDay, this.firstDayIndex);
      },
      getMonthLastDay(year, month) {
        if (month != 1) {
          return this.monthLastDay[month];
        } else {
          if (this.leapyear) {
            return 29;
          } else {
            return 28;
          }
        }
      },
      generateDays(index, lastDayNum) {
        let k = 0;
        let temp = 1;
        //这个for循环是push上个月的剩余日期，
        for (let i = lastDayNum; i > 0; i--) {
          this.days.push([(index - i + 1).toString()]);
          k++;
        }
        index = 1;
        for (let i = 0; i < 42 - lastDayNum; i++) {
          //闰年二月
          if (this.leapyear) {
            if (index <= 29) {
              this.days.push(index.toString());
            }
            //非闰年月份
          } else if (index <= this.monthLastDay[this.monthIndex]) {
            this.days.push(index.toString());
            //这个else是push下个月的日期
          } else {
            this.days.push([temp.toString()]);
            temp++;
          }
          index++;
          k++;
        }
      },
      isLeapYear() {
        return ((0 == this.year % 4 && (this.year % 100 != 0) || (this.year % 400 == 0)));
      }
    },
    mounted() {
      this.firstDayIndex = new Date(this.year + '/' + (this.monthIndex + 1) + '/' + '01').getDay();
      this.judgeDays();
      this.leapyear = this.isLeapYear();
      if (new Date().getMonth() == this.monthIndex) {
        this.chooseIndex = this.day + this.firstDayIndex;
      }
    },
  };
</script>
<style>
  .zmz-calendar{
    width: 300px;
    margin: 0 auto;
  }
  .zmz-calendar__months{
    width: 14.28%;
    display: inline-block;
  }
  .zmz-calendar__days .dayIndex{
     width: 14.28%;
     height: 30px;
     line-height: 30px;
     text-align: center;
     display: inline-block;
  }
  .zmz-calendar__weeks{
    width: 14.28%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
  }
</style>
