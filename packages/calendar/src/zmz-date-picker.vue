<template>
  <div class="zmz-datepicker">
    <!-- //显示框 -->
    <div class="zmz-datepicker__input" @mouseenter="hovering = true" @mouseleave="hovering = false">
      <input :type="type" class="zmz-datepicker__input__input" @change="handleChange" @input="handleInput" @focus="handleFocus"
        @blur="handleBlur" v-bind="$attrs" @compositionstart="handleCompositionStart" @click="handlecalendar" @compositionend="handleCompositionEnd"
        :class="{ 'is-hover': hover, 'is-disabled': disabled, 'is-focus': focuss, 'is-blur': blurs }" :disabled="disabled"
        :placeholder="placeholder" :value="value" ref="input" />
      <span class="zmz-datepicker__input__afterclearbtn" v-show="showClear" @click="clearInput"><i class="zmz-icon--fill-close"></i></span>
      <span class="zmz-datepicker__input__beforclearbtn"><i class="zmz-icon--calendar"></i></span>
    </div>
    <!-- //日期选择 -->
    <div class="zmz-datepicker__select" v-if="iscalendar">
      <div class="zmz-datepicker__horn"></div>
      <div class="zmz-datepicker__header">
        <div class="zmz-datepicker__year--prev" @click="getPrevYear">
          <i class="zmz-icon--doublearrow-left"></i>
        </div>
        <div class="zmz-datepicker__month--prev" @click="getPrevMonth">
            <i class="zmz-icon--arrow-left"></i>
        </div>
        <div class="zmz-datepicker__year" ><span>{{calendar.year}}</span><span>年</span>
        </div>
        <div class="zmz-datepicker__month"><span>{{calendar.month}}</span><span>月</span></div>
        <!-- <div class="zmz-datepicker__month" @click="backToday">返回今天</div> -->
        <div class="zmz-datepicker__year--next"><i class="zmz-icon--doublearrow-right"></i></div>
        <div class="zmz-datepicker__month--next" @click="getNextMonth"><i class="zmz-icon--arrow-right"></i></div>
      </div>
      <div class="zmz-datepicker__body">
        <div class="zmz-datepicker__weeks">
          <div class="zmz-datepicker__weeks--single" v-for="(item,index) in calendar.weeks" :key="index">
            <span>{{item}}</span>
          </div>
        </div>
        <div class="zmz-datepicker__days">
          <div class="zmz-datepicker__days--rows" v-for="(item,itemIndex)  in calendar.dayList" :key='itemIndex'>
            <div v-for="(key,keyIndex) in item" :key='key.date' :class="{'days--single':key.disable}" @click="daysHandle(key)">
              <span :class="{'days--active':calendar.isDay == key.date,'days--ismonth':!key.ismonth}">{{key.day}}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "ZmzCalendar",
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: '选择日期'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      hover: {
        type: Boolean,
        default: false
      },
      focuss: {
        type: Boolean,
        default: false
      },
      blurs: {
        type: Boolean,
        default: false
      },
      value: '',
      showPassword: {
        type: Boolean,
        default: false
      },
      label: "",
      showToday: {
        type: Boolean,
        default: false //是否显示返回今天按钮
      }
    },
    data() {
      return {
        calLoading: false,
        calendar: { //日历
          dayList: [], //二维数组，循环行，循环列
          prev: [],
          current: [],
          next: [],
          year: '',
          month: '',
          weeks: ['日', '一', '二', '三', '四', '五', '六'],
          isDay: '', //判断是否是'今天'
        },
        isClearBtn: false,
        hovering: false,
        focused: false,
        isComposing: false,
        passwordVisible: false,
        clearbtn:true,
        iscalendar:false
      }
    },
    methods: {
      handlecalendar() {
        this.iscalendar = !this.iscalendar
      },
      handleCompositionStart() {
        this.isComposing = true;
      },
      handleCompositionEnd(event) {
        this.isComposing = false;
        this.handleInput(event);
      },
      focus() {
        this.getInput().focus();
      },
      blur() {
        this.getInput().blur();
      },
      clearInput() {
        this.$emit('input', '');
        this.$emit('change', '');
        this.$emit('clearInput');
      },
      handleChange(event) {
        this.$emit('change', event.target.value);
      },
      handleInput(event) {
        if (this.isComposing) return;
        if (event.target.value === this.nativeInputValue) return;
        this.$emit('input', event.target.value);
        this.$nextTick(this.setNativeInputValue);
      },
      select() {
        this.getInput().select();
      },
      getInput() {
        return this.$refs.input ;
      },
      setNativeInputValue() {
        const input = this.getInput();
        if (!input) return;
        if (input.value === this.nativeInputValue) return;
        input.value = this.nativeInputValue;
      },
      handleFocus(event) {
        this.focused = true;
        this.$emit('focus', event);
      },
      handleBlur(event) {
        this.focused = false;
        this.$emit('blur', event);
      },
      daysHandle(key) {
        if (!key.ismonth) return
        this.iscalendar = false
        this.$emit('input', key.date);
      },
      initDate(val) {
        if (val < 10) {
          return '0' + val;
        } else {
          return val;
        }
      },
      getLastDate(year, month) {
        return new Date(year, month, 0);
      },
      getmonthDays() { //获取上月 当前月和下月天数
        let that = this;
        let y = that.calendar.year;
        let m = that.calendar.month;
        let preYear; //上一年
        let preMonth; //上一月
        let nextYear; //下一年
        let nextMonth; //下一月
        that.calendar.current = [];
        that.calendar.prev = [];
        that.calendar.next = [];

        // 当前月天数
        for (let i = 1; i <= that.getLastDate(y, m).getDate(); i++) {
          //date用于日期判断，day用于显示，flag用于状态判断
          that.calendar.current.push({
            date: y + '-' + m + '-' + that.initDate(i),
            day: i,
            timeList: [],
            disable: true,
            ismonth: true
          });
        }

        /*上月*/
        let d = that.getLastDate(y, m - 1).getDate(); //上月一共多少天
        preYear = m == 1 ? y - 1 : y; //当前月是1月，那么上一月的年份要-1
        preMonth = m == 1 ? 12 : that.initDate(parseInt(m) - 1); //当前月是1月，那么上一月是12月
        for (let j = (that.getLastDate(y, m - 1).getDay()); j >= 0; j--) {
          that.calendar.prev.push({
            date: preYear + '-' + preMonth + '-' + (d - j),
            day: d - j,
            timeList: [],
            disable: true,
            ismonth: false
          });
        }

        /*下月*/
        nextYear = m == 12 ? y + 1 : y; //当前月是12月，那么下一月的年份要+1
        nextMonth = m == 12 ? '01' : that.initDate(parseInt(m) + 1); //当前月是12月，那么下一月是1月
        for (let k = 1; k <= 42 - that.calendar.current.length - that.calendar.prev.length; k++) {
          that.calendar.next.push({
            date: nextYear + '-' + nextMonth + '-' + that.initDate(k),
            day: k,
            timeList: [],
            disable: true,
            ismonth: false
          });
        }
        that.calendar.dayList = [];
        // 数组合并
        let tempArr = that.calendar.prev.concat(that.calendar.current, that.calendar.next);
        // 数组分组，每7个一组
        for (let i = 0; i < tempArr.length; i += 7) {
          that.calendar.dayList.push(tempArr.slice(i, i + 7));
        }
      },
      getPrevYear() {//上一年
        if (this.calendar.year != 1995) {
          this.calendar.year = this.initDate(--this.calendar.year);
        } else {
          this.calendar.year = --this.calendar.year;
        }
        this.getmonthDays();
        this.currentDay();
        this.$emit('on-click', 0);
      },
      getPrevMonth() { //上一月
        if (this.calendar.month != 1) {
          this.calendar.month = this.initDate(--this.calendar.month);
        } else {
          this.calendar.month = 12;
          this.calendar.year = --this.calendar.year;
        }
        this.getmonthDays();
        this.currentDay();
        this.$emit('on-click', 0);
      },
      getNextYear() {//上一年
        if (this.calendar.year != 1995) {
          this.calendar.year = this.initDate(++this.calendar.year);
        } else {
          this.calendar.year = ++this.calendar.year;
        }
        this.getmonthDays();
        this.currentDay();
        this.$emit('on-click', 0);
      },
      getNextMonth() { //下一月
        if (this.calendar.month < 12) {
          this.calendar.month = this.initDate(++this.calendar.month);
        } else {
          this.calendar.month = '01';
          this.calendar.year = ++this.calendar.year;
        }
        this.getmonthDays();
        this.currentDay();
        this.$emit('on-click', 1);
      },
      currentDay() { //获取今天,高亮显示今天
        let that = this;
        let date = new Date();
        let y = that.calendar.year;
        let m = that.calendar.month;

        if (y === date.getFullYear() && m == date.getMonth() + 1) { //如果是当年当月
          that.calendar.isDay = y + '-' + m + '-' + that.initDate(date.getDate()); //获取到今天的号数
        } else {
          that.calendar.isDay = -1;
        }
      },
      backToday() { //返回今天
        let that = this;
        let d = new Date();
        that.calendar.year = d.getFullYear();
        that.calendar.month = that.initDate(d.getMonth() + 1);
        that.currentDay();
        that.getmonthDays();
      }
    },
    watch: {
      value(val) {
      },
      nativeInputValue() {
        this.setNativeInputValue();
      }
    },
    created() {
      this.$on('inputSelect', this.select);
    },
    computed: {
      showClear() {
        return this.clearbtn&&(this.focused || this.hovering) && this.nativeInputValue;
      },
      nativeInputValue() {
        return this.value === null || this.value === undefined ? '' : String(this.value);
      },
    },
    mounted() {
      this.backToday();
      this.$emit('input', this.value);
      this.setNativeInputValue();
    }
  }
</script>
<style>
  .zmz-datepicker {

    margin: 0 auto;
  }

  .zmz-datepicker__months {
    width: 14.28%;
    display: inline-block;
  }
</style>
