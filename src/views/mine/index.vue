<template>
  <div id="main">
    <Header  title="我的scallop" />
    <div id="content">
      <Login />
    </div>
    <Tabnav />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Tabnav from "@/components/Tabnav";
import Login from "@/components/Login";

export default {
  name: "Mine",
  components: {
    Header,
    Login,
    Tabnav,
  },
};
</script>

<style>
</style>