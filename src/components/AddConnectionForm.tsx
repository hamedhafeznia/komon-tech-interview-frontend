"use client";

import React, { useState } from "react";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";

interface Props {
  onAddConnection: (connection: {
    name: string;
    username: string;
    platform: string;
  }) => void;
}

export const AddConnectionForm: React.FC<Props> = ({ onAddConnection }) => {
  // State for the form inputs
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [platform, setPlatform] = useState("");

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !username.trim() || !platform.trim()) {
      alert("Please fill out the form");
    } else {
      onAddConnection({ name, username, platform });
      setName("");
      setUsername("");
      setPlatform("");
    }
  };

  return (
    <>
      <h2 className="my-10">Create New Connections</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg">
        <Input
          type="text"
          label="Name:"
          value={name}
          onChange={(e) => setName(e)}
        />
        <Input
          type="text"
          label="Username:"
          value={username}
          onChange={(e) => setUsername(e)}
        />
        <Input
          type="text"
          label="Platform:"
          value={platform}
          onChange={(e) => setPlatform(e)}
        />
        <Button label="Add Connection" onClick={() => handleSubmit} />
      </form>
    </>
  );
};
