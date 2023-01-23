import { Connection as IConnection } from "@/types/connection.interface";

let mockData: { data: IConnection[] } = {
  data: JSON.parse(localStorage.getItem("mockDataStorage")),
};

if (typeof localStorage === "undefined" || mockData.data === null) {
  mockData = {
    data: [
      {
        id: "1",
        name: "Example Connection",
        username: "exampleuser",
        platform: "Instagram",
      },
    ],
  };
  localStorage.setItem("mockDataStorage", JSON.stringify(mockData.data));
}

export const mockApi = {
  async get(url: string) {
    // Return a mocked response for the GET request
    return mockData;
  },

  async post(url: string, data: IConnection) {
    // Return a mocked response for the POST request
    const newData = { data: { ...data, id: Date.now() } };
    mockData.data.push(newData.data);
    localStorage.setItem("mockDataStorage", JSON.stringify(mockData.data));
    return newData;
  },
  async put(url: string, data: IConnection) {
    // Return a mocked response for the PUT request
    const index = mockData.data.findIndex((val) => val.id === data.id);
    mockData.data[index] = data;
    localStorage.setItem("mockDataStorage", JSON.stringify(mockData.data));
    return { data };
  },
  async delete(url: string, id: string) {
    // Return a mocked response for the DELETE request
    mockData.data = mockData.data.filter((val) => val.id !== id);
    console.log(mockData.data, id);
    localStorage.setItem("mockDataStorage", JSON.stringify(mockData.data));
    return {};
  },
};
