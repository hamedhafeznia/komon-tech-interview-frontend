export interface Connection {
  id?: number;
  name: string;
  username: string;
  platform: string;
}

export interface connectionData {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}
