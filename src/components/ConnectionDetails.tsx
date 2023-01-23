import React, { useEffect, useState } from "react";
import {
  Connection as IConnection,
  connectionData as IConnectionData,
} from "@/types/connection.interface";
import { fetchConnectionData } from "@/API/mockAPI";

import { Card } from "@/components/UI/Card";

interface Props {
  connections: IConnection[];
  selectedConnection: IConnection | null;
  setSelectedConnection: (connection: IConnection | null) => void;
}

export const ConnectionDetails = ({ selectedConnection }: Props) => {
  const [connectionData, setConnectionData] = useState<IConnectionData[]>([]);

  // Using mocK API to simulate the data coming from connections
  // In a real project, the data would be based on userID

  useEffect(() => {
    const fetchedConnectionData = async () => {
      const data: IConnectionData[] = await fetchConnectionData();
      setConnectionData(data);
    };
    fetchedConnectionData();
  }, []);

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
    <div className="flex flex-wrap justify-start gap-16 py-10">
      {connectionData.length &&
        connectionData.map((item) => {
          return <Card key={item.id} connectionData={item} />;
        })}
    </div>
    // <div>
    //   <button type="button" onClick={handleAddAsProfilePicture}>
    //     Add as Profile Picture
    //   </button>
    //   <button type="button" onClick={handleShareWithCommunity}>
    //     Share with Community
    //   </button>
    //   <button type="button" onClick={handleCreatePoll}>
    //     Create Poll
    //   </button>
    // </div>
  );
};
