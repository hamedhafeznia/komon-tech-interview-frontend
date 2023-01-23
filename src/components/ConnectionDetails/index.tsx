import React, { useEffect, useState } from "react";

import { Input } from "../UI/Input";
import { Card } from "@/components/UI/Card";

import {
  Connection as IConnection,
  connectionData as IConnectionData,
} from "@/types/connection.interface";

import { fetchConnectionData, searchConnectionData } from "@/API/mockAPI";

import useDebounce from "@/hooks/useDebounce";

export const ConnectionDetails = () => {
  const [connectionData, setConnectionData] = useState<IConnectionData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const debouncedSearch = useDebounce(searchQuery, 500);

  // Using mocK API to simulate the data coming from connections
  // In a real project, the data would be based on userID
  useEffect(() => {
    const fetchedConnectionData = async () => {
      const data: IConnectionData[] = await fetchConnectionData();
      setConnectionData(data);
    };
    fetchedConnectionData();
  }, []);

  useEffect(() => {
    if (debouncedSearch) {
      const fetchedConnectionData = async () => {
        const data: IConnectionData[] = await searchConnectionData(searchQuery);
        setConnectionData(data);
      };
      fetchedConnectionData();
    }
  }, [debouncedSearch, searchQuery]);

  return (
    <>
      <Input
        placeholder="Search"
        type="text"
        label="Search:"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e)}
      />
      <div className="flex flex-wrap justify-start gap-16 py-10">
        {!!connectionData && connectionData.length ? (
          connectionData.map((item) => {
            return <Card key={item.id} connectionData={item} />;
          })
        ) : (
          <p className="center"> Not Found </p>
        )}
      </div>
    </>
  );
};
