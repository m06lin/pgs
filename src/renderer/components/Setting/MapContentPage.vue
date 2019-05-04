<template>
  <main class="col-sm-9 ml-sm-auto col-md-10 pt-3 scrollbar">
    <div class="tab-content" id="navTabContent">
      <div class="tab-pane fade" id="overviewContent" role="tabpanel" aria-labelledby="overviewTab">
        <div class="mb-4">
          <h1 class="font-weight-bold">資訊面板</h1>
          <hr>
          <section class="row text-center">
            <div class="col-sm-3">
              <svg id="fillgauge1" width="200" height="200">
                <g transform="translate(0,0)">
                  <path
                    d="M6.123233995736766e-15,-100A100,100,0,1,1,-6.123233995736766e-15,100A100,100,0,1,1,6.123233995736766e-15,-100M-1.745121688784978e-14,-95A95,95,0,1,0,1.745121688784978e-14,95A95,95,0,1,0,-1.745121688784978e-14,-95Z"
                    transform="translate(100,100)"
                    style="fill: rgb(23, 139, 202);"
                  ></path>
                  <text
                    class="liquidFillGaugeText"
                    text-anchor="middle"
                    font-size="50px"
                    transform="translate(100,117.5)"
                    style="fill: rgb(4, 86, 129);"
                  >0.00%</text>
                  <defs>
                    <clipPath id="clipWave-0" transform="translate(-170,194.5)">
                      <path
                        d="M0,184.5L4.5,184.5L9,184.5L13.5,184.5L18,184.5L22.5,184.5L27,184.5L31.499999999999996,184.5L36,184.5L40.5,184.5L45,184.5L49.50000000000001,184.5L54,184.5L58.5,184.5L62.99999999999999,184.5L67.5,184.5L72,184.5L76.5,184.5L81,184.5L85.5,184.5L90,184.5L94.5,184.5L99.00000000000001,184.5L103.49999999999999,184.5L108,184.5L112.5,184.5L117,184.5L121.50000000000001,184.5L125.99999999999999,184.5L130.5,184.5L135,184.5L139.5,184.5L144,184.5L148.5,184.5L153,184.5L157.5,184.5L162,184.5L166.5,184.5L171,184.5L175.5,184.5L180,184.5L184.49999999999997,184.5L189,184.5L193.5,184.5L198.00000000000003,184.5L202.5,184.5L206.99999999999997,184.5L211.5,184.5L216,184.5L220.50000000000003,184.5L225,184.5L229.49999999999997,184.5L234,184.5L238.5,184.5L243.00000000000003,184.5L247.5,184.5L251.99999999999997,184.5L256.5,184.5L261,184.5L265.5,184.5L270,184.5L274.5,184.5L279,184.5L283.5,184.5L288,184.5L292.5,184.5L297,184.5L301.5,184.5L306,184.5L310.5,184.5L315,184.5L319.5,184.5L324,184.5L328.5,184.5L333,184.5L337.5,184.5L342,184.5L346.5,184.5L351,184.5L355.5,184.5L360,184.5L360,-2.204364238465236e-15L355.5,-0.7039550926810372L351,-1.3905764746872655L346.5,-2.042957248827959L342,-2.6450336353161306L337.5,-3.1819805153394682L333,-3.6405764746872644L328.5,-4.009529358847658L324,-4.279754323328192L319.5,-4.44459753267812L315,-4.5L310.5,-4.44459753267812L306,-4.2797543233281905L301.5,-4.009529358847656L297,-3.6405764746872626L292.5,-3.1819805153394656L288,-2.6450336353161275L283.5,-2.0429572488279555L279,-1.3905764746872618L274.5,-0.7039550926810333L270,1.6532731788489267e-15L265.5,0.7039550926810365L261,1.390576474687265L256.5,2.0429572488279586L251.99999999999997,2.64503363531613L247.5,3.1819805153394674L243.00000000000003,3.640576474687264L238.5,4.009529358847658L234,4.279754323328191L229.49999999999997,4.44459753267812L225,4.5L220.50000000000003,4.44459753267812L216,4.2797543233281905L211.5,4.009529358847655L206.99999999999997,3.6405764746872604L202.5,3.181980515339463L198.00000000000003,2.645033635316131L193.5,2.0429572488279595L189,1.3905764746872622L184.49999999999997,0.7039550926810338L180,-1.102182119232618e-15L175.5,-0.7039550926810401L171,-1.3905764746872642L166.5,-2.0429572488279613L162,-2.64503363531613L157.5,-3.1819805153394647L153,-3.640576474687264L148.5,-4.009529358847656L144,-4.279754323328191L139.5,-4.44459753267812L135,-4.5L130.5,-4.444597532678119L125.99999999999999,-4.2797543233281905L121.50000000000001,-4.009529358847655L117,-3.640576474687263L112.5,-3.181980515339464L108,-2.645033635316129L103.49999999999999,-2.042957248827958L99.00000000000001,-1.3905764746872649L94.5,-0.7039550926810383L90,5.51091059616309e-16L85.5,0.7039550926810394L81,1.3905764746872638L76.5,2.042957248827961L72,2.6450336353161297L67.5,3.1819805153394642L62.99999999999999,3.6405764746872635L58.5,4.009529358847655L54,4.279754323328191L49.50000000000001,4.444597532678119L45,4.5L40.5,4.44459753267812L36,4.2797543233281905L31.499999999999996,4.009529358847655L27,3.6405764746872635L22.5,3.181980515339464L18,2.6450336353161292L13.5,2.0429572488279604L9,1.3905764746872633L4.5,0.703955092681039L0,0Z"
                        transform="translate(97.43470000103116, 0)"
                      ></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#clipWave-0)" style="fill: rgb(23, 139, 202);">
                    <circle cx="100" cy="100" r="90"></circle>
                    <text
                      class="liquidFillGaugeText"
                      text-anchor="middle"
                      font-size="50px"
                      transform="translate(100,117.5)"
                      style="fill: rgb(164, 219, 248);"
                    >0.00%</text>
                  </g>
                </g>
              </svg>
              <h4>TPM400</h4>
              <div class="text-muted">儲存空間使用率</div>
            </div>
            <div class="col-sm-3">
              <svg id="fillgauge2" width="200" height="200">
                <g transform="translate(0,0)">
                  <path
                    d="M6.123233995736766e-15,-100A100,100,0,1,1,-6.123233995736766e-15,100A100,100,0,1,1,6.123233995736766e-15,-100M-1.745121688784978e-14,-95A95,95,0,1,0,1.745121688784978e-14,95A95,95,0,1,0,-1.745121688784978e-14,-95Z"
                    transform="translate(100,100)"
                    style="fill: rgb(23, 139, 202);"
                  ></path>
                  <text
                    class="liquidFillGaugeText"
                    text-anchor="middle"
                    font-size="50px"
                    transform="translate(100,117.5)"
                    style="fill: rgb(4, 86, 129);"
                  >0.00%</text>
                  <defs>
                    <clipPath id="clipWave-1" transform="translate(-170,194.5)">
                      <path
                        d="M0,184.5L4.5,184.5L9,184.5L13.5,184.5L18,184.5L22.5,184.5L27,184.5L31.499999999999996,184.5L36,184.5L40.5,184.5L45,184.5L49.50000000000001,184.5L54,184.5L58.5,184.5L62.99999999999999,184.5L67.5,184.5L72,184.5L76.5,184.5L81,184.5L85.5,184.5L90,184.5L94.5,184.5L99.00000000000001,184.5L103.49999999999999,184.5L108,184.5L112.5,184.5L117,184.5L121.50000000000001,184.5L125.99999999999999,184.5L130.5,184.5L135,184.5L139.5,184.5L144,184.5L148.5,184.5L153,184.5L157.5,184.5L162,184.5L166.5,184.5L171,184.5L175.5,184.5L180,184.5L184.49999999999997,184.5L189,184.5L193.5,184.5L198.00000000000003,184.5L202.5,184.5L206.99999999999997,184.5L211.5,184.5L216,184.5L220.50000000000003,184.5L225,184.5L229.49999999999997,184.5L234,184.5L238.5,184.5L243.00000000000003,184.5L247.5,184.5L251.99999999999997,184.5L256.5,184.5L261,184.5L265.5,184.5L270,184.5L274.5,184.5L279,184.5L283.5,184.5L288,184.5L292.5,184.5L297,184.5L301.5,184.5L306,184.5L310.5,184.5L315,184.5L319.5,184.5L324,184.5L328.5,184.5L333,184.5L337.5,184.5L342,184.5L346.5,184.5L351,184.5L355.5,184.5L360,184.5L360,-2.204364238465236e-15L355.5,-0.7039550926810372L351,-1.3905764746872655L346.5,-2.042957248827959L342,-2.6450336353161306L337.5,-3.1819805153394682L333,-3.6405764746872644L328.5,-4.009529358847658L324,-4.279754323328192L319.5,-4.44459753267812L315,-4.5L310.5,-4.44459753267812L306,-4.2797543233281905L301.5,-4.009529358847656L297,-3.6405764746872626L292.5,-3.1819805153394656L288,-2.6450336353161275L283.5,-2.0429572488279555L279,-1.3905764746872618L274.5,-0.7039550926810333L270,1.6532731788489267e-15L265.5,0.7039550926810365L261,1.390576474687265L256.5,2.0429572488279586L251.99999999999997,2.64503363531613L247.5,3.1819805153394674L243.00000000000003,3.640576474687264L238.5,4.009529358847658L234,4.279754323328191L229.49999999999997,4.44459753267812L225,4.5L220.50000000000003,4.44459753267812L216,4.2797543233281905L211.5,4.009529358847655L206.99999999999997,3.6405764746872604L202.5,3.181980515339463L198.00000000000003,2.645033635316131L193.5,2.0429572488279595L189,1.3905764746872622L184.49999999999997,0.7039550926810338L180,-1.102182119232618e-15L175.5,-0.7039550926810401L171,-1.3905764746872642L166.5,-2.0429572488279613L162,-2.64503363531613L157.5,-3.1819805153394647L153,-3.640576474687264L148.5,-4.009529358847656L144,-4.279754323328191L139.5,-4.44459753267812L135,-4.5L130.5,-4.444597532678119L125.99999999999999,-4.2797543233281905L121.50000000000001,-4.009529358847655L117,-3.640576474687263L112.5,-3.181980515339464L108,-2.645033635316129L103.49999999999999,-2.042957248827958L99.00000000000001,-1.3905764746872649L94.5,-0.7039550926810383L90,5.51091059616309e-16L85.5,0.7039550926810394L81,1.3905764746872638L76.5,2.042957248827961L72,2.6450336353161297L67.5,3.1819805153394642L62.99999999999999,3.6405764746872635L58.5,4.009529358847655L54,4.279754323328191L49.50000000000001,4.444597532678119L45,4.5L40.5,4.44459753267812L36,4.2797543233281905L31.499999999999996,4.009529358847655L27,3.6405764746872635L22.5,3.181980515339464L18,2.6450336353161292L13.5,2.0429572488279604L9,1.3905764746872633L4.5,0.703955092681039L0,0Z"
                        transform="translate(97.43470000103116, 0)"
                      ></path>
                    </clipPath>
                  </defs>
                  <g clip-path="url(#clipWave-1)" style="fill: rgb(23, 139, 202);">
                    <circle cx="100" cy="100" r="90"></circle>
                    <text
                      class="liquidFillGaugeText"
                      text-anchor="middle"
                      font-size="50px"
                      transform="translate(100,117.5)"
                      style="fill: rgb(164, 219, 248);"
                    >0.00%</text>
                  </g>
                </g>
              </svg>
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
            <tbody></tbody>
          </table>
        </div>
      </div>
      <div class="tab-pane fade" id="parkingsContent" role="tabpanel" aria-labelledby="parkTab">
        <div class="mb-4">
          <h1 class="font-weight-bold">車位點</h1>
          <hr>
          <status></status>
          <div class="row">
            <div class="col-4">
              <h5>半徑選擇</h5>
            </div>
            <div class="col-6">
              <form id="setRadiusForm">
                <div class="form-group row no-gutters">
                  <select name="circleRadius" class="form-control col-4" id="circleRadiusSelect">
                    <option>5</option>

                    <option>6</option>

                    <option>7</option>

                    <option>8</option>

                    <option>9</option>

                    <option selected>10</option>

                    <option>11</option>

                    <option>12</option>

                    <option>13</option>

                    <option>14</option>

                    <option>15</option>
                  </select>
                  <svg height="100" width="100" class="ml-5">
                    <defs>
                      <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="gray" stroke-width="1"></path>
                      </pattern>
                      <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                        <rect width="100" height="100" fill="url(#smallGrid)"></rect>
                        <path
                          d="M 0 0 L 0 100 100 100 100 0 0 0 "
                          fill="none"
                          stroke="gray"
                          stroke-width="1"
                        ></path>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)"></rect>
                    <circle
                      id="circleExample"
                      cx="50"
                      cy="50"
                      r="10"
                      stroke="black"
                      stroke-width="0.5"
                      fill="red"
                    ></circle>
                  </svg>
                </div>
                <button type="submit" class="btn btn-lg btn-outline-primary">修改</button>
              </form>
            </div>
          </div>
        </div>
        <div class="mb-4">
          <h1 class="font-weight-bold">
            車位種類
            <svg
              class="svg-inline--fa fa-plus fa-w-14 fa-xs fa-fw"
              data-toggle="modal"
              data-target="#templateModal"
              data-action="addParkingType"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="plus"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg
            >
              <path
                fill="currentColor"
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
              ></path>
            </svg>
            <!-- <i class="fas fa-plus fa-xs fa-fw" data-toggle="modal" data-target="#templateModal" data-action="addParkingType"></i> -->
          </h1>
          <hr>
          <status></status>
          <div
            class="d-flex flex-wrap m-auto justify-content-start px-5 cards"
            id="parkingTypeCards"
          >
            <div
              class="card m-2 shadow"
              data-id="1"
              data-default="1"
              data-title="車位種類"
              data-case="type"
            >
              <form>
                <div class="card-body">
                  <div class="form-group row">
                    <label class="col-6 col-form-label">種類名稱</label>
                    <div class="col-6">
                      <input name="parkingTypeName" class="form-control" type="text" value="預設車位">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-6 col-form-label">種類預設</label>
                    <div class="col-6">
                      <select name="parkingTypeDefault" class="form-control">
                        <option selected value="1">預設</option>
                        <option value="0">非預設</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-6 col-form-label">空車顏色</label>
                    <div class="col-6">
                      <input
                        name="parkingTypeColor1"
                        class="form-control form-color"
                        type="color"
                        value="#2fec05"
                      >
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-6 col-form-label">停車顏色</label>
                    <div class="col-6">
                      <input
                        name="parkingTypeColor2"
                        class="form-control form-color"
                        type="color"
                        value="#ec1305"
                      >
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-6 col-form-label">異常顏色</label>
                    <div class="col-6">
                      <input
                        name="parkingTypeColor3"
                        class="form-control form-color"
                        type="color"
                        value="#ece705"
                      >
                    </div>
                  </div>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <button type="submit" class="btn btn-lg btn-outline-primary">修改</button>
                  <button
                    type="button"
                    class="btn btn-lg btn-outline-danger"
                    data-toggle="modal"
                    data-target="#templateModal"
                    data-action="deleteParkingType"
                  >刪除</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="mb-4">
          <h1 class="font-weight-bold">
            車位群組
            <svg
              class="svg-inline--fa fa-plus fa-w-14 fa-xs fa-fw"
              data-toggle="modal"
              data-target="#templateModal"
              data-action="addParkingGroup"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="plus"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg
            >
              <path
                fill="currentColor"
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
              ></path>
            </svg>
            <!-- <i class="fas fa-plus fa-xs fa-fw" data-toggle="modal" data-target="#templateModal" data-action="addParkingGroup"></i> -->
          </h1>
          <hr>
          <status></status>
          <div
            class="d-flex flex-wrap m-auto justify-content-start px-5 cards"
            id="parkingGroupCards"
          >
            <div
              class="card m-2 shadow"
              data-id="1"
              data-default="1"
              data-title="車位群組"
              data-case="group"
            >
              <form>
                <div class="card-body">
                  <div class="form-group row">
                    <label class="col-6 col-form-label">群組名稱</label>
                    <div class="col-6">
                      <input name="parkingGroupName" class="form-control" type="text" value="預設群組">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-6 col-form-label">群組預設</label>
                    <div class="col-6">
                      <select name="parkingGroupDefault" class="form-control">
                        <option selected value="1">預設</option>
                        <option value="0">非預設</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-6 col-form-label">群組顏色</label>
                    <div class="col-6">
                      <input
                        name="parkingGroupColor"
                        class="form-control form-color"
                        type="color"
                        value="#e300e3"
                      >
                    </div>
                  </div>
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <button type="submit" class="btn btn-lg btn-outline-primary">修改</button>
                  <button
                    type="button"
                    class="btn btn-lg btn-outline-danger"
                    data-toggle="modal"
                    data-target="#templateModal"
                    data-action="deleteParkingGroup"
                  >刪除</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="logsContent" role="tabpanel" aria-labelledby="logsTab">
        <div class="mb-4">
          <h1 class="font-weight-bold">
            日誌查詢
            <hr>
            <form id="logSearchForm">
              <div class="form-row">
                <div class="form-group mr-2">
                  <select class="form-control" required>
                    <option>TPM400日誌</option>
                  </select>
                </div>
                <div class="form-group mr-2">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">開始時間</span>
                    </div>
                    <input
                      id="startTimePicker"
                      name="startTime"
                      type="text"
                      class="form-control"
                      required
                      autocomplete="off"
                    >
                  </div>
                </div>
                <div class="form-group mr-2">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">結束時間</span>
                    </div>
                    <input
                      name="endTime"
                      type="text"
                      class="form-control"
                      id="endTimePicker"
                      required
                      autocomplete="off"
                    >
                  </div>
                </div>
                <div class="form-group mr-2">
                  <button type="submit" class="form-control">查詢</button>
                </div>
              </div>
            </form>
          </h1>
        </div>
        <div class="mb-4">
          <div class="row mt-5">
            <div
              id="logTable_wrapper"
              class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
            >
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <div class="dataTables_length" id="logTable_length">
                    <label>
                      Show
                      <select
                        name="logTable_length"
                        aria-controls="logTable"
                        class="form-control form-control-sm"
                      >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select> entries
                    </label>
                  </div>
                </div>
                <div class="col-sm-12 col-md-6">
                  <div id="logTable_filter" class="dataTables_filter">
                    <label>
                      Search:
                      <input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder
                        aria-controls="logTable"
                      >
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <table
                    id="logTable"
                    class="table dataTable table-hover no-footer"
                    style="width:100%"
                    role="grid"
                    aria-describedby="logTable_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          class="sorting_asc"
                          tabindex="0"
                          aria-controls="logTable"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label="編號: activate to sort column descending"
                          style="width: 0px;"
                        >編號</th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="logTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="車格號碼: activate to sort column ascending"
                          style="width: 0px;"
                        >車格號碼</th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="logTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="車牌號碼: activate to sort column ascending"
                          style="width: 0px;"
                        >車牌號碼</th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="logTable"
                          rowspan="1"
                          colspan="1"
                          aria-label="抓取時間: activate to sort column ascending"
                          style="width: 0px;"
                        >抓取時間</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="odd">
                        <td
                          valign="top"
                          colspan="4"
                          class="dataTables_empty"
                        >No data available in table</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-5">
                  <div
                    class="dataTables_info"
                    id="logTable_info"
                    role="status"
                    aria-live="polite"
                  >Showing 0 to 0 of 0 entries</div>
                </div>
                <div class="col-sm-12 col-md-7">
                  <div class="dataTables_paginate paging_simple_numbers" id="logTable_paginate">
                    <ul class="pagination">
                      <li
                        class="paginate_button page-item previous disabled"
                        id="logTable_previous"
                      >
                        <a
                          href="#"
                          aria-controls="logTable"
                          data-dt-idx="0"
                          tabindex="0"
                          class="page-link"
                        >Previous</a>
                      </li>
                      <li class="paginate_button page-item next disabled" id="logTable_next">
                        <a
                          href="#"
                          aria-controls="logTable"
                          data-dt-idx="1"
                          tabindex="0"
                          class="page-link"
                        >Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade active show"
        id="mapsContent"
        role="tabpanel"
        aria-labelledby="mapsTab"
      >
        <div class="mb-4">
          <h1 class="font-weight-bold">
            停車場地圖
            <i class="fas fa-plus fa-xs fa-fw" data-toggle="modal" data-target="#templateModal" data-action="addMap"></i>
          </h1>
          <hr>
          <status></status>
          <div
            class="d-flex flex-wrap m-auto justify-content-start px-5 cards ui-sortable"
            id="mapCards"
          >
            <div
              class="card card-map m-2 shadow ui-sortable-handle"
              data-id="3"
              data-title="地圖"
              data-default="0"
              data-case="map"
            >
              <form>
                <div class="card-body">
                  <div class="form-group row">
                    <label class="col-6 col-form-label">地圖名稱</label>
                    <div class="col-6">
                      <input name="newName" class="form-control" type="text" value="AB棟-B1">
                      <input name="oldName" type="hidden" value="AB棟-B1">
                    </div>
                  </div>
                  <img height="20%" width="20%" src="http://ta001.pgs.ichenparking.com.tw:8830/maps/1534270432211.jpeg" alt="Card image cap">
                </div>
                <div class="card-footer d-flex justify-content-around">
                  <button type="submit" class="btn btn-lg btn-outline-primary">修改</button>
                  <button
                    type="button"
                    class="btn btn-lg btn-outline-danger"
                    data-toggle="modal"
                    data-target="#templateModal"
                    data-action="deleteMap"
                  >刪除</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="watchdogsContent"
        role="tabpanel"
        aria-labelledby="watchdogTab"
      >
        <div class="mb-4">
          <h1 class="font-weight-bold">
            逾時監控器
            <svg
              class="svg-inline--fa fa-plus fa-w-14 fa-xs fa-fw"
              data-toggle="modal"
              data-target="#templateModal"
              data-action="addWatchdogOvertime"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="plus"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg
            >
              <path
                fill="currentColor"
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
              ></path>
            </svg>
            <!-- <i class="fas fa-plus fa-xs fa-fw" data-toggle="modal" data-target="#templateModal" data-action="addWatchdogOvertime"></i> -->
          </h1>
          <hr>
          <status></status>
          <div class="d-flex flex-wrap m-auto justify-content-start px-5 cards" id="overtimeCards"></div>
        </div>
        <div class="mb-4">
          <h1 class="font-weight-bold">
            黑白名單監控器
            <svg
              class="svg-inline--fa fa-plus fa-w-14 fa-xs fa-fw"
              data-toggle="modal"
              data-target="#templateModal"
              data-action="addWatchdogBlacklist"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="plus"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg
            >
              <path
                fill="currentColor"
                d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
              ></path>
            </svg>
            <!-- <i class="fas fa-plus fa-xs fa-fw" data-toggle="modal" data-target="#templateModal" data-action="addWatchdogBlacklist"></i> -->
          </h1>
          <hr>
          <status></status>
          <div class="d-flex flex-wrap m-auto justify-content-start px-5 cards" id="blacklistCards">
            <div class="card m-2 shadow" data-id="1">
              <div class="card-body">
                <form id="blacklistsFormNo0">
                  <div class="form-group row">
                    <label class="col-6 col-form-label">監控器名稱</label>
                    <div class="col-6">
                      <input name="name" class="form-control" type="text" value="123">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-6 col-form-label">黑白名單</label>
                    <div class="col-6">
                      <select name="black" class="form-control">
                        <option selected value="1">黑名單</option>
                        <option value="0">白名單</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label class="col-6 col-form-label">黑白名單顏色</label>
                    <div class="col-6">
                      <input name="color" class="form-control" type="color" value="#717470">
                    </div>
                  </div>
                  <div class="form-group">
                    <label>名單</label>
                    <textarea name="members" class="form-control" rows="10">RBN7283,ABC123</textarea>
                  </div>
                </form>
              </div>
              <div class="card-footer d-flex justify-content-around">
                <button
                  type="submit"
                  class="btn btn-lg btn-outline-primary"
                  form="blacklistsFormNo0"
                  modify
                >修改</button>
                <!-- <button type="button" class="btn btn-lg btn-outline-primary" form="parkingGroupFormNo0">配對</button> -->
                <button
                  type="button"
                  class="btn btn-lg btn-outline-danger"
                  data-toggle="modal"
                  data-target="#templateModal"
                  data-action="deleteWatchdogBlacklist"
                >刪除</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  mounted() {
  },
};
</script>

<style>
</style>
