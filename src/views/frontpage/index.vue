<template>
  <div id="main">
    <Header />
    <div id="content">
      <div class="game_menu">
        <router-link
          to="/frontpage/gametype"
          custom
          v-slot="{ navigate, isActive }"
        >
          <div
            class="game_type"
            @click="navigate"
            :class="[isActive && 'router-link-active']"
          >
            <span>竞技</span><i class="iconfont icon-huabanfuben"></i></div
        ></router-link>
        <div class="game_list">
          <router-link
            to="/frontpage/recommend"
            custom
            v-slot="{ navigate, isActive }"
          >
            <div
              class="game_recommend"
              @click="navigate"
              :class="[isActive && 'router-link-active']"
            >
              推荐
            </div></router-link
          >
          <router-link
            to="/frontpage/comingsoon"
            custom
            v-slot="{ navigate, isActive }"
          >
            <div
              class="game_recommend"
              @click="navigate"
              :class="[isActive && 'router-link-active']"
            >
              预约
            </div></router-link
          >
        </div>
        <router-link
          to="/frontpage/search"
          custom
          v-slot="{ navigate, isActive }"
        >
          <div
            class="search_entry"   
            @click="navigate"
            :class="[isActive && 'router-link-active']"
          >
            <i class="iconfont icon-valentine_-search-love-find-heart"></i></div
        ></router-link>
      </div>
      <router-view v-slot="{ Component }">
        <keep-alive include="Gametype,Recommend,Leaderboard,Search">
          <component class="view" :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <Tabnav />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Tabnav from "@/components/Tabnav";

export default {
  name: "Frontpage",
  components: {
    Header,
    Tabnav,
  },
};
</script>

<style>
.icon-huabanfuben:before {
  display: inline-block;
  transform: rotate(-90deg);
}
#content .game_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
}
.game_menu .game_type {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.game_menu .game_type.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.game_menu .game_list {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.game_menu .game_recommend {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.game_menu .game_recommend.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.game_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.game_menu .search_entry.router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.game_menu .search_entry i {
  font-size: 24px;
  color: red;
}
.slide-enter-active {
  animation: 13s detailMove;
}
@keyframes detailMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>