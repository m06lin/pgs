<template>
  <aside id="setting-sidebar" class="monitor-sidebar-bg text-center px-4">
    <div class="editor-sidebar-goback py-4 mb-3">
      <a href="#/setting/mapContent">
          <span><i class="oi oi-chevron-left"></i></span>
          <span>返回 設定地圖 頁面</span>
      </a>
    </div>
    <div class="editor-sidebar-table py-3 mb-3">
      <h2 class="mb-2">編輯 AB-3樓 車位</h2>
      <div class="mb-2">
        <b-button disabled  variant="outline-dark">匯入車位</b-button>
        <b-button disabled variant="outline-dark">匯出車位</b-button>
        <b-button variant="outline-dark">匯入群組</b-button>
        <b-button variant="outline-dark">匯出群組</b-button>
      </div>
    </div> 
  </aside>
</template>

<script>
export default {
  computed: {},
  methods: {},
};
</script>

<style>
.editor-sidebar-goback a{
    color: rgb(149, 149, 149);
    font-size: 2rem;
    display: block;
    border-bottom: solid 0.8px rgb(149, 149, 149);
    padding-bottom: 15px;
}
.editor-sidebar-goback a:hover{
    color: rgb(49, 49, 49);
    text-decoration: none;
}
.editor-sidebar-table {
  background: rgb(255, 255, 255);
  border-radius: 10px;
}
</style>
