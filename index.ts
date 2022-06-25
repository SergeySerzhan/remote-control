import Jimp from 'jimp';
import {httpServer} from './src/http_server';
import { WebSocketServer, createWebSocketStream } from 'ws';
import 'dotenv/config';

import { handleCmd } from './src/helpers/handleCmd';

console.log(`Start static http server on the ${process.env.HTTP_PORT || 3000} port!`);
httpServer.listen(process.env.HTTP_PORT || 3000);

const wss = new WebSocketServer({port: <number>(process.env.WS_PORT || 8080)});

wss.on('connection', function connection(ws) {
  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });
  duplex.on('data', (data: string) => {
    console.log('received: %s', data);

    const newData = handleCmd(data);

    duplex.write(newData);
  });
});

process.on('close', () => {
  httpServer.close();
  wss.close();
  process.exit();
})


