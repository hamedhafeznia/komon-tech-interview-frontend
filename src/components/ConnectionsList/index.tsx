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
  const filtredConnections = connections.filter(function (item, pos) {
    return connections.indexOf(item) == pos;
  });

  return (
    <div className="flex flex-col">
      {!!connections.length && (
        <h2 className="text-xl mt-20 mb-5">Connections</h2>
      )}
      {filtredConnections.map((connection) => (
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
