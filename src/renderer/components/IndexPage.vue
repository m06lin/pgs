<template>
  <div class="container-fluid">
    <div class="mb-4">
      <h1 class="font-weight-bold">資訊面板</h1>
      <hr>
      <section class="row text-center">
        <div class="col-sm-3">
          {{TPM400DirPercent}}
          <svg id="fillgauge1" width="200" height="200"></svg>
          <h4>TPM400</h4>
          <div class="text-muted">儲存空間使用率</div>
        </div>
        <div class="col-sm-3">
          {{dbDirPercent}}
          <svg id="fillgauge2" width="200" height="200"></svg>
          <h4>Database</h4>
          <span class="text-muted">資料庫空間使用率</span>
        </div>
        <!-- <div class="col-sm-6 ">
                <svg id="fillgauge3" width="600" height="200"></svg>
                <h4>車位每秒異動次數</h4>
                <span class="text-muted">TPM400觸發</span>
        </div>-->
      </section>
    </div>
    <div class="mb-4">
      <h1 class="font-weight-bold">車位觸發紀錄</h1>
      <hr>
      <table id="overviewTable" class="table table-hover table-top-none">
        <thead>
          <tr>
            <th scope="col">抓取時間</th>
            <th scope="col">停車場</th>
            <th scope="col">車牌號碼</th>
            <th scope="col">車格號碼</th>
            <th scope="col">行為</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2019-02-31 10:00:00</td>
            <td>2564</td>
            <td>C-121</td>
            <td>123</td>
            <td>Parking</td>
          </tr>
                    <tr>
            <td>2019-02-31 10:00:00</td>
            <td>2564</td>
            <td>C-121</td>
            <td>123</td>
            <td>Parking</td>
          </tr>
                    <tr>
            <td>2019-02-31 10:00:00</td>
            <td>2564</td>
            <td>C-121</td>
            <td>123</td>
            <td>Parking</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TPM400DirPercent: '0.00',
      dbDirPercent: '0.00',
    };
  },
  computed: {},
  mounted() {
    console.log('mounted mounted');
    const response = this.$electron.ipcRenderer.sendSync('storagestatus');
    this.TPM400DirPercent = response.TPM400DirPercent;
    this.dbDirPercent = response.dbDirPercent;
  },
};
</script>

<style>
</style>
