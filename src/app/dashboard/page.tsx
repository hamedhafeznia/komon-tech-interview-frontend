"use client";
import React, { useState, useEffect } from "react";
import { AddConnectionForm } from "@/components/AddConnectionForm";
import { ConnectionsList } from "@/components/ConnectionsList";
import { ConnectionDetails } from "@/components/ConnectionDetails";

import { Connection as IConnection } from "@/types/connection.interface";

import { mockApi } from "@/API/mockAPI";

const Dashboard = () => {
  // State to store the social media connections
  const [connections, setConnections] = useState<IConnection[]>([]);

  const fetchConnections = async () => {
    const response = await mockApi.get("/connections");
    setConnections(response.data);
  };

  const handleAddConnection = async (newConnection: IConnection) => {
    const response = await mockApi.post("/connections", newConnection);
    setConnections([...connections, response.data]);
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

  const handleDeleteConnection = async (id: string) => {
    await mockApi.delete(`/connections/${id}`, id);
    setConnections(
      connections.filter((connection: IConnection) => connection.id !== id)
    );
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div>
      <AddConnectionForm onAddConnection={handleAddConnection} />
      <ConnectionsList
        connections={connections}
        onEditConnection={handleEditConnection}
        onDeleteConnection={handleDeleteConnection}
      />
    </div>
  );
};

export default Dashboard;
