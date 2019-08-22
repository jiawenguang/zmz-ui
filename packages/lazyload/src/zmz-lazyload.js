let Lazyload = (options) => {}

Lazyload.install = function(Vue, options) {

  if ((typeof options) == 'object' && Object.keys(options).length > 0 && options.type == 'lazyload') {

  }
  if (!Array.prototype.remove) {
    Array.prototype.remove = function(item) {
      if (!this.length) return
      var index = this.indexOf(item);
      if (index > -1) {
        this.splice(index, 1);
        return this
      }
    }
  }
  // 默认值图片
  var loadingImage = options.loadingImage || '';
  var boxId = options.boxId || false
  var errorImage = options.errorImage || 'http://www.kpcx179.com/wximages/jingquliebiao.png';
  // 默认离可视区10px时加载图片
  var distanece = options.scrollDistance || 100;
  // 收集未加载的图片元素和资源
  var listenList = [];
  // 收集已加载的图片元素和资源
  var imageCacheList = [];
  // console.log(Array)
  // console.log()
  // console.log(typeof options)
  // console.log(options)
  //是否已经加载过了
  const isAlredyLoad = (imageSrc) => {
    if (imageCacheList.indexOf(imageSrc) > -1) {
      return true;
    } else {
      return false;
    }
  }
  //检测图片是否可以加载，如果可以则进行加载
  const isCanShow = (item,binding) => {
    var ele = item.ele;
    var src = item.src;
    var errorImages = ''
    var windowHeight = ''
    if((typeof binding.value) == 'object'){
      errorImages = binding.value.error?binding.value.error:'';
    }else{
      errorImages = errorImage
    }
    //图片距离页面顶部的距离(注意当前必须要有高度不然无法获取到top值)
    if((typeof binding.value)=='object'&&binding.value.boxId){
      windowHeight  = document.getElementById('boxId').offsetHeight;
    }else{
      if(boxId){
        windowHeight = document.getElementById('boxId').offsetHeight;
      }else{
        windowHeight = window.innerHeight
      }
    }
    var top = ele.getBoundingClientRect().top;
    //页面可视区域的高度
    // top - distance 距离可视区域还有distance像素
    if (top - distanece < windowHeight) {
      var image = new Image();
      image.src = src;
      image.onload = function() {
        ele.src = src;
        imageCacheList.push(src);
        listenList.remove(item);
      }
      image.onerror = function() {
        ele.src = errorImages;
        imageCacheList.push(src);
        listenList.remove(item);
      }
      return true;
    } else {
      return false;
    }
  };
  const onListenScroll = (binding) => {
    if(binding.value.boxId){
      document.getElementById("boxId").onscroll = function() {
        var length = listenList.length;
        for (let i = 0; i < length; i++) {
          isCanShow(listenList[i],binding);
        }
      };
    }else{
      window.addEventListener('scroll', function() {
        var length = listenList.length;
        for (let i = 0; i < length; i++) {
          isCanShow(listenList[i],binding);
        }
      })
    }
  }

  //Vue 指令最终的方法
  const addListener = (ele, binding) => {
    //绑定的图片地址
    var imageSrc = '';
    if((typeof binding.value) == 'object'){
      imageSrc = binding.value.src;
    }else{
      imageSrc = binding.value;
    }
    // 防止重复加载。如果已经加载过，则无需重新加载，直接将src赋值
    if (isAlredyLoad(imageSrc)) {
      ele.src = imageSrc;
      return false;
    }

    var item = {
      ele: ele,
      src: imageSrc
    }

    //图片显示默认的图片
    if((typeof binding.value) == 'object'){
      ele.src = binding.value.loading?binding.value.loading:'';
    }else{
      ele.src = loadingImage;
    }
    //再看看是否可以显示此图片
    if (isCanShow(item,binding)) {
      return
    }
    //否则将图片地址和元素均放入监听的lisenList里
    listenList.push(item);
    //然后开始监听页面scroll事件
    onListenScroll(binding);
  }
   Vue.directive('zmzLazyload-obj', {
    inserted:addListener,
    updated:addListener
  })
  Vue.directive('zmzLazyload', {
    inserted: addListener,
    updated: addListener
  })
}
export default Lazyload
