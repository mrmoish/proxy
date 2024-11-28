const ModuleURL = require('url');

// Экспортируем асинхронную функцию-обработчик, которая отвечает на HTTP-запросы
// export -  функцию доступной за пределами файла.
// export async default function handler(req, res) { 
// не работает без default(без которого не нужно прямо указывать точное имя фунции при работе из другого файла)
export default async function handler(req, res) {

    const response = await fetch('jw.org');
    if (!response.ok) {
        // res.status(200).json({ message:  ModuleURL.parse(req.url,true).query.url });
        res.status(200).json({ message: 'errrrrr'});
        // throw new Error(`Ошибка: ${response.status}`);
    }
    
    res.status(200).json({ message: 'okkik'});
      
}
