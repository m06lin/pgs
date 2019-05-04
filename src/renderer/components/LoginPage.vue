<template>
  <div class="pgs-bg-color">
    <div class="row justify-content-center align-items-center" style="height:100vh">
      <div class="col-4">
        <div class="text-center pgs-logo">
          <img src="../assets/pssGroup.png" draggable="false" class="rounded" alt="...">
        </div>
        <div class="card pgs-radius pgs-form"  v-bind:class="{ errorShack: isErrorShack }">
          <div class="card-body">
            <div v-if="isDataLoading">
              <b-progress :value="counter" :max="max" animated></b-progress>
              <!-- <b-progress :max="max" class="mb-3"> 
                <b-progress-bar variant="secondary" :value="value1"></b-progress-bar>
                <b-progress-bar variant="success" :value="value2"></b-progress-bar>
                <b-progress-bar variant="secondary" :value="value3"></b-progress-bar>
              </b-progress> -->
            </div>
            <form action autocomplete="off" v-if="!isDataLoading">
              <div class="text-center">
                <h1 style="color:white">Login</h1>
              </div>
              <hr class="pgs-hr">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control pgs-radius pgs-input-margin"
                  v-model="username"
                  name="username"
                  placeholder="Username"
                  @keyup.enter="loginEvent()"
                >
                <input
                  type="password"
                  class="form-control pgs-radius pgs-input-margin"
                  v-model="password"
                  name="password"
                  placeholder="Password"
                  @keyup.enter="loginEvent()"
                >
              </div>
              <div class="row custom-control custom-checkbox pgs-input-margin">
                <input id="remberMe" type="checkbox" class="custom-control-input">
                <label for="remberMe" style="color:white" class="custom-control-label">記住帳號密碼</label>
              </div>
              <div v-if="isInputError" class="row justify-content-center pgs-input-margin">
                <div class="col-7 text-center pgs-errorMsg">{{errorMsg}}</div>
              </div>
              <div class="text-center">
                <button
                  type="button"
                  id="sendlogin"
                  class="btn col-8 pgs-btn pgs-radius pgs-input-margin"
                  @click="loginEvent()"
                  v-if="!isUserLoading"
                >登 入
                </button>
                <button
                  type="button"
                  class="btn col-8 pgs-btn-disable pgs-radius pgs-input-margin"
                  disabled
                  v-if="isUserLoading"
                >登 入
                </button>
                <!-- <button
                  type="button"
                  class="btn col-8 pgs-btn-disable pgs-radius pgs-input-margin sk-three-bounce"
                  disabled
                >Loading&nbsp;
                  <div class="sk-child sk-bounce1"></div>
                  <div class="sk-child sk-bounce2"></div>
                  <div class="sk-child sk-bounce3"></div>
                </button> -->
              </div>
              <div class="text-center" v-if="isUserLoading"><span id="loginloading"></span></div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function data() {
    return {
      username: 'yapu',
      password: '123',
      isInputError: false,
      isErrorShack: false,
      errorMsg: '',
      isUserLoading: false,
      isDataLoading: false,
      counter: 0,
      max: 100,
    };
  },
  methods: {
    async loginEvent() {
      this.isInputError = false;
      // const param = { username: this.username, password: this.password };
      try {
        const response = await this.$http.get('http://localhost:3000/user');
        const userData = response.data;
        if (this.username === userData.username && this.password === userData.password) {
          this.$store.dispatch('USER_SET', userData);
          // await this.getData();
          this.$electron.ipcRenderer.send('full-window');
          this.$router.push('monitor');
        } else {
          this.isInputError = true;
          this.errorMsg = '帳號或密碼錯誤';
          this.isErrorShack = true;
        }
      } catch (error) {
        console.log(error);
        this.isInputError = true;
        this.errorMsg = '系統錯誤';
        this.isErrorShack = true;
      }
      setTimeout(() => {
        this.isErrorShack = false;
      }, 3000);
    },
    async getData() {
      this.isDataLoading = true;
      this.runLoadingBar();
      console.log('getData()');
      console.log(new Date());
      try {
        const [result1, result2] =
        await Promise.all([this.fakeApi1(), this.fakeApi2(), this.fakeApi3()]);
        console.log('one');
        console.log(result1);
        console.log('two');
        console.log(result2);
        this.finishLoadingBar();
      } catch (error) {
        console.log('error');
        console.log(error);
      }
    },
    runLoadingBar() {
      this.counter += 20;
    },
    finishLoadingBar() {
      this.runLoadingBar();
      setTimeout(() => {
        this.$router.push('monitor');
      }, 500);
    },
    fakeApi1() {
      const one = new Promise((resolve) => {
        setTimeout(() => {
          this.runLoadingBar();
          resolve(new Date());
        }, 1000);
      });
      return one;
    },
    fakeApi2() {
      const two = new Promise((resolve) => {
        setTimeout(() => {
          this.runLoadingBar();
          resolve(new Date());
        }, 3000);
      });
      return two;
    },
    fakeApi3() {
      const three = new Promise((resolve) => {
        setTimeout(() => {
          this.runLoadingBar();
          resolve(new Date());
        }, 5000);
      });
      return three;
    },
    // loading() {
    //   if (this.value1 === 100) {
    //     this.isDataLoading = false;
    //     this.$router.push({ name: 'monitor' });
    //   }
    //   if (this.value3 > 0) {
    //     this.value1 += 1;
    //     this.value3 -= 1;
    //     setTimeout(this.loading, 50);
    //   } else if (this.value3 === 0 && this.value2 > 0) {
    //     this.value1 += 1;
    //     this.value2 -= 1;
    //     setTimeout(this.loading, 50);
    //   }
    //   // } else {
    //   //   this.value1 = 0;
    //   //   this.value2 = 20;
    //   //   this.value3 = 80;
    //   //   setTimeout(this.loading, 100);
    //   // }
    // },
  },
};
</script>

<style>
.pgs-bg-color {
  background: linear-gradient(to top, #203680, #942248);
  position: fixed;
  width: 100%;
  height: 100%;
}
.pgs-logo {
  padding: 3%;
  margin: 3%;
}
.pgs-radius {
  border-radius: 10px;
}
.pgs-input-margin {
  margin: 10px 0 0 0;
}
.pgs-btn {
  background: rgba(95, 21, 21, 0.8);
  font-weight: bold;
  color: white;
  box-shadow: 0 5px 10px 0 rgba(92, 99, 102, 0.4);
  margin: 10px 0 20px 0;
}
.pgs-btn:hover {
  background: rgb(173, 21, 21);
}
.pgs-btn:focus{
  box-shadow: none;
}
.pgs-btn-disable {
  background: rgba(95, 21, 21, 0.8);
  font-weight: bold;
  color: white;
  box-shadow: 0 5px 10px 0 rgba(92, 99, 102, 0.4);
  margin: 10px 0 20px 0;
}
.pgs-form {
  background: rgba(255, 255, 255, 0.3);
}
.errorShack{
    -webkit-animation-name: shake;
    -webkit-animation-duration: 0.3s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
}
.pgs-hr {
  height: 2px;
  box-shadow: 0 5px 5px 0px #ffffff inset;
}
.pgs-errorMsg {
  width: 120%;
  color: #da0808;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
}

@keyframes shake{
    0%{
        transform:translateX(6px) rotate(6deg);
    }
    20%{
        transform:translateX(-5px) rotate(-5deg);
    }
    50%{
        transform:translateX(5px) rotate(5deg);
    }
    80%{
        transform:translateX(5px) rotate(5deg);
    }
   100%{
        transform:translateX(-6px) rotate(-6deg);
    }
}
#loginloading{
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}


.sk-three-bounce .sk-child {
  width: 5px;
  height: 5px;
  background-color: white;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
  animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
}
.sk-three-bounce .sk-bounce1 {
  -webkit-animation-delay: -0.32s;
          animation-delay: -0.32s;
}
.sk-three-bounce .sk-bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
@-webkit-keyframes sk-three-bounce {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); 
    }
  40% {
    -webkit-transform: scale(1);
            transform: scale(1); 
    } 
}
@keyframes sk-three-bounce {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); 
  }
  40% {
    -webkit-transform: scale(1);
            transform: scale(1); 
  } 
}

</style>
