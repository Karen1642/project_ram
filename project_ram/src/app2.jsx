import { useState, useEffect } from 'react'

function App2() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Запрос к API при первом рендере компонента
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json()) // Преобразуем ответ в JSON
        .then((data) => {
            setTodos(data); // Сохраняем полученные данные
            setLoading(false); // Отключаем индикатор загрузки
        });
    }, []); // Пустой массив зависимостей - вызов только при монтировании

    if (loading) return <div>Загрузка...</div>;

    return (
        <ul>
        {todos.map(todo => (
            <li key="1">{todo.info.count}</li> // Выводим названия задач
        ))}
        </ul>
    );

}

export default App2
