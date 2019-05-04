<template>
  <b-navbar id="navbar" class="d-flex justify-content-between" type="dark" variant="dark">  
    <b-navbar-nav class="px-2">
      <b-navbar-brand>
        <img src="../assets/pssGroupLogo.png" draggable="false" class="rounded" alt="logo">
      </b-navbar-brand>
      <b-nav-item to="/monitor">主頁監控</b-nav-item>
      <b-nav-item-dropdown text="設定功能">
        <b-dropdown-item href="#">地圖</b-dropdown-item>
        <b-dropdown-item href="#">車位</b-dropdown-item>
        <b-dropdown-item href="#">監控器</b-dropdown-item>
        <b-dropdown-item href="#">日誌</b-dropdown-item>
      </b-nav-item-dropdown>    
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
  .dropdown-menu{
    background-color: #343a40 !important;
    padding: 0;
    margin: 1px 0 0 0;
    font-size: 1.5rem;
    border-radius: 0;
  }
  .dropdown-item {
    color:rgb(211, 211, 211) !important;
    border-bottom: 1px solid rgb(163, 163, 163);
  }
  .dropdown-item:hover {
    background-color: #757b81 !important;
    color:rgb(255, 255, 255) !important;
    border-top: 1px solid rgb(100, 100, 100);
  }
  .dropdown-item:active {
    background-color: rgb(141, 141, 141) !important;
    color: #2a2a2a !important;
  }

  .user-dropdown{
    width: 160px;
    text-align: center;
  }
  /* .show{
    margin-top: 0;
  } */
</style>
