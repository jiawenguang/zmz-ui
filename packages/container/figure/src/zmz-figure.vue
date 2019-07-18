<template>
	<div class="zmz-container" v-if="type">
		
	</div>
	<section class="zmz-container" v-else>
		
	</section>
</template>

<script>
export default {
  name: 'ZmzContainer',
  props: {
    type:{
      type: Boolean,
      default: true
    },
    size: String,
    round: Boolean,
    loading: Boolean,
    disabled: Boolean,
	icon: String,
	autofocus:Boolean,
	plain:Boolean,
	active:Boolean
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style>
.zmz-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-color: #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.zmz-button-success{
	 background: #2eca7b;
	 color: #fff;
	 border-color:#2eca7b ;
}
.zmz-button-warning{
	background: #d89358;
	color: #fff;
	border-color:#d89358;
}
.zmz-button-confirm{
	background: #53a2f3;
	color: #fff;
	border-color:#53a2f3;
}
.zmz-button-error{
	background: #d85858;
	color: #fff;
	border-color:#d85858;
}
/* //hover */
.zmz-button:hover{
	background: #eaf3ee;
  border-color: #eadddd;
}
.zmz-button-success:hover{
	 background: #4edc94;
	 border-color:#4edc94 ;
}
.zmz-button-warning:hover{
	background: #e4a56e;
	border-color:#e4a56e;
}
.zmz-button-confirm:hover{
	background: #6eacea;
	border-color:#6eacea;
}
.zmz-button-error:hover{
	background: #e27676;
	border-color:#e27676;
}
.is_radius{
	 border-radius: 20px;
}
/* //is_plain */
.zmz-button-success.is_plain{
	background: #dcfded;
	color: #2eca7b;
	border-color: #2eca7b;
}
.zmz-button-warning.is_plain{
	background: #fff2e6;
	color: #dc8d4a;
	border-color: #ffa960;
}
.zmz-button-confirm.is_plain{
	background:#e0efff;
	color: #53a2f3;
	border-color:#53a2f3;
}
.zmz-button-error.is_plain{
	background:#fff0f0;
	color: #e27676;
	border-color:#fdb9b9;
}
/* //is_plain:hover */
.zmz-button-success.is_plain:hover{
	background: #2eca7b;
	color: #fff;
	border-color: #2eca7b;
}
.zmz-button-warning.is_plain:hover{
	background: #d89358;
	color: #fff;
	border-color: #d89358;
}
.zmz-button-confirm.is_plain:hover{
	background:#53a2f3;
	color: #fff;
	border-color:#53a2f3;
}
.zmz-button-error.is_plain:hover{
	background:#d85858;
	color: #fff;
	border-color:#d85858;
}
/* //is_disabled */
.zmz-button.is_disabled{
	background: #f1f1f1;
    border-color: #f1f1f1;
	color: #b3b3b3;
    cursor: not-allowed;
}
.zmz-button-success.is_disabled{
	background: #81e0b0;
	color: #fff;
	border-color: #81e0b0;
	cursor: not-allowed;
}
.zmz-button-warning.is_disabled{
	background: #f1c39c;
	color: #fff;
	border-color: #f1c39c;
	cursor: not-allowed;
}
.zmz-button-confirm.is_disabled{
	background:#aed6ff;
	color: #fff;
	border-color:#aed6ff;
	cursor: not-allowed;
}
.zmz-button-error.is_disabled{
	background:#f1b5b5;
	color: #fff;
	border-color:#f1b5b5;
	cursor: not-allowed;
}
/* //.is_plain.is_disabled */
.zmz-button.is_plain.is_disabled{
	background: #f1f1f1;
    border-color: #f1f1f1;
	color: #b3b3b3;
    cursor: not-allowed;
}
.zmz-button-success.is_plain.is_disabled{
	background: #dcfded;
    color: #88e2b4;
    border-color: #abf7d1;
	cursor: not-allowed;
}
.zmz-button-warning.is_plain.is_disabled{
	background: #fff2e6;
    color: #f7b985;
    border-color: #fbdcc3;
	cursor: not-allowed;
}
.zmz-button-confirm.is_plain.is_disabled{
	background: #e0efff;
    color: #8dc2f9;
    border-color: #b3cce6;
	cursor: not-allowed;
}
.zmz-button-error.is_plain.is_disabled{
	background: #fff0f0;
    color: #f9b0b0;
    border-color: #f7dede;
	cursor: not-allowed;
}
/* //.is_active */
.zmz-button.is_active:active{
	background: #f1f1f1;
    border-color: #f1f1f1;
	color: #b3b3b3;
}
.zmz-button-success.is_active:active{
	background: #1cb366;
	border-color: #1cb366;
    color: #fff;
}
.zmz-button-warning.is_active:active{
	background: #ca8245;
	border-color: #ca8245;
	color: #fff;
}
.zmz-button-confirm.is_active:active{
	background: #3a8ee4;
	border-color: #3a8ee4;
    color: #fff;
}
.zmz-button-error.is_active:active{
	background: #d04949;
	border-color: #d04949;
	color: #fff;
}
</style>

