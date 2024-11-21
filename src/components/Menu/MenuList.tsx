import imagePath from "../../assets/images/arrow.svg";

const data = [
    "Моя работа",
    "Структура портала",
    "Личное расписание",
    "Отсутствие на рабочем месте",
    "Портфель услуг",
    "Дашборды",
    "Доски задач",
    "Обращения",
    "События",
    "Инциденты",
    "Проблемы",
    "Настройка каталогов",
    "Запросы на обслуживание",
    "Запросы на изменение",
    "Управление конфигурациями",
];

export function MenuList() {
    return (
        <div className="menu__menu-list">
            {data.map((item) => (
                <div className="menu__menu-item" key={item}>
                    <img height={10} src={imagePath} alt="иконка стрелки" />
                    {item}
                </div>
            ))}
        </div>
    );
}
