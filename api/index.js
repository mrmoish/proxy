const ModuleURL = require('url');

// Экспортируем асинхронную функцию-обработчик, которая отвечает на HTTP-запросы
// export -  функцию доступной за пределами файла.
// export async default function handler(req, res) { 
// не работает без default(без которого не нужно прямо указывать точное имя фунции при работе из другого файла)
export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            // URL внешнего API
            const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
            
            // Запрос данных с внешнего сайта
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Ошибка запроса: ${response.statusText}`);
            }
            
            const data = await response.json(); // Парсинг JSON-ответа

            // Возврат данных клиенту
            res.status(200).json({ message: 'Данные получены!', data });
        } catch (error) {
            // Обработка ошибок
            res.status(500).json({ error: 'Ошибка получения данных', details: error.message });
        }
    } else {
        res.status(405).json({ error: 'Метод не поддерживается' });
    }
}
