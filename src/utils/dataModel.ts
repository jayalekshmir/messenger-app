export type Message = {
  sender: string;
  text: string;
  time: Date;
};

export type ChatContextType = {
  selectedFriend: string | null;
  setSelectedFriend: (friend: string) => void;
  chats: Record<string, Message[]>;
  sendMessage: (friend: string, message: string) => void;
  chatEndRef: any;
  friendsList: string[];
};
