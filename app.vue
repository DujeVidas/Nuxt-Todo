<template>
  <div class="flex gap-5 justify-center items-center">
    <input
      class="border rounded border-black shadow-md"
      v-model="todoTitle"
      placeholder="Add a Todo"
    />

    <input
      type="date"
      class="border rounded border-black shadow-md"
      placeholder="Date"
      @input="date = $event.target.value"
      :value="today"
    />

    <VBtn @click="test">Add Todo</VBtn>
  </div>

  <ListTodos :key="componentKey" @refresh-component="updateChildComponent" />
</template>

<script setup>
const date = ref("");
const todoTitle = ref("");
const componentKey = ref(0);
let today = new Date().toJSON().slice(0, 10);

const test = async () => {
  if (!date.value) {
    date.value = today;
  }
  createTodo(todoTitle.value, date.value).then(() => {
    updateChildComponent();
  })
};

const updateChildComponent = () => {
    componentKey.value += 1;
}
</script>
