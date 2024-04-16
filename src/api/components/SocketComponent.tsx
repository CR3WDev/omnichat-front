import { useEffect, useRef, useState } from 'react';
import socketIOClient, { Socket } from 'socket.io-client';
import { Message } from 'types/message';


interface IncomingMessage extends Message {
  ownedByCurrentUser: boolean;
}

if (!process.env.REACT_APP_SOCKET_SERVER_URL) {
  throw new Error("REACT_APP_SOCKET_SERVER_URL is not defined");
}
const SOCKET_SERVER_URL = process.env.REACT_APP_SOCKET_SERVER_URL;

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

export const SocketComponent = (roomId: string) => {
  const [messages, setMessages] = useState<IncomingMessage[]>([]);
  const socketRef = useRef<Socket>();

  useEffect(() => {
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message: Message) => {
      const incomingMessage: IncomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current!.id,
      };
      setMessages((prevMessages) => [...prevMessages, incomingMessage]);
    });

    return () => {
      socketRef.current!.disconnect();
    };
  }, [roomId]);

  const sendMessage = (messageBody: string) => {
    socketRef.current!.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current!.id,
    });
  };

  return { messages, sendMessage };
};
