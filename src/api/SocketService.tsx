import { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

const ENDPOINT = "http://127.0.0.1:3000";

export const SocketService = () => {
  const [response, setResponse] = useState("Hello Word");

  useEffect(() => {
    const socket: Socket = io(ENDPOINT);

    socket.emit("message", response);

    socket.on("response", (data: string) => {
      console.log(data);
      setResponse(data);
    });


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
