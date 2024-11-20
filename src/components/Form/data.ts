type TBadge = {
    names: string[];
};
type TData = {
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
        title: "Тема",
        marked: true,
        childrenItems:
            "На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller",
        edit: true,
    },
    {
        title: "Статус",
        childrenItems: "Новая",
        edit: true,
    },
    {
        title: "Описание",
        childrenItems: "",
        edit: true,
    },
    {
        title: "Продукт",
        childrenItems: "Platform",
        edit: true,
        searchBtn: true,
    },
    {
        title: "Рабочие заметки",
        marked: true,
        childrenItems: "Проверить ACL id=172830402014193655",
        edit: true,
    },
    {
        title: "Приоритет",
        childrenItems: "Средний",
        edit: true,
    },
    {
        title: "Ответственный",
        childrenItems: {
            names: ["Констатантин Константинопольский"],
        },
        addBtn: true,
        searchBtn: true,
    },
    {
        title: "Группа",
        childrenItems: {
            names: ["Support Group"],
        },
        addBtn: true,
        searchBtn: true,
    },
    {
        title: "Комментарии",
        childrenItems: "",
        edit: true,
        wide: true,
    },
    {
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
        title: "Когда открыто",
        childrenItems: "",
        edit: true,
        calendarBtn: true,
    },
    {
        title: "Когда создано",
        childrenItems: "22.10.2024",
        edit: true,
        calendarBtn: true,
    },
    {
        title: "Кем открыто",
        childrenItems: {
            names: ["Андрей Пивоваров"],
        },
        addBtn: true,
        searchBtn: true,
        calendarBtn: true,
    },
    {
        title: "Кем создано",
        childrenItems: {
            names: ["Андрей Пивоваров"],
        },
        addBtn: true,
        searchBtn: true,
        calendarBtn: true,
    },
];
