
import { Todo, User } from "@/types";

export const mockTodos: Todo[] = [
  {
    id: "1",
    title: "Complete project documentation",
    description: "Write comprehensive docs for the todo app",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "Review code",
    description: "Review and refactor the todo app code",
    completed: true,
    createdAt: new Date(),
  },
];

export const mockLogin = (email: string): User => ({
  id: "1",
  email,
  name: email.split("@")[0],
});
