<template>
  <div class="game_body">
    <ul>
      <li>
        <div class="pic_show"><img src="/images/image01.jpg" /></div>
        <div class="info_list">
          <h2>原神</h2>
          <p>玩家评<span class="grade">9.2</span></p>
          <p>游戏公司：上海米哈游网络科技股份有限公司【miHoYo】</p>
          <p>下载次数：23997458次</p>
        </div>
        <div class="btn_download">下载</div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/image02.jpg" /></div>
        <div class="info_list">
          <h2>一梦江湖</h2>
          <p>玩家评<span class="grade">8.5</span></p>
          <p>游戏公司：杭州网易雷火科技有限公司【雷火】</p>
          <p>下载次数：54231856次</p>
        </div>
        <div class="btn_download">下载</div>
      </li>
      <li>
        <div class="pic_show"><img src="/images/image03.jpg" /></div>
        <div class="info_list">
          <h2>烟雨江湖</h2>
          <p>玩家评<span class="grade">9.8</span></p>
          <p>游戏公司：杭州西米科技有限公司【蓝鲸】</p>
          <p>下载次数：192748536次</p>
        </div>
        <div class="btn_download">下载</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Recommend",
};
</script>

<style scoped>
#content .game_body {
  flex: 1;
  overflow: auto;
}
.game_body ul {
  margin: 0 12px;
  overflow: hidden;
}
.game_body ul li {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px #e6e6e6 solid;
  padding-bottom: 10px;
}
.game_body .pic_show {
  width: 64px;
  height: 90px;
}
.game_body .pic_show img {
  width: 100%;
  height: 100%;
}
.game_body .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
}
.game_body .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.game_body .info_list p {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.game_body .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.game_body .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}
.game_body .btn_download,
.game_body .btn_pre {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
}
.game_body .btn_pre {
  background-color: #3c9fe6;
}
.game_body .pullDowm {
  margin: 0;
  padding: 0;
  border: none;
}
</style>