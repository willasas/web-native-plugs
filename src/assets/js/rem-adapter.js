// 创建ID为RSRem的元素节点
function createEl(eleID, ReFontSize) {
  var RSRem = document.createElement('div');
  RSRem.setAttribute('id', eleID);
  RSRem.setAttribute('data-size', ReFontSize);
  document.body.appendChild(RSRem);
}

// RSRem对象，用于设置和获取页面字体大小
var RSRem = {
  el: document.getElementById('RSRem'), // 获取id为RSRem的元素节点
  defaultSize: 750, // 默认字体大小为750
  // 设置字体大小
  setSize: function (size) {
    this.size = parseInt(size) || this.defaultSize; // 将传入的size转换为整数，若为空则使用默认字体大小
    this.remReSize(); // 调用remReSize方法重新设置字体大小
  },
  // 重新设置字体大小
  remReSize: function () {
    var t = (document.documentElement.clientWidth / this.size).toFixed(2); // 计算字体大小比例
    document.documentElement.style.setProperty('font-size', 100 * t + 'px'); // 设置页面字体大小
  },
  // 初始化方法
  init: function () {
    var size = this.defaultSize; // 默认字体大小
    if (this.el) {
      // 如果存在id为RSRem的元素节点
      size = parseInt(this.el.getAttribute('data-size') || this.defaultSize); // 获取元素节点data-size属性值，若为空则使用默认字体大小
      console.log('font-size: ' + size);
    }
    this.setSize(size); // 设置字体大小

    // 监听窗口大小变化事件
    window.addEventListener(
      'resize',
      function () {
        RSRem.remReSize(); // 调用remReSize方法重新设置字体大小
      },
      false
    );
    // 监听页面加载事件
    window.addEventListener(
      'load',
      function () {
        RSRem.remReSize(); // 调用remReSize方法重新设置字体大小
      },
      false
    );
  },
};
RSRem.init(); // 初始化RSRem对象

// 判断设备类型，pc表示pc端，wap表示移动端
(function () {
  var headDom = document.getElementsByTagName('head')[0];
  if (getDevice() == 'pc') {
    // 如果设备类型为pc
    document.addEventListener('DOMContentLoaded', createEl('RSRem', '1920'));
    RSRem.init(); // 初始化RSRem对象
    // headDom.insertAdjacentHTML('beforeend',
    //     '<link href="css/index.css" rel="stylesheet" type="text/css" />'); // 在页面中插入index.css样式表
  } else {
    // 如果设备类型为移动端
    document.addEventListener('DOMContentLoaded', createEl('RSRem', '750'));
    RSRem.init();
    // headDom.insertAdjacentHTML('beforeend',
    //     '<link href="css/indexm.css" rel="stylesheet" type="text/css" />'); // 在页面中插入indexm.css样式表
  }
})();

// 获取设备类型
function getDevice() {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    return 'wap'; // 设备类型为移动端
  } else {
    return 'pc'; // 设备类型为pc端
  }
}
