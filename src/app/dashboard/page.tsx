"use client";
import React, { useState, useEffect } from "react";
import { AddConnectionForm } from "@/components/AddConnectionForm";
import { ConnectionsList } from "@/components/ConnectionsList";

import { Connection as IConnection } from "@/types/connection.interface";
import { mockApi } from "@/API/mockAPI";

const Dashboard = () => {
  const [connections, setConnections] = useState<IConnection[]>([]);

  const handleAddConnection = async (newConnection: IConnection) => {
    const response = await mockApi.post("/connections", newConnection);
    if (!!response.data) {
      setConnections([...connections, response.data]);
      console.log(connections);
    }
  };

  const handleEditConnection = async (updatedConnection: IConnection) => {
    const response = await mockApi.put(
      `/connections/${updatedConnection.id}`,
      updatedConnection
    );
    const updatedConnections = connections.map((connection) => {
      if (connection.id === updatedConnection.id) {
        return response.data;
      }
      return connection;
    });
    setConnections(updatedConnections);
  };

  const handleDeleteConnection = async (id: number) => {
    await mockApi.delete(`/connections/${id}`, id);
    setConnections(
      connections.filter((connection: IConnection) => connection.id !== id)
    );
  };

  useEffect(() => {
    const fetchConnections = async () => {
      const response = await mockApi.get("/connections");
      setConnections(response.data);
    };
    fetchConnections();
  }, []);

  return (
    <>
      <AddConnectionForm onAddConnection={handleAddConnection} />
      <ConnectionsList
        connections={connections}
        onEditConnection={handleEditConnection}
        onDeleteConnection={handleDeleteConnection}
      />
    </>
  );
};

export default Dashboard;
