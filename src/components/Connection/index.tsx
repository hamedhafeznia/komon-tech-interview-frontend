import React, { useState } from "react";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import { ConnectionDetails } from "@/components/ConnectionDetails";

import { Connection as IConnection } from "@/types/connection.interface";

interface ConnectionProps {
  connection: IConnection;
  onEdit: (connection: IConnection) => void;
  onDelete: (id: string) => void;
}

export const Connection = ({
  connection,
  onEdit,
  onDelete,
}: ConnectionProps) => {
  // State for editing the connection
  const [isEditing, setIsEditing] = useState(false);
  const [showConnectionDetail, setShowConnectionDetail] = useState(false);
  const [name, setName] = useState(connection.name);
  const [username, setUsername] = useState(connection.username);
  const [platform, setPlatform] = useState(connection.platform);

  const editConnection = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !username.trim() || !platform.trim()) {
      alert("Please fill out the form");
    } else {
      onEdit({ id: connection.id, name, username, platform });
      setIsEditing(false);
    }
  };

  const handlerShowConnectionDetails = () =>
    setShowConnectionDetail(!showConnectionDetail);

  if (isEditing) {
    return (
      <form className="flex justify-between bg-slate-100 rounded-xl p-3 dark:bg-slate-800 mb-5">
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
            onClick={(e) => editConnection(e)}
            className="bg-green-500 text-white hover:bg-green-600"
          />
          <Button
            label="Cancel"
            onClick={() => setIsEditing(false)}
            className="bg-red-500 text-white hover:bg-red-600 ml-4"
          />
        </div>
      </form>
    );
  }

  return (
    <>
      <div
        onClick={handlerShowConnectionDetails}
        className="flex justify-between bg-slate-100 rounded-xl p-3 dark:bg-slate-800 mb-5 cursor-pointer"
      >
        <div>
          <h3 className="text-xl font-medium text-gray-700">
            {connection.name}
          </h3>
          <p className="text-sm text-gray-600">
            Username: {connection.username}
          </p>
          <p className="text-sm text-gray-600">
            Platform: {connection.platform}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Button
            label="Edit"
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white hover:bg-blue-600"
          />
          <Button
            label="Delete"
            onClick={() => onDelete(connection.id)}
            className="bg-red-500 text-white hover:bg-red-600 ml-5"
          />
        </div>
      </div>

      {!!showConnectionDetail && <ConnectionDetails />}
    </>
  );
};
