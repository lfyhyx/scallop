<template>
  <div id="main">
    <Header title="scallop游戏" />
     <div id="content">
            <div class="game_menu">
				<div class="company_switch">
					工作室 <i class="iconfont icon-huabanfuben"></i>
				</div>
				<div class="type_swtich">
					类型 <i class="iconfont icon-huabanfuben"></i>
				</div>
				<div class="language_switch">
					国家 <i class="iconfont icon-huabanfuben"></i>
				</div>
			</div>
            <Gamelist />
        </div>
    <Tabnav />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Tabnav from "@/components/Tabnav";
import Gamelist from "@/components/Gamelist";
export default {
  name: "ScallopGame",
  components: {
    Header,
    Gamelist,
    Tabnav,
  },
};
</script>

<style>
#content .game_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
.icon-huabanfuben:before {
  display: inline-block;
  transform: rotate(-90deg);
}
</style>