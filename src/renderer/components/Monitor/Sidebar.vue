<template>
  <aside id="monitor-page" class="container monitor-sidebar-bg">
    <h2 class="sidebar-title">系統監控</h2>
    <div class="monitor-sidebar-table row">
      <div class="row py-3 mx-0 justify-content-between">
        <b-form-group class="col-8 px-0">
          <b-form-select v-model="selectFloor" :options="options"></b-form-select>
        </b-form-group>
        <div class="row btn-group-toggle d-inline-block col-3 px-0">
          <label class="btn btn-secondary active">
            <input type="checkbox" autocomplete="off" @click="showTypeOrArea=!showTypeOrArea" v-modle="showTypeOrArea">
              {{showTypeOrArea?'顯示區域':'顯示種類'}}
          </label>
        </div>
      </div>
      <div class="col-12 sidebar-table-scroll">
        <b-table id="nowFloor" :items="areItem" :fields="floorFields"></b-table>
      </div>
    </div>
    <div class="monitor-sidebar-table row">
      <h5 class="col-12">全部樓層</h5>
      <div class="col-12 sidebar-table-scroll">
        <b-table id="allFloor" :items="typeItem" :fields="floorFields"></b-table>
      </div>
    </div>
    <div class="monitor-sidebar-table row">
      <h5 class="col-12">系統警告</h5>
      <div class="col-12 sidebar-table-scroll">
        <b-table id="alert" :items="alertItem" :fields="alertFields"></b-table>
      </div>
    </div>

  </aside>
</template>

<script>
export default {
  data: function data() {
    return {
      showTypeOrArea: true,
      showTypeOrAreaWord: '區域',
      selectFloor: 1,
      options: [
        { value: 1, text: 'AB棟-B1樓' },
        { value: 2, text: 'AB棟-B2樓' },
        { value: 3, text: 'AB棟-B3樓' },
      ],
      areItem: [
        /* eslint object-curly-newline: ["error", { "multiline": true }] */
        { item: 'A', inUse: 3, empty: 7, total: 10, useRatio: '30%' },
        { item: 'B', inUse: 6, empty: 4, total: 10, useRatio: '60%' },
        { item: 'C', inUse: 3, empty: 7, total: 10, useRatio: '30%' },
      ],
      typeItem: [
        { item: '一般', inUse: 300, empty: 700, total: 1000, useRatio: '30%' },
        { item: '日租', inUse: 666, empty: 334, total: 1000, useRatio: '67%' },
        { item: '月租', inUse: 666, empty: 434, total: 1100, useRatio: '62%' },
        { item: '年租', inUse: 300, empty: 700, total: 1000, useRatio: '30%' },
        { item: '哈哈', inUse: 666, empty: 334, total: 1000, useRatio: '67%' },
        { item: '不給租', inUse: 666, empty: 434, total: 1100, useRatio: '62%' },
      ],
      floorFields: [
        { key: 'item', label: '區域' },
        { key: 'inUse', label: '占用' },
        { key: 'empty', label: '剩餘' },
        { key: 'total', label: '總數' },
        { key: 'useRatio', label: '占用率' },
      ],
      alertItem: [
        { alertType: '黑名單', carNo: 'ABC-123', time: '22:30' },
        { alertType: '超時', carNo: 'CDE-456', time: '22:35' },
        { alertType: '黑名單', carNo: 'ABC-123', time: '22:40' },
        { alertType: '黑名單', carNo: 'ABC-123', time: '22:40' },
      ],
      alertFields: [
        { key: 'alertType', label: '警報種類' },
        { key: 'carNo', label: '車格號碼' },
        { key: 'time', label: '時間' },
      ],
    };
  },
};
</script>

<style>
.monitor-sidebar-bg {
  background: rgb(231, 231, 231);
  color: rgb(0, 0, 0);
  padding: 0 25px 0 25px !important;
  width: 70%;
  height:100%;
  display: block;
  position: fixed;
  right: 0;
}
.sidebar-title {
  margin-top: 15px;
  font-size: 1.5rem;
  text-align-last: center;
}
.monitor-sidebar-table {
  background: rgb(255, 255, 255);
  border-radius: 10px;
  margin: 15px 0 15px 0;
  padding: 0px 15px 0px 15px !important;
  max-height:30%;
}
.custom-select{
  text-align-last: center;
  font-weight: bold;
  background-color: rgb(230, 230, 230);
}
h5{
  font-size: 1.2rem;
  margin-top:10px;
  padding: 5px 0 5px 0;
  text-align-last: center;
}
.form-group{
  margin: 0;
}
/* .sidebar-table-scroll th{
  position: sticky !important;
  top: 0 !important;
  background-color:white;
} */
.sidebar-table-scroll {
  overflow-y: hidden;
}
.sidebar-table-scroll-3 {
  overflow-y: scroll;
  position: absolute;
  top: 0;
}
</style>
