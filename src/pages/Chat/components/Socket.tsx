import { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

const ENDPOINT = "http://127.0.0.1:3000";

export const SocketComponent = () => {
  const [response, setResponse] = useState("Hello Word");

  useEffect(() => {
    const socket: Socket = io(ENDPOINT);

    socket.on("FromAPI", (data: string) => {
      setResponse(data);
    });

    socket.emit("message", response);

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <p>{response}</p>
    </div>
  );
}
