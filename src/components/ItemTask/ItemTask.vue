<template>
  <div class="list_container-task">
    <p
      v-if="!editTask"
      :style="styleDoneTask(task)"
    >
      {{ task.title }}
    </p>

    <input
      v-else
      maxlength="15"
      class="edit_input"
      :value="taskText"
      type="text"
      @change="taskTextChange"
    >

    <div class="list_container-buttons">
      <div class="list_container-buttons--edit">
        <Icon
          icon="akar-icons:edit"
          color="black"
          @click="newUpdateTask(task)"
        >
          {{ editTask ? 'Update': 'Edit' }}
        </Icon>
      </div>
      <div class="list_container-buttons--done">
        <Icon
          icon="ic:sharp-done-outline"
          color="#0fa958"
          @click="changeCompletedTask(task)"
        >
          Done
        </Icon>
      </div>
      <div class="list_container-buttons--delete">
        <Icon
          icon="ci:trash-full"
          color="red"
          @click="deleteTask(task.id)"
        >
          Delete
        </Icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import { Icon } from '@iconify/vue';
import { Task } from './interfaces';

export default {
  components: {
    Icon,
  },
  props: {
    task: Task
  },

  data(): Object {
  return {
    taskText: "",
    editTask: false
    }
  },

  methods : {
    ...mapActions(["deleteTask", "updateTask", "changeCompletedTask"]),

    taskTextChange(e: Event): void {
      this.taskText = e.target.value;
    },

    newUpdateTask(task): void {
      this.editTask = !this.editTask;

      if (this.editTask) {
        this.taskText = task.title;
        this.updateTask(task);
      } else {
        task.title = this.taskText;
      }
    },
    styleDoneTask(task: Event): any {
      const textDecoration = task.completed ? "line-through" : "none";
      return { textDecoration };
    },
  }
}
</script>

<style lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.list_container {
    &-task {
        font-size: 20px;
        font-weight: 400;
        @include display (flex, row, wrap, none);
        justify-content: space-between;
        align-items: center;
        width: 100%;
        justify-content: space-around;
    }
    &-buttons {
        @include display (flex, row, wrap, center);
        @include size (100px, none);
        justify-content: space-around;
        cursor: pointer;
    }
    &-buttons--edit:hover,
    &-buttons--done:hover,
    &-buttons--delete:hover{
        transform: scale(1.5);
        transition: all 0.3s linear;
    }
}

.edit_input {
  font-style:italic;
  font-weight: 700;
  font-size: 15px;
  @include size(150px, 30px);
  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-color: transparent;
  border-radius: 20px;
  text-align: center;
}
</style>