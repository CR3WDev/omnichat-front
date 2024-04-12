import { useEffect, useRef, useState } from 'react';
import socketIOClient, { Socket } from 'socket.io-client';

interface Message {
  body: string;
  senderId: string;
}

interface IncomingMessage extends Message {
  ownedByCurrentUser: boolean;
}

const SOCKET_SERVER_URL = "http://127.0.0.1:3000";
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

export const SocketService = (roomId: string) => {
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
