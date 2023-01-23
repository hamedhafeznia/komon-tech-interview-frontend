import { Connection as IConnection } from "@/types/connection.interface";

const baseURL = "https://dummyjson.com";

let mockData: { data: IConnection[] } = {
  data: [],
};

const mockDataFromStorage = localStorage.getItem("mockDataStorage");
if (mockDataFromStorage) {
  mockData.data = JSON.parse(mockDataFromStorage);
}

if (typeof localStorage === "undefined" || mockData.data === null) {
  mockData = {
    data: [
      {
        id: 1,
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

  async delete(url: string, id: number) {
    // Return a mocked response for the DELETE request
    mockData.data = mockData.data.filter((val) => val.id !== id);
    console.log(mockData.data, id);
    localStorage.setItem("mockDataStorage", JSON.stringify(mockData.data));
    return {};
  },
};

export const fetchConnectionData = async () => {
  try {
    const response = await fetch(`${baseURL}/posts?limit=10&skip=10&userId`);
    const data = await response.json();
    return data.posts;
  } catch (err) {
    console.error(err);
  }
};

export const searchConnectionData = async (query: string) => {
  try {
    const response = await fetch(`${baseURL}/posts/search?q=${query}&limit=10`);
    const data = await response.json();
    return data.posts;
  } catch (err) {
    console.error(err);
  }
};
