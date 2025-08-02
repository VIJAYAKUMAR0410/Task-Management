
import React from "react";
import { Todo } from "@/types";
import { Trash2, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (todo: Todo) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: Props) {
  return (
    <div className="flex items-start justify-between border p-4 rounded-md">
      <div className="flex-1">
        <h3 className={`font-bold ${todo.completed ? "line-through text-gray-500" : ""}`}>
          {todo.title}
        </h3>
        {todo.description && <p className="text-sm text-gray-600">{todo.description}</p>}
        <p className="text-xs text-gray-400 mt-1">
          Created: {todo.createdAt.toLocaleDateString()}
        </p>
      </div>
      <div className="flex items-center gap-2 ml-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <Button variant="ghost" size="sm" onClick={() => onEdit(todo)}>
          <Edit className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onDelete(todo.id)}>
          <Trash2 className="w-4 h-4 text-red-600" />
        </Button>
      </div>
    </div>
  );
}
