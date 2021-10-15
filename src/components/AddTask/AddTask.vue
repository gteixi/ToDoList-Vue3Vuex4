<template>
  <div class="header">
    <h1 class="header_date">
      {{ getDate }}
    </h1>
    <hr>  
    <input
      placeholder="new task..."
      maxlength="15"
      class="header_input"
      :value="taskText"
      type="text"
      @change="taskTextChange"
    >
    <button
      class="createTaskButton"
      @click="newDataTask"
    >
      Create
    </button>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex'
import { Data } from './interfaces';
import { v4 as id } from 'uuid';

export default {
  data(): Data {
    return { 
      taskText: ""
    }
  },

  computed:{
    ...mapGetters(['allTasks', 'getDate'])
  },

  methods: {
    ...mapActions(['addTask']),
    taskTextChange(e: Event): void {
      this.taskText = e.target.value;
    },

    newDataTask(): void {
      this.addTask(
        {
        title: this.taskText,
        id: id()
        });
      this.taskText = "";
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.header {
  &_date {
    margin-top: 20px;
    font-weight: 100;
  }

  &_input {
    font-style:italic;
    font-weight: 700;
    font-size: 15px;
    margin-top: 25px,;
    @include size(180px, 30px);
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-color: transparent;
    border-radius: 20px;
    text-align: center;
  }
}

.createTaskButton {
  font-weight: 500;
  font-size: 18px;
  margin-left: 10px;
  @include size(78px, 38px);
  background: #F4E558;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border-color: transparent;


  &:hover {
  background: #fff7b1;
	letter-spacing: 1px;
	-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
	transition: all 0.4s ease 0s;
  }
         
}

hr {
  background-color: black;
  margin-top: 18px; 
}

</style>