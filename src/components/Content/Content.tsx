import Form from "../Form/Form";

const text =
    "STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller";

export function Content() {
    return (
        <div className="content">
            <h1 className="content__title">{text}</h1>
            <Form />
        </div>
    );
}
