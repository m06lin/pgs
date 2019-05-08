<template>
  <b-navbar id="navbar" class="d-flex justify-content-between" type="dark" variant="dark">  
    <b-navbar-nav class="px-2">
      <b-navbar-brand>
        <img src="../assets/pssGroupLogo.png" draggable="false" class="rounded" alt="logo">
      </b-navbar-brand>
      <b-nav-item to="/monitor">主畫面</b-nav-item>
      <b-nav-item to="/setting">設定</b-nav-item>
      <b-nav-item to="/logsContent">日誌</b-nav-item>   
    </b-navbar-nav>
    <b-navbar-nav>
      <b-nav-form>
        <b-form-input class="mr-2" placeholder="車牌 or 車格"></b-form-input>
        <b-button style="margin-left:-50px"><i class="oi oi-magnifying-glass"></i></b-button>
      </b-nav-form>
      <div class="my-2 ml-4" style="border:1px solid rgba(211, 211, 211, 0.6);"></div>
      <b-nav-item-dropdown class="user-dropdown">
        <template slot="button-content">
          {{userName}}
        </template>
        <b-dropdown-item>個人資訊</b-dropdown-item>
        <b-dropdown-item @click="logoutEvent()">登出</b-dropdown-item>
        <b-dropdown-item @click="logoutExitEvent()">關閉</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.state.User.userData.username;
    },
  },
  methods: {
    logoutEvent() {
      this.$store.dispatch('USER_CLEAR');
      this.$electron.ipcRenderer.send('logout');
      this.$router.push({ name: 'login' });
    },
    logoutExitEvent() {
      this.$store.dispatch('USER_CLEAR');
      this.$electron.ipcRenderer.send('exit');
    },
  },
};
</script>

<style>
  .navbar {
    height: 60px;
  }
  .navbar-brand{
    font-size: 1.8rem !important;
  }
  .nav-item{
    font-size: 1.5rem !important;
  }
  .nav-link{
    color:rgb(211, 211, 211) !important;
  }
  .nav-link:hover{
    color:white !important;
  }
  .router-link-active{
    color:white !important;
  }
  .btn-secondary{
    color: rgb(51, 51, 51) !important;
    background-color: white !important;
    border-color: rgb(163, 163, 163) !important;
  }
  .btn-secondary:hover{
    color: rgb(0, 0, 0) !important;
  }
</style>
