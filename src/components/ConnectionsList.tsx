import React from "react";
import { Connection as IConnection } from "@/types/connection.interface";

import { Connection } from "@/components/Connection";

export const ConnectionsList = ({
  connections,
  onEditConnection,
  onDeleteConnection,
}: {
  connections: IConnection[];
  onEditConnection: any;
  onDeleteConnection: any;
}) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl my-10">Connections</h2>
      {connections.map((connection) => (
        <Connection
          key={connection.id}
          connection={connection}
          onEdit={onEditConnection}
          onDelete={onDeleteConnection}
        />
      ))}
    </div>
  );
};
