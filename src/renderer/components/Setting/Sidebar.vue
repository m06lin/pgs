<template>
  <aside class="setting-sidebar monitor-sidebar-bg">
    <b-nav vertical class="sidebar-nav">
        <b-nav-item to="/setting/mapContent" active>
            <span class="sidebar-icon"><i class="oi oi-map"></i></span>
            <span class="sidebar-title">地圖</span>
        </b-nav-item>
        <b-nav-item to="/setting/parkingContent">
            <span class="sidebar-icon"><i class="oi oi-map-marker"></i></span>
            <span class="sidebar-title">車位</span>
        </b-nav-item>
        <b-nav-item to="/setting/watchdogContent">
            <span class="sidebar-icon"><i class="oi oi-dial"></i></span>
            <span class="sidebar-title">監控器</span>
    </b-nav-item>
  </b-nav>
  </aside>
</template>

<script>
export default {
  computed: {},
  methods: {},
};
</script>

<style>


.setting-sidebar .sidebar-nav { 
    width: 100%;
    margin: 0;
    padding: 10%;
    list-style: none;
}
.setting-sidebar .nav{
    display: -webkit-box;
}

.setting-sidebar .sidebar-nav li a{
    padding-left: 10%;
    display: block;
    font-size: 1.5rem;
    font-weight: bold;
    color: rgb(128, 127, 127);
    text-decoration: none;
}
.setting-sidebar .sidebar-nav li a:hover{
    color: rgb(0, 0, 0);
}

.setting-sidebar .router-link-active{
    color: rgb(0, 0, 0) !important ;
}

.setting-sidebar .sidebar-icon {
    margin-right: 5%; 
}
.setting-sidebar .oi {
    width: 30px;
}

</style>
