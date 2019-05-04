<template>
  <div id ="toDoList">
    <div id ="addList">
      <h2>To Do List</h2>
      <input v-model="newItem" placeholder="New Item">
      <button @click="addItemEvent">Add++</button>
    </div>
    <div id ="showList">
      <table>
        <tr>
          <th>Done</th>
          <th>No.</th>
          <th>Item</th>
          <th>Time</th>
          <th></th>
          <th></th>
        </tr>
        <tr v-for="(item,key) in toDoList" v-bind:key="item.key">
          <td><button @click="doneItemEvent(key)">V</button></td>
          <td v-bind:class="{'done': item.done}">{{key}}</td>
          <td v-bind:class="{'done': item.done}">{{item.item}}</td>
          <td v-bind:class="{'done': item.done}">{{item.time}}</td>
          <td><button @click="ChangeNoItemEvent(key, 'up')">Up</button></td>
          <td><button @click="ChangeNoItemEvent(key, 'down')">Down</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        newItem: null,
        toDoList: [],
      };
    },
    methods: {
      addItemEvent() {
        this.toDoList.push({ item: this.newItem, time: new Date(), done: false });
      },
      doneItemEvent(index) {
        this.toDoList[index].done = true;
      },
      ChangeNoItemEvent(index, action) {
        const tempItem = {};
        let change1 = 1;
        let change2 = 0;
        if (action === 'up') {
          if (index === 0) return;
          change1 = 1;
          change2 = 0;
        } else {
          if (index === this.toDoList.length - 1) return;
          change1 = 0;
          change2 = 1;
        }
        tempItem.item = this.toDoList[index - change1].item;
        tempItem.time = this.toDoList[index - change1].time;
        tempItem.done = this.toDoList[index - change1].done;
        this.toDoList[index - change1].item = this.toDoList[index + change2].item;
        this.toDoList[index - change1].time = this.toDoList[index + change2].time;
        this.toDoList[index - change1].done = this.toDoList[index + change2].done;
        this.toDoList[index + change2].item = tempItem.item;
        this.toDoList[index + change2].time = tempItem.time;
        this.toDoList[index + change2].done = tempItem.done;
      },
    },
  };

</script>

<style>
.done {
	text-decoration: line-through;
	color: grey;
}
</style>
