<template>
  <div id ="nowTime">
    <p>{{ nowTime }}</p>
    <p>Counter: {{ counter }}</p>
    <button @click="clickCounter">click++</button>
    <p>Time Counter: {{ timeCounter }}</p>
    <button @click="startTimeCounter">start click</button>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        nowTime: new Date(),
        counter: 1,
        timeCounter: 0,
      };
    },
    mounted() {
      const tthis = this;
      this.timer = setInterval(() => {
        tthis.nowTime = new Date();
      }, 1000);
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
    methods: {
      timeRunner() {
        this.nowTime = new Date();
      },
      clickCounter() {
        this.counter += 1;
      },
      startTimeCounter() {
        // const self = this;
        // /* eslint-disable prefer-arrow-callback */
        // setInterval(function timer() {
        //   self.timeCounter += 1;
        // }, 1000);

        setInterval(() => {
          this.timeCounter += 1;
        }, 1000);
      },
    },
  };

</script>

<style>
</style>
