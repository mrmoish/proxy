// Экспортируем асинхронную функцию-обработчик, которая отвечает на HTTP-запросы
// export -  функцию доступной за пределами файла.
// export async default function handler(req, res) { 
// не работает без default(без которого не нужно прямо указывать точное имя фунции при работе из другого файла)
// export default async function handler(req, res) {
//   // const targetUrl = req.query.url;
//   try {
//     // const response = await fetch(targetUrl);
    
//     // if (!response.ok) {
//     //     throw new Error(`Ошибка: ${response.status}`);
//     // }
//     // const data = await response.text();

//     // res.send(response.data);
//     res.send('ok');
//   } catch (error) {
//       res.status(500).send('Ошибка при выполнении запроса');
//   }
// });

export default function handler(req, res) {
  // Метод запроса (GET, POST и т. д.)
  const { method } = req;

  switch (method) {
    case 'GET':
      // Обработка GET-запроса
      res.status(200).json({ message: 'Hello, world!' });
      break;
    case 'POST':
      // Обработка POST-запроса
      const data = req.body;
      res.status(200).json({ message: 'Data received', data });
      break;
    default:
      // Метод не поддерживается
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
