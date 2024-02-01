/*dom and style*/
/*
    .page-wrap{
      position: relative;
      overflow: hidden;
      margin: 0 auto;
      width: 100%;
      height: auto;
    }
    
    .fixed{
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
    }

    .nav-menu-list{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
      }
  
      .nav-info{
        margin: 0 auto;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 720px;
        width: 100%;
        height: 80px;
      }
  
      .nav-item{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 80px;
        background: rgba(0,0,0,0.5);
      }
  
      .nav-item.active{
        background: rgba(255,255,255,0.8);
      }
  
      .nav-item.active a{
        color: #000;
      }
  
      .nav-item a{
        display: block;
        width: 100%;
        height: 100%;
        font-size: 20px;
        text-align: center;
        color: #fff;
        line-height: 80px;
      }
  
      .mask{
        position: absolute;
        width: 120px;
        height: 80px;
        border: 1px solid #FFFFFF;
        background-color: #545871;
        box-sizing: border-box;
        z-index: 10;
        left: calc(0% - 6px);
        transition: all 0.3s ease-in-out;
      }
  
      .wrap{
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        width: 100%;
        height: 100vh;
      }
  
      .section{
        position: relative;
        margin: 0 auto;
        height: 100vh;
      }
  
      .main{
        position: relative;
        margin: 0 auto;
      }
  
      .text{
        width: 100%;
        height: 100%;
        font-size: 40px;
        text-align: center;
        font-weight: bold;
        color: #fff;
        line-height: 1;
      }
  
      .sec1 {
        background: rgb(0, 174, 255);
        width: 100%;
      }
  
      .sec2 {
        background: rgb(179, 163, 23);
        width: 100%;
      }
  
      .sec3 {
        background: rgb(255, 0, 43);
        width: 100%;
      }
  
      .sec4 {
        background: rgb(55, 0, 255);
        width: 100%;
      }
  
      .sec5 {
        background: rgb(204, 0, 255);
        width: 100%;
      }
  
      .sec6 {
        background: rgb(9, 255, 0);
        width: 100%;
      }
    </style>
  </head>
  
  <body>
    <div class="page-wrap">
      <div class="nav-menu-list fixed">
        <ul class="nav-info">
          <li class="nav-item" data-widget="nav">
            <a href="#sec1">菜单1</a>
          </li>
          <li class="nav-item" data-widget="nav">
            <a href="#sec2">菜单2</a>
          </li>
          <li class="nav-item" data-widget="nav">
            <a href="#sec3">菜单3</a>
          </li>
          <li class="nav-item" data-widget="nav">
            <a href="#sec4">菜单4</a>
          </li>
          <li class="nav-item" data-widget="nav">
            <a href="#sec5">菜单5</a>
          </li>
          <li class="nav-item" data-widget="nav">
            <a href="#sec6">菜单6</a>
          </li>
        </ul>
      </div>
  
      <div class="wrap">
        <div class="section sec1" id="sec1" data-widget="content">
          <div class="main">
            <p class="text">菜单1对应的内容部分</p>
          </div>
        </div>
        <div class="section sec2" id="sec2" data-widget="content">
          <div class="main">
            <p class="text">菜单2对应的内容部分</p>
          </div>
        </div>
        <div class="section sec3" id="sec3" data-widget="content">
          <div class="main">
            <p class="text">菜单3对应的内容部分</p>
          </div>
        </div>
        <div class="section sec4" id="sec4" data-widget="content">
          <div class="main">
            <p class="text">菜单4对应的内容部分</p>
          </div>
        </div>
        <div class="section sec5" id="sec5" data-widget="content">
          <div class="main">
            <p class="text">菜单5对应的内容部分</p>
          </div>
        </div>
        <div class="section sec6" id="sec6" data-widget="content">
          <div class="main">
            <p class="text">菜单6对应的内容部分</p>
          </div>
        </div>
      </div>
    </div>
*/

const tableSwitch = (parentEle, parentOptions, className) => {
  const parent = document.querySelector(parentEle);
  const options = parent.querySelectorAll(parentOptions);
  options.forEach((item, idx) => {
    console.log(idx);
    item.addEventListener('click', () => {
      // 移除同级已激活项的 'active' 类
      parent.querySelector('.' + className)?.classList.remove(className);
      // 为当前点击的项添加 'active' 类
      item.classList.add(className);
    });
  });
}
tableSwitch('.nav-info','li','active')