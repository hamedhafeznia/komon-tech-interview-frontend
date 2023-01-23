import React, { useState } from "react";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";

import { Connection as IConnection } from "@/types/connection.interface";

interface ConnectionProps {
  connection: IConnection;
  onEdit: (connection: {
    name: string;
    username: string;
    platform: string;
  }) => void;
  onDelete: (id: string) => void;
}

export const Connection = ({
  connection,
  onEdit,
  onDelete,
}: ConnectionProps) => {
  // State for editing the connection
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(connection.name);
  const [username, setUsername] = useState(connection.username);
  const [platform, setPlatform] = useState(connection.platform);

  if (isEditing) {
    return (
      <form className="bg-white rounded-lg">
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

        <div className="flex items-center justify-between">
          <Button
            label="Save"
            onClick={() => onEdit({ name, username, platform })}
            className="bg-green-500 text-white hover:bg-green-600"
          />
          <Button
            label="Cancel"
            onClick={() => setIsEditing(false)}
            className="bg-red-500 text-white hover:bg-red-600"
          />
        </div>
      </form>
    );
  }

  return (
    <div className="bg-white rounded-lg">
      <h3 className="text-xl font-medium text-gray-700">{connection.name}</h3>
      <p className="text-sm text-gray-600">Username: {connection.username}</p>
      <p className="text-sm text-gray-600">Platform: {connection.platform}</p>
      <div className="flex items-center justify-between">
        <Button
          label="Edit"
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 text-white hover:bg-blue-600"
        />
        <Button
          label="Delete"
          onClick={() => onDelete(connection.id)}
          className="bg-red-500 text-white hover:bg-red-600"
        />
      </div>
    </div>
  );
};
