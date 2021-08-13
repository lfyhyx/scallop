<template>
  <div class="search_body">
      <div class="search_input">
          <div class="search_input_wrapper">
            <i class="iconfont icon-valentine_-search-love-find-heart"></i>
            <input type="text">
          </div>
      </div>
      <div class="search_result">
          <h3>单机/联网/Switch</h3>
          <ul>
              <li>
                  <div class="img"><img src="/images/image03.jpg"></div>
                  <div class="info">
                    <p><span>烟雨江湖</span><span>9.8</span></p>
                    <p>Misty rain</p>
                    <p>角色扮演，回合，武侠</p>
                    <p>2019-08-12</p>
                  </div>
              </li>
              <li>
                  <div class="img"><img src="/images/image01.jpg"></div>
                  <div class="info">
                    <p><span>原神</span><span>9.2</span></p>
                    <p>Genshin</p>
                    <p>角色扮演，二次元，3D</p>
                    <p>2020-09-15</p>
                  </div>
              </li>
              <li>
                  <div class="img"><img src="/images/image02.jpg"></div>
                  <div class="info">
                    <p><span>一梦江湖</span><span>8.5</span></p>
                    <p>A illusion</p>
                    <p>角色扮演，3D，武侠</p>
                    <p>2016-12-14</p>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Search'
}
</script>

<style>
#content .search_body{ flex:1; overflow:auto;}
.search_body .search_input{ padding: 8px 10px; background-color: #f5f5f5; border-bottom: 1px solid #e5e5e5;}
.search_body .search_input_wrapper{ padding: 0 10px; border: 1px solid #e6e6e6; border-radius: 5px; background-color: #fff; display: flex; line-height: 20px;}
.search_body .search_input_wrapper i{font-size: 16px; padding: 4px 0;}
.search_body .search_input_wrapper input{ border: none; font-size: 13px; color: #333; padding: 4px 0; outline: none; margin-left: 5px; width:100%;}
.search_body .search_result h3{ font-size: 15px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6;}
.search_body .search_result li{ border-bottom:1px #c9c9c9 dashed; padding: 10px 15px; box-sizing:border-box; display: flex;}
.search_body .search_result .img{ width: 60px; float:left; }
.search_body .search_result .img img{ width: 100%; }
.search_body .search_result .info{ float:left; margin-left: 15px; flex:1;}
.search_body .search_result .info p{ height: 22px; display: flex; line-height: 22px; font-size: 12px;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){ font-size: 18px; flex:1; }
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){ font-size: 16px; color:#fc7103;}
</style>