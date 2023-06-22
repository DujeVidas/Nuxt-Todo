<template>
  <div v-if="todos.length != 0">
    <ul v-for="todo in todos">
      <li class="p-5 flex justify-center">
        <TodoCard
          :todo="todo.attributes"
          :id="todo.id"
          @refresh-component="$emit('refresh-component')"
        />
      </li>
    </ul>
  </div>
  <div v-else class="flex justify-center">
    <p>You dont have any Todos... Add Some...</p>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["refresh-component"]);
interface Attributes {
  title: String;
  date: String;
  done: Boolean;
}

interface Todos {
  id: Number;
  attributes: Attributes;
}

const todos = ref<Todos[]>([]);

onMounted(async () => {
  try {
    todos.value = await getAllTodos();

    console.log(todos.value);
  } catch (err) {
    console.error(err);
  }
});

const getTodos = async () => {
  try {
    todos.value = await getAllTodos();

    console.log(todos.value);
  } catch (err) {
    console.error(err);
  }
};
</script>

<style scoped></style>
