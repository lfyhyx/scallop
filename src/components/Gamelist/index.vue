<template>
  <div class="game_body">
    <Loading v-if="isLoading" />
    <Scroller v-else>
      <ul>
        <li>
          <div>
            <span>上古卷轴5：天际</span>
            <span class="q"><span class="price">22.9</span>$</span>
          </div>
          <div class="company">
            <span>Bethesda Game Studios</span>
            <span>2010-10-24发售</span>
          </div>
          <div class="mod">
            <div>吸血鬼</div>
            <div>龙灾</div>
          </div>
        </li>
        <li>
          <div>
            <span>巫师3：狂猎</span>
            <span class="q"><span class="price">79.9</span>$</span>
          </div>
          <div class="company">
            <span>CD Projekt Red、Saber Interactive</span>
            <span>2015-12-10发售</span>
          </div>
          <div class="mod">
            <div>石之心</div>
            <div>血与酒</div>
          </div>
        </li>
        <li>
          <div>
            <span>鬼谷八荒</span>
            <span class="q"><span class="price">61</span>￥</span>
          </div>
          <div class="company">
            <span>鬼谷工作室</span>
            <span>2021-01-27发售</span>
          </div>
          <div class="mod">
            <div>荒古秘境</div>
            <div>嗜血印</div>
          </div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>

<script>
export default {
  name: "Gamelist",
};
</script>

<style>
#content .game_body {
  flex: 1;
  overflow: auto;
}
.game_body ul {
  padding: 20px;
}
.game_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.game_body div {
  margin-bottom: 10px;
}
.game_body .q {
  font-size: 11px;
  color: #f03d37;
}
.game_body .price {
  font-size: 18px;
}
.game_body .company {
  font-size: 13px;
  color: #666;
}
.game_body .company span:nth-of-type(2) {
  float: right;
}
.game_body .mod {
  display: flex;
}
.game_body .mod div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.game_body .mod div.or {
  color: #f90;
  border: 1px solid #f90;
}
.game_body .mod div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>