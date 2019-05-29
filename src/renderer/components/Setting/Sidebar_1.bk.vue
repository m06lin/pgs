<template>
  <aside id="map-sidebar" class="map-sidebar-bg px-3">
    <h2>地圖</h2>
    <div class="box">
      <div class="map-sidebar-table">
        <div class="list-group">
          <div v-for="item in mapList" v-bind:key="item.key" class="list-group-item">
            <b-button style="float:left"><i class="oi oi-menu"></i></b-button>
            <span style="font-size:1.3rem">{{item.name}}</span>
            <span style="float:right">
              <b-button class=" button-circle"><i class="oi oi-pencil"></i></b-button>
              <b-button class=" button-circle"><i class="oi oi-trash"></i></b-button>
            </span>
          </div>
          <div class="list-group-item">
            
            <b-button class=" button-circle"><i class="oi oi-plus"></i></b-button>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
// export default {
//   data: function data() {
//     return {
//       addMap: '',
//       mapList: [
//         { id: 1, name: 'AB-B1' },
//         { id: 2, name: 'AB-B2' },
//         { id: 3, name: 'CD-B1' },
//         { id: 4, name: 'CD-B2' },
//       ],
//     };
//   },
//   computed: {},
//   methods: {},
// };
</script>

<style>
  /* .map-sidebar-bg {
    background: rgb(231, 231, 231);
    color: rgb(0, 0, 0);
  }
  .map-sidebar-table {
  height: 100%;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 5px 15px 5px 15px !important;
  }
  .button-circle{
    border-radius: 50%;
  } */

</style>
