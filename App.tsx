
import React, { useState, useEffect } from "react";
import { User, Todo } from "@/types";
import { mockTodos } from "@/utils/mockApi";
import AuthForm from "@/components/AuthForm";
import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (currentUser) {
      setTodos(mockTodos);
    }
  }, [currentUser]);

  const addTodo = (title: string, description: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEdit = (todo: Todo) => {
    alert("Editing is not implemented in this version.");
  };

  if (!currentUser) {
    return <AuthForm onLogin={setCurrentUser} />;
  }

  return (
    <main className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Hello, {currentUser.name}</h1>
      <TodoForm onAdd={addTodo} />
      <div className="space-y-4">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleComplete}
            onDelete={deleteTodo}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </main>
  );
}
