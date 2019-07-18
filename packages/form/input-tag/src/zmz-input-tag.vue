<template>
  <div class="zmz-input-tag" ref="zmz-input-tag" :class="{'zmz-input-tag--disabled':disabled}">
    <div class="zmz-input-tag__box" ref="zmz-input-tag__box">
      <div class="zmz-input-tag__item" v-for="(item,index) in tagsArray" v-if="tagsArray.length>0"><span>{{item.text}}</span><i class="zmz-icon-close-f" @click="disabled?'':deleteTag(index,item)"></i></div>
    </div>
    <input class="zmz-input-tag__input" @focus="handleFocus" ref="zmz-input-tag__input" :disabled='disabled' v-model="value" 
      @blur="handleBlur" />
  </div>
</template>
<script>
export default {
  name: 'ZmzInputTag',
  props: {
    tagArray: {
      type: Array,
      default: () => {
        return []
      }
    },
    disabled: {
      type:Boolean,
      default:false
    },
    tagLength: {
       type:Number,
       default:0
    }
  },
  data() {
    return {
      tagsArray:this.tagLength&&this.tagArray.length>this.tagLength?this.tagArray.splice(this.tagLength):this.tagArray,
      oneArray: {},
      value: '',
      hovering: false,
      i: this.tagArray&&this.tagArray.length>0?this.tagArray[this.tagArray.length - 1].id:0
    };
  },
  methods: {
    handleBlur() {
      var reg  = /\S/;
      console.log(this.tagLength)
      if(this.tagLength&&this.tagLength>0){
        if(this.tagsArray.length>=this.tagLength){
           this.tagsArray.splice(this.tagLength)
           this.$emit('addTag',this.oneArray)
        }else if(this.tagsArray.length<this.tagLength){
          if(reg.test(this.value)){
            this.oneArray.text = this.value
            this.oneArray.id = this.i++
            this.tagsArray.push(this.oneArray)
            this.value = ''
            this.$emit('addTag',this.oneArray)
          }
        }
      }else{
        if(reg.test(this.value)){
          console.log(this.tagsArray)
          this.oneArray = {
            text:this.value,
            id: this.i++
          }
          this.tagsArray.push(this.oneArray)
          this.value = ''
          this.$emit('addTag',this.oneArray)
        }
      }
      
    },
    handleFocus() {
      this.$emit('inputFocus')
    },
    deleteTag(index,item){
      this.tagsArray.splice(index,1);
      this.$emit('deleteTag',item)
    },
    tagWidth(){
      var boxW = parseInt(this.$refs['zmz-input-tag__box'].clientWidth);
      var tagW = parseInt(this.$refs['zmz-input-tag'].clientWidth);
      var inputW = parseInt(this.$refs['zmz-input-tag__input'].clientWidth);
      if((tagW - boxW )>0){
        this.$refs['zmz-input-tag__input'].style.width = (tagW - boxW-1) +'px'
      }else{
        this.$refs['zmz-input-tag__input'].style.width = '100%'
      }
    },
  },
  watch: {
    tagsArray(val) {
      this.$nextTick(() => {   
       this.tagWidth();
      });
    },
  },
  created() {
    
  },
  computed: {
  },
  mounted() {
    this.tagWidth();
  }
}
</script>
