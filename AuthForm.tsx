
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { mockLogin } from "@/utils/mockApi";

interface Props {
  onLogin: (user: User) => void;
}

export default function AuthForm({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = mockLogin(email);
    onLogin(user);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <Label>Email</Label>
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit" className="w-full">
        {showLogin ? "Login" : "Sign Up"}
      </Button>
    </form>
  );
}
