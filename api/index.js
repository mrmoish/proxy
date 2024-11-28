const ModuleURL = require('url');

// Экспортируем асинхронную функцию-обработчик, которая отвечает на HTTP-запросы
// export -  функцию доступной за пределами файла.
// export async default function handler(req, res) { 
// не работает без default(без которого не нужно прямо указывать точное имя фунции при работе из другого файла)
export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            // URL внешнего API
            const apiUrl = 'https://wol.jw.org';
            
            // Запрос данных с внешнего сайта
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Ошибка запроса: ${response.statusText}`);
            }
            
            const html = await response.text(); // Парсинг JSON-ответа

            // Возврат данных клиенту
            res.setHeader('Content-Type', 'text/html');
            res.status(200).send(html);
        } catch (error) {
            // Обработка ошибок
            res.status(500).json({ error: 'Ошибка получения данных', details: error.message });
        }
    } else {
        res.status(405).json({ error: 'Метод не поддерживается' });
    }
}
