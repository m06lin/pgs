<template>
  <main class="parking-space">
    <div class="parking-space-title mx-3 row align-items-center">
      <h1 class="mx-2">停車場車位 <b-button class="button-circle" variant="outline-dark" v-b-modal.modal-add-parking><i class="oi oi-plus"></i></b-button></h1>   
    </div>
    <div class="parking-space-content">
      <div class="parking-space-scroll p-3">
        <b-card-group deck>
          <b-card class="mb-3" style="min-width:20%; max-width:20%;" no-body v-for="(item, key) in parkingContent" v-bind:key="item.key">
            <b-card-header class="text-right">
              <input type="text" class="text-center card-header-input" :value="item.name" readonly>
              <b-button variant="outline-dark" class="button-circle" @click="editParkingModalEvent(item, key)"><i class="oi oi-pencil"></i></b-button>
              <b-button variant="outline-dark" class="button-circle mr-2" @click="deletParkingModalEvent(item)"><i class="oi oi-trash"></i></b-button>
            </b-card-header>
            <b-card-body class="mx-2">
              <b-row class="mb-3"> 
                <label class="col-5">車位預設</label>
                 <b-form-input type="text" class="text-center col-6" v-model="item.init" readonly/>
              </b-row>
              <b-row class="mb-3"> 
                <label class="col-5">空車顏色</label>
                <b-form-input type="color" class="col-6" v-model="item.empty" disabled/>             
              </b-row>
              <b-row class="mb-3"> 
                <label class="col-5">停車顏色</label>
                <b-form-input type="color" class="col-6" v-model="item.inuse" disabled/>
              </b-row>
              <b-row class="mb-3"> 
                <label class="col-5">異常顏色</label>
                <b-form-input type="color" class="col-6" v-model="item.error" disabled/>
              </b-row>
            </b-card-body>
          </b-card>
        </b-card-group>
      </div>
    </div>

    <!-- Add Parking -->
    <b-modal id="modal-add-parking" ref="modal-add-parking" title="新增車位" hide-footer
      @show="addNewParkingResetEvent"
      @hidden="addNewParkingResetEvent">
      <b-form ref="newParkingForm">
        <b-form-group label="車位名稱" label-for="new-name-input" class="mb-2">
          <b-form-input id="new-name-input" v-model="newParking.name" required pattern="[^-@]*"></b-form-input>
        </b-form-group>
        <b-form-group label="車位預設" label-for="new-init-input" class="mb-2">
          <b-form-select id="new-init-input" v-model="newParking.init">
            <option>預設</option>
            <option>非預設</option>
          </b-form-select>
        </b-form-group>
        <b-form-group label="車位顏色" label-for="edit-empty-color-input" class="mb-2">
          <b-form-input id="edit-empty-color-input" type="color" v-model="newParking.empty"/>
        </b-form-group>
        <b-form-group label="車位顏色" label-for="edit-inuse-color-input" class="mb-2">
          <b-form-input id="edit-inuse-color-input" type="color" v-model="newParking.inuse"/>
        </b-form-group>
        <b-form-group label="車位顏色" label-for="edit-error-color-input" class="mb-2">
          <b-form-input id="edit-error-color-input" type="color" v-model="newParking.error"/>
        </b-form-group>
        <b-form-group class="text-right">
          <b-button variant="secondary" @click="$refs['modal-add-parking'].hide()">關閉</b-button>
          <b-button variant="primary" @click="addParkingOkEvent">確定</b-button>
      </b-form-group>
      </b-form>
    </b-modal>
    <!-- Edit Parking -->
    <b-modal id="modal-edit-parking" ref="modal-edit-parking" title="修改車位" hide-footer>
      <form ref="form">
        <b-form-group label="車位名稱" label-for="edit-name-input" class="mb-2">
          <b-input id="edit-name-input" variant="outline-secondary" v-model="editParking.name"/>
        </b-form-group>
        <b-form-group label="車位預設" label-for="edit-init-input" class="mb-2">
          <b-form-select id="edit-init-input" v-model="editParking.init">
            <option>預設</option>
            <option>非預設</option>
          </b-form-select>
        </b-form-group>
        <b-form-group label="車位顏色" label-for="edit-empty-color-input" class="mb-2">
          <b-form-input id="edit-empty-color-input" type="color" v-model="editParking.empty"/>
        </b-form-group>
        <b-form-group label="車位顏色" label-for="edit-inuse-color-input" class="mb-2">
          <b-form-input id="edit-inuse-color-input" type="color" v-model="editParking.inuse"/>
        </b-form-group>
        <b-form-group label="車位顏色" label-for="edit-error-color-input" class="mb-2">
          <b-form-input id="edit-error-color-input" type="color" v-model="editParking.error"/>
        </b-form-group>
        <b-form-group class="text-right">
          <b-button variant="secondary" @click="$refs['modal-edit-parking'].hide()">關閉</b-button>
          <b-button variant="primary" @click="editParkingOkEvent">確定</b-button>
      </b-form-group>
      </form>
    </b-modal>

    <!-- Delete Parking -->
    <b-modal id="modal-delete-parking" ref="modal-delete-parking" title="刪除車位" hide-footer>
      <p>是否確定刪除<b>{{deleteParking.name}}</b>車位?</p>
      <b-form-group class="text-right">
        <b-button variant="secondary" @click="$refs['modal-delete-parking'].hide()">關閉</b-button>
        <b-button variant="primary" @click="deleteParkingOkEvent">確定</b-button>
      </b-form-group>
    </b-modal>
  </main>
</template>

<script>
// import draggable from 'vuedraggable';

// export default {
//   data() {
//     return {
//       /* eslint object-curly-newline: ["error", { "multiline": true }] */
//       parkingContent: [
//         { id: 1, name: '預設車位', init: '預設',
//  empty: '#00ff00', inuse: '#ff0000', error: '#0000ff' },
//         { id: 2, name: '月租車位', init: '非預設',
//  empty: '#00ff00', inuse: '#ff0000', error: '#0000ff' },
//       ],
//       newParking: {},
//       editParking: {},
//       editParkingkey: '',
//       deleteParking: {},
//     };
//   },
//   components: { draggable },
//   methods: {
//     dragEndEvent() {
//       console.log(this.parkingContent);
//     },
//     addNewParkingResetEvent() {
//       this.newParking = {};
//     },
//     addParkingModalEvent() {
//       this.$refs.addParkingModal.show();
//     },
//     addParkingOkEvent() {
//       this.parkingContent
//         .push({
//           name: this.newParking.name,
//           init: this.newParking.init,
//           empty: this.newParking.empty,
//           inuse: this.newParking.inuse,
//           error: this.newParking.error,
//         });
//     },
//     editParkingModalEvent(item, key) {
//       this.editParking = JSON.parse(JSON.stringify(item));
//       this.editParkingkey = key;
//       this.$refs.editParkingModal.show();
//     },
//     editParkingOkEvent() {
//       this.parkingContent[this.editParkingkey].name = this.editParking.name;
//       this.parkingContent[this.editParkingkey].init = this.editParking.init;
//       this.parkingContent[this.editParkingkey].empty = this.editParking.empty;
//       this.parkingContent[this.editParkingkey].inuse = this.editParking.inuse;
//       this.parkingContent[this.editParkingkey].error = this.editParking.error;
//     },
//     deletParkingModalEvent(item) {
//       this.deleteParking = item;
//       this.$refs.deleteParkingModal.show();
//     },
//     deleteParkingOkEvent() {
//       this.parkingContent.splice(this.parkingContent.indexOf(this.deleteParking), 1);
//     },
//   },
// };
</script>

<style>
/* .parking-space-title{
  height: 10%;
  border-bottom: solid 2px rgb(161, 161, 161);
  font-size: 1.5rem;
}
.parking-space-scroll {
  overflow-x: auto; 
  position: absolute; 
  top: 0; right:0; bottom: 0; left: 0;
}
.parking-space-content{
  height: 90%;
  position:relative;
}
.parking-space-content .card-header {
  padding-right: 0.2rem;
} */


</style>
