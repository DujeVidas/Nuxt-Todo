import axios from "axios";

export async function getAllTodos() {
  try {
    const response = await axios.get(`http://localhost:1337/api/todos`);
    return response.data.data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch todos");
  }
}

export async function createTodo(newTitle: string, newDate: string) {
  try {
    axios
      .post("http://localhost:1337/api/todos", {
        data: {
          title: newTitle,
          date: newDate,
          done: false,
        },
      })
      .then((response) => {
        console.log(response);
      });
  } catch (err) {
    console.error(err);
  }
}

export async function updateTodo(id: Number, isDone: Boolean) {
  try {
    axios
      .put(`http://localhost:1337/api/todos/${id}`, {
        data: {
          done: isDone,
        },
      })
      .then((response) => {
        console.log(response);
      });
  } catch (err) {
    console.error(err);
  }
}

export async function deleteTodo(id: Number) {
  try {
    axios.delete(`http://localhost:1337/api/todos/${id}`).then((response) => {
      console.log(response);
    });
  } catch (err) {
    console.error(err);
  }
}
