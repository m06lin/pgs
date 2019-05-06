<template>
  <aside id="monitor-page" class="monitor-sidebar-bg px-3"> 
  
      <h2>系統監控</h2>

    <div class="box" style="height: 30%">
      <div class="monitor-sidebar-table">         
        <div class="mx-0 justify-content-between row" style="height: 15%" >
          <b-form-group class="px-0 col-8" style="margin:auto">
            <b-form-select v-model="selectFloor" :options="options"></b-form-select>
          </b-form-group>
          <div class="btn-group-toggle px-0 col-3" style="margin:auto">
            <label class="btn btn-secondary active">
              <input type="checkbox" autocomplete="off" @click="showTypeOrArea=!showTypeOrArea" v-modle="showTypeOrArea">
                {{showTypeOrArea?'區域':'種類'}}
            </label>
          </div>
        </div>
        <div style="position:relative; margin:auto; height: 85%">
          <div class="sidebar-table-scroll">
            <b-table id="nowFloor" :items="areItem" :fields="floorFields" class="table table-sm"></b-table>
          </div>
        </div>
      </div>
    </div>
    <div class="box" style="height: 30%">
      <div class="monitor-sidebar-table">
        <h5>全部樓層</h5>
        <div style="position:relative; height: 85%">
          <div class="sidebar-table-scroll">
            <b-table id="allFloor" :items="typeItem" :fields="floorFields" class="table table-sm"></b-table>
          </div>
        </div>
      </div>
    </div>
    <div class="box" style="height:35%">
      <div class="monitor-sidebar-table">
        <h5>系統警告</h5>
        <div style="position:relative; height: 85%">
          <div class="sidebar-table-scroll">
            <b-table id="alert" :items="alertItem" :fields="alertFields" class="table table-sm"></b-table>
          </div>
        </div>
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
        { item: 'A', inUse: 3, empty: 7, total: 10, useRatio: '30%' },
        { item: 'B', inUse: 6, empty: 4, total: 10, useRatio: '60%' },
        { item: 'C', inUse: 3, empty: 7, total: 10, useRatio: '30%' },
        { item: 'A', inUse: 3, empty: 7, total: 10, useRatio: '30%' },
        { item: 'B', inUse: 6, empty: 4, total: 10, useRatio: '60%' },
        { item: 'C', inUse: 3, empty: 7, total: 10, useRatio: '30%' },
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
        { item: '年租2', inUse: 300, empty: 700, total: 1000, useRatio: '30%' },
        { item: '哈哈2', inUse: 666, empty: 334, total: 1000, useRatio: '67%' },
        { item: '不給租2', inUse: 666, empty: 434, total: 1100, useRatio: '62%' },
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
}
.box{
  padding-bottom: 10px;
  text-align:center;
}
.sidebar-title {
  font-size: 1.3rem;
  text-align-last: center;
}
.monitor-sidebar-table {
  height: 100%;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 5px 15px 5px 15px !important;
}
/* .custom-select{
  text-align-last: center;
  font-weight: bold;
  background-color: rgb(230, 230, 230);
} */
h2{
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
}
h5{
  font-size: 1.2rem;
  text-align: center;
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
  overflow-y: auto; 
  position: absolute; 
  top: 0; right:0; bottom: 0; left: 0;
}

</style>
