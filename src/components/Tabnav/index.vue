<template>
  <footer id="footer">
    <ul>
      <router-link to="/frontpage" custom v-slot="{ navigate,isActive }">
        <li @click="navigate" :class="[isActive && 'router-link-active']" role="link">
          <i class="iconfont icon-movie"></i>
          <p>首页</p>
        </li>
      </router-link>
      <router-link to="/games" custom v-slot="{ navigate,isActive }">
        <li @click="navigate" :class="[isActive && 'router-link-active']" role="link">
          <i class="iconfont icon-cinema"></i>
          <p>游戏</p>
        </li>
      </router-link>
      <router-link to="/mine" custom v-slot="{ navigate,isActive }">
        <li @click="navigate" :class="[isActive && 'router-link-active']" role="link">
          <i class="iconfont icon-mine"></i>
          <p>个人</p>
        </li>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "tabnav",
};
</script>

<style scoped>
#footer {
  width: 100%;
  height: 50px;
  background: white;
  border-top: 2px #ebe8e3 solid;
  position: fixed;
  left: 0;
  bottom: 0;
}
#footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#footer ul li {
  flex: 1;
  height: 40px;
}
#footer ul li.router-link-active{
  color: red;
}
#footer ul i {
  font-size: 20px;
}
#footer ul p {
  font-size: 12px;
  line-height: 18px;
}
</style>