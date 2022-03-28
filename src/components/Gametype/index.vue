<template>
  <div class="game_type_body">
    <div class="game_type_list">
      <div class="game_type_hot">
        <h2>游戏类型</h2>
        <ul class="clearfix">
          <li>竞技</li>
          <li>回合</li>
          <li>角色扮演</li>
          <li>策略</li>
          <li>棋牌</li>
          <li>挂机</li>
          <li>音乐</li>
          <li>赛车</li>
          <li>跑酷</li>
          <li>经营</li>
          <li>冒险</li>
          <li>射击</li>
          <li>3D</li>
          <li>动作</li>
          <li>生存</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "game_type",
  mounted() {
    this.axios.get('/api/cityList').then((res)=>{
      console.log(res);
    })
  },
};
</script>

<style>
#content .game_type_body{display: flex; width:100%; top: 0; bottom: 0;}
.game_type_body .game_type_list{ flex:1; overflow: auto; background: #FFF5F0;}
.game_type_body .game_type_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.game_type_body .game_type_hot{ margin-top: 20px;}
.game_type_body .game_type_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.game_type_body .game_type_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
</style>