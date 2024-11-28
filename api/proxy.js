// Экспортируем асинхронную функцию-обработчик, которая отвечает на HTTP-запросы
// export -  функцию доступной за пределами файла.
// export async default function handler(req, res) { 
// не работает без default(без которого не нужно прямо указывать точное имя фунции при работе из другого файла)
export default async function handler(req, res) {
  const targetUrl = req.query.url;
  try {
    const response = await fetch(targetUrl);
    
    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }
    const data = await response.text();

    // res.send(response.data);
    res.send(data);
  } catch (error) {
      res.status(500).send('Ошибка при выполнении запроса');
  }
});

