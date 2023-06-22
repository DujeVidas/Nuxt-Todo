<template>
  <VCard
    prepend-icon="mdi-check-outline"
    :color="backgroundColor"
    width="800px"
  >
    <template v-slot:prepend>
      <VIcon @click="update" icon="mdi-check-outline"></VIcon>
    </template>
    <template v-slot:append>
      <VIcon @click="del" icon="mdi-trash-can"></VIcon>
    </template>
    <template v-slot:title>
      {{ todo.title }}
    </template>
    <div class="flex justify-center">
      {{ todo.date }}
    </div>
    
  </VCard>
</template>

<script setup>
const emit = defineEmits(["refresh-component"]);
const props = defineProps(["todo", "id"]);

const update = async () => {
  await updateTodo(props.id, !props.todo.done).then(() => {
    emit("refresh-component");
  });
};

const del = async () => {
  await deleteTodo(props.id).then(() => {
    emit("refresh-component");
  });
};

const backgroundColor = computed(() => {
  return props.todo.done ? "green" : "";
});
</script>

<style scoped></style>
