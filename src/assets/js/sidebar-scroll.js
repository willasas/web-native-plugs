// dom and style
/*
    section {
      width: 100%;
      margin: 0 auto;
      position: relative;
    }

    .sec1{
      height: 10rem;
      background: #ccc;
    }

    .sec2{
      height: 10rem;
      background: #755252;
    }

    .sec3{
      height: 10rem;
      background: #692b2b;
    }

    .sec4{
      height: 10rem;
      background: #5e1f1f;
    }

    .sec5{
      height: 10rem;
      background: #991313;
    }

    .sec6{
      height: 10rem;
      background: #788ada;
    }

    .sec7{
      height: 10rem;
      background: #163c83;
    }

    .sec8{
      height: 10rem;
      background: #3b259c;
    }

    .sec9{
      height: 10rem;
      background: #850404;
    }

    .sec10{
      height: 10rem;
      background: #ccc;
    }

    .side_nav {
      position: fixed;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      transition: 0.3s ease all;
      z-index: 999;
      display: block;
    }

    .side_nav.nav-show {
      right: -3.2rem;
    }
    
    .side_nav a {
      display: block;
      width: 2.8rem;
      margin-left: auto;
      height: .81rem;
      position: relative;
      background: url(//game.gtimg.cn/images/lol/act/a20231207winterblessed/nav_bg.png) no-repeat center/ 7.01rem 8.40rem;
    }

    .side_nav .item.active{
      transition: background-position .2s ease-out, color .2s ease-out;
    }

    .side_nav .item1 {
      background-position: -3.8rem -0.09rem;
    }

    .side_nav .item1:hover, .side_nav .item1.active {
      background-position: -0.1rem -0.07rem;
    }

    .side_nav .item2 {
      background-position: -3.8rem -0.91rem;
    }

    .side_nav .item2:hover, .side_nav .item2.active {
      background-position: -0.1rem -0.91rem;
    }

    .side_nav .item3 {
      background-position: -3.8rem -1.75rem;
    }

    .side_nav .item3:hover, .side_nav .item3.active {
      background-position: -0.1rem -1.72rem;
    }

    .side_nav .item4 {
      background-position: -3.8rem -2.58rem;
    }

    .side_nav .item4:hover, .side_nav .item4.active {
      background-position: -0.1rem -2.56rem;
    }

    .side_nav .item5 {
      background-position: -3.8rem -3.41rem;
    }

    .side_nav .item5:hover, .side_nav .item5.active {
      background-position: -0.1rem -3.39rem;
    }

    .side_nav .item6 {
      background-position: -3.8rem -4.24rem;
    }

    .side_nav .item6:hover, .side_nav .item6.active {
      background-position: -0.1rem -4.22rem;
    }

    .side_nav .item7 {
      background-position: -3.8rem -5.09rem;
    }

    .side_nav .item7:hover, .side_nav .item7.active {
      background-position: -0.1rem -5.05rem;
    }

    .side_nav .item8 {
      background-position: -3.8rem -5.89rem;
    }

    .side_nav .item8:hover, .side_nav .item8.active {
      background-position: -0.1rem -5.88rem;
    }

    .side_nav .item9 {
      background-position: -3.8rem -6.71rem;
    }

    .side_nav .item9:hover, .side_nav .item9.active {
      background-position: -0.1rem -6.71rem;
    }

    .side_nav .item10 {
      background-position: -3.8rem -7.51rem;
    }

    .side_nav .item10:hover, .side_nav .item10.active {
      background-position: -0.1rem -7.54rem;
    }
  </style>

  <div class="wrap">
    <div class="section sec1">
      <div class="main">

      </div>
    </div>
    <div class="section sec2">
      <div class="main">
        
      </div>
    </div>
    <div class="section sec3">
      <div class="main">
        
      </div>
    </div>
    <div class="section sec4">
      <div class="main">
        
      </div>
    </div>
    <div class="section sec5">
      <div class="main">
        
      </div>
    </div>
    <div class="section sec6">
      <div class="main">

      </div>
    </div>
    <div class="section sec7">
      <div class="main">
        
      </div>
    </div>
    <div class="section sec8">
      <div class="main">
        
      </div>
    </div>
    <div class="section sec9">
      <div class="main">
        
      </div>
    </div>
  </div>

  <div class="side_nav nav-show">
    <a href="javascript:;" data-index="0" class="item item1 active"></a>
    <a href="javascript:;" data-index="1" class="item item2"></a>
    <a href="javascript:;" data-index="2" class="item item3"></a>
    <a href="javascript:;" data-index="3" class="item item4"></a>
    <a href="javascript:;" data-index="4" class="item item5"></a>
    <a href="javascript:;" data-index="5" class="item item6"></a>
    <a href="javascript:;" data-index="6" class="item item7"></a>
    <a href="javascript:;" data-index="7" class="item item8"></a>
    <a href="javascript:;" data-index="8" class="item item9"></a>
  </div>
*/

/*
 * 侧边栏导航
 */
// 获取DOM元素并存储为变量
const wraps = document.querySelectorAll('.wrap');
const sideNavItemElems = document.querySelectorAll('.side_nav .item');
const sideNav = document.querySelector('.side_nav');

// 节流函数实现
function throttle(func, delay) {
  let timeoutId;
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall < delay) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    } else {
      func.apply(this, args);
      lastCall = now;
    }
  };
}

// 用于添加和删除class
function toggleClass(element, className, add) {
  if (add) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}

// 初始化总高度和缓存每个section的顶部偏移量
function initOffsets() {
  let totalHeight = 0;
  const eloffsetH = Array.from({ length: 9 }, (_, idx) => {
    const selector = `.sec${idx + 1}`;
    totalHeight += document.querySelector(selector).clientHeight;
    return document.querySelector(selector).offsetTop;
  });

  // 计算平均高度
  const averageHeight = Math.floor(totalHeight / sideNavItemElems.length - 2);

  return { totalHeight, averageHeight, eloffsetH };
}

const { totalHeight, averageHeight, eloffsetH } = initOffsets();

// let lastActiveIndex = null;
let lastActiveIndex = 0;
const handleScrollThrottled = throttle((event) => {
  const winHei = window.pageYOffset;

  if (winHei < 650) {
    sideNav.classList.add('nav-show');
  } else {
    sideNav.classList.remove('nav-show');
  }

  for (let i = 0; i < eloffsetH.length - 1; i++) {
    if (
      winHei > eloffsetH[i] - averageHeight / 3 &&
      winHei <= eloffsetH[i + 1]
    ) {
      if (lastActiveIndex !== i) {
        // 在for循环内部使用
        toggleClass(sideNavItemElems[lastActiveIndex], 'active', false);
        toggleClass(sideNavItemElems[i], 'active', true);
        lastActiveIndex = i;
        break;
      }
    }
  }

  // 当用户滚动到底部时，激活最后一个item
  if (
    winHei >=
    document.documentElement.scrollHeight -
      window.innerHeight -
      averageHeight / 3
  ) {
    if (lastActiveIndex !== eloffsetH.length - 1) {
      sideNavItemElems[eloffsetH.length - 1].classList.add('active');
      if (lastActiveIndex !== null) {
        sideNavItemElems[lastActiveIndex].classList.remove('active');
      }
      lastActiveIndex = eloffsetH.length - 1;
    }
  }
}, 100); // 设置节流时间间隔（例如100毫秒）

window.addEventListener('scroll', handleScrollThrottled);

// 点击事件处理
sideNavItemElems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    const eloffsetH = [
      document.querySelector('.sec1').offsetTop,
      document.querySelector('.sec2').offsetTop + 200,
      document.querySelector('.sec3').offsetTop + 150,
      document.querySelector('.sec4').offsetTop + 200,
      document.querySelector('.sec5').offsetTop + 200,
      document.querySelector('.sec6').offsetTop + 150,
      document.querySelector('.sec7').offsetTop + 200,
      document.querySelector('.sec8').offsetTop + 150,
      document.querySelector('.sec9').offsetTop + 50,
    ];

    window.scrollTo({
      top: eloffsetH[idx],
      behavior: 'smooth',
    });
  });
});
