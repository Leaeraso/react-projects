import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export function CreateUser() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Add user</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-2">
            <Label>Name</Label>
            <Input type="text" placeholder="John Doe" />
            <Label>Email</Label>
            <Input type="email" placeholder="JohnDoe@example.com" />
            <Label>GitHub</Label>
            <Input type="text" placeholder="JohnDoe" />

            <div className="mt-4">
              <Button type="submit">Create user</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
