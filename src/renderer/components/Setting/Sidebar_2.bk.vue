<template>
  <aside id="setting-sidebar" class="monitor-sidebar-bg">
      <ul id="sidemenu" class="sidebar-nav">
        <li>
            <a href="#/setting/mapContent">
                <span class="sidebar-icon"><i class="oi oi-map"></i></span>
                <span class="sidebar-title">地圖</span>
            </a>
        </li>
        <li>
            <a href="#/setting/parkingContent">
                <span class="sidebar-icon"><i class="oi oi-map-marker"></i></span>
                <span class="sidebar-title">車位</span>
            </a>
        </li>
        <li>
            <a href="#/setting/watchdogContent">
                <span class="sidebar-icon"><i class="oi oi-dial"></i></span>
                <span class="sidebar-title">監控器</span>
            </a>
        </li>     
      </ul>

  </aside>
</template>

<script>
export default {
  computed: {},
  methods: {},
};
</script>

<style>


#setting-sidebar .sidebar-nav { 
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
}

#setting-sidebar .sidebar-nav li {
    line-height: 2;
    background-color: steelblue;
    border: solid 1px white;
}

#setting-sidebar .sidebar-nav li a{
    padding-left: 10%;
    display: block;
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
}
#setting-sidebar .sidebar-nav li a:hover{
    color: rgb(175, 220, 241);
}

#setting-sidebar .sidebar-icon {
    margin-right: 5%; 
}
#setting-sidebar .oi {
    width: 30px;
}

</style>
