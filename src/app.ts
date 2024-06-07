import { MemoryDB, addKeyword, createBot, createFlow, createProvider } from '@bot-whatsapp/bot';
import { BaileysProvider, handleCtx } from '@bot-whatsapp/provider-baileys';

const flowBienvenida = addKeyword('hola').addAnswer('Hola, ¿en qué puedo ayudarte?');

const main = async () => {

  const provider = createProvider(BaileysProvider);

  provider.initHttpServer(3002);

  provider.http.server.post('/send-message', handleCtx( async(bot, req, res) => {
    await bot.sendMessage('5492262638425', 'Hola, ¿en qué puedo ayudarte vagancia?', {});
    res.end('Mensaje enviado');
  }));

  await createBot({
    flow: createFlow([flowBienvenida]),
    database: new MemoryDB(),
    provider,
  });

}

main();
