import React from "react";

import { connectionData as IConnectionData } from "@/types/connection.interface";

interface Props {
  connectionData: IConnectionData;
}

export const Card = ({ connectionData }: Props) => {
  return (
    <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{connectionData.title}</div>
        <p className="text-gray-700 text-base">{connectionData.body}</p>
      </div>
      <div className="px-6 py-4 mt-auto">
        {connectionData.tags.length &&
          connectionData.tags.map((item, index) => {
            return (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >
                #{item}
              </span>
            );
          })}
      </div>
    </div>
  );
};
