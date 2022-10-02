export interface Message {
  author: string;
  value: string;
}

export type Messages = Message[];

export interface Chat {
  id: string;
  name: string;
}
