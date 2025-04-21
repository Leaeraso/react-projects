import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUsersActions } from "../hooks/useUsersActions";
import React, { useState } from "react";
export function CreateUser() {
  const { handleAddUser } = useUsersActions();
  const [result, setResult] = useState<"ok" | "ko" | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResult(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const user = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      github: formData.get("github") as string,
    };

    if (!user.name || !user.email || !user.github) {
      return setResult("ko");
    }

    handleAddUser(user);
    setResult("ok");

    form.reset();
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Add user</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <Label>Name</Label>
            <Input name="name" type="text" placeholder="John Doe" />
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="JohnDoe@example.com"
            />
            <Label>GitHub</Label>
            <Input name="github" type="text" placeholder="JohnDoe" />

            <div className="mt-4 flex flex-col justify-center items-center w-full gap-y-2">
              <Button type="submit" className="w-[35%]">
                Create user
              </Button>
              <span>
                {result === "ok" && (
                  <Badge className="bg-green-500">Saved successfully</Badge>
                )}
                {result === "ko" && (
                  <Badge className="bg-red-500">
                    There is an error in the form
                  </Badge>
                )}
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
