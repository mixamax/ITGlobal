type TBadge = {
    names: string[];
};
type TData = {
    id: number;
    title: string;
    marked?: boolean;
    childrenItems: string | TBadge;
    edit?: boolean;
    searchBtn?: boolean;
    addBtn?: boolean;
    calendarBtn?: boolean;
    wide?: boolean;
};

export const data: TData[] = [
    {
        id: 1,
        title: "Тема",
        marked: true,
        childrenItems:
            "На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller",
        edit: true,
    },
    {
        id: 2,
        title: "Статус",
        childrenItems: "Новая",
        edit: true,
    },
    { id: 3, title: "Описание", childrenItems: "", edit: true },
    {
        id: 4,
        title: "Продукт",
        childrenItems: "Platform",
        edit: true,
        searchBtn: true,
    },
    {
        id: 5,
        title: "Рабочие заметки",
        marked: true,
        childrenItems: "Проверить ACL id=172830402014193655",
        edit: true,
    },
    { id: 6, title: "Приоритет", childrenItems: "Средний", edit: true },
    {
        id: 7,
        title: "Ответственный",
        childrenItems: {
            names: ["Констатантин Константинопольский"],
        },
        addBtn: true,
        searchBtn: true,
    },
    {
        id: 8,
        title: "Группа",
        childrenItems: {
            names: ["Support Group"],
        },
        addBtn: true,
        searchBtn: true,
    },
    { id: 9, title: "Комментарии", childrenItems: "", edit: true, wide: true },
    {
        id: 10,
        title: "Группа",
        childrenItems: {
            names: [
                "Андрей Пивоваров",
                "Максим Галактионов",
                "Алла Лин",
                "Константин Константинопольский Константинович",
                "Игорь Иванченко",
                "Юлия Эйчаровна",
                "Артём Подпрыгайко-Саппортов",
                "Илья Вазнец",
                "Михаил Вортенов",
                "Наталья Нашевна",
                "Евгения Итамовна",
                "Алиса Киральчук",
            ],
        },
        addBtn: true,
        searchBtn: true,
    },
    {
        id: 11,
        title: "Когда открыто",
        childrenItems: "",
        edit: true,
        calendarBtn: true,
    },
    {
        id: 12,
        title: "Когда создано",
        childrenItems: "22.10.2024",
        edit: true,
        calendarBtn: true,
    },
    {
        id: 13,
        title: "Кем открыто",
        childrenItems: {
            names: ["Андрей Пивоваров"],
        },
        addBtn: true,
        searchBtn: true,
        calendarBtn: true,
    },
    {
        id: 14,
        title: "Кем создано",
        childrenItems: {
            names: ["Андрей Пивоваров"],
        },
        addBtn: true,
        searchBtn: true,
        calendarBtn: true,
    },
];
