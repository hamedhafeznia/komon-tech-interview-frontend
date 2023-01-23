import React from "react";
import { Connection as IConnection } from "@/types/connection.interface";

interface Props {
  connections: IConnection[];
  selectedConnection: IConnection | null;
  setSelectedConnection: (connection: IConnection | null) => void;
}

export const ConnectionDetails = ({
  connections,
  selectedConnection,
  setSelectedConnection,
}: Props) => {
  if (!selectedConnection) {
    return (
      <div>
        <h2>Connection Details</h2>
        <p>No connection selected.</p>
      </div>
    );
  }

  const handleAddAsProfilePicture = () => {
    // Add selected connection as profile picture
    console.log(`${selectedConnection.name} added as profile picture.`);
  };

  const handleShareWithCommunity = () => {
    // Share selected connection with community
    console.log(`${selectedConnection.name} shared with community.`);
  };

  const handleCreatePoll = () => {
    // Create poll
    console.log(`Poll created using ${selectedConnection.name}`);
  };

  return (
    <div>
      <h2>Connection Details</h2>
      <h3>{selectedConnection.name}</h3>
      <p>Username: {selectedConnection.username}</p>
      <p>Platform: {selectedConnection.platform}</p>
      <button type="button" onClick={handleAddAsProfilePicture}>
        Add as Profile Picture
      </button>
      <button type="button" onClick={handleShareWithCommunity}>
        Share with Community
      </button>
      <button type="button" onClick={handleCreatePoll}>
        Create Poll
      </button>
      <select
        onChange={(e) =>
          setSelectedConnection(
            connections.find((c) => c.id === parseInt(e.target.value))
          )
        }
      >
        {connections.map((connection) => (
          <option key={connection.id} value={connection.id}>
            {connection.name}
          </option>
        ))}
      </select>
    </div>
  );
};
