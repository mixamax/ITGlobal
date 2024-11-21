import { Badge } from "../Badge/Badge";
import FormItem from "../FormItem/FormItem";
import { data } from "./data";

const mapData = data.map((item) => (
    <FormItem
        title={item.title}
        marked={item.marked ? true : false}
        edit={item.edit ? true : false}
        wide={item.wide ? true : false}
        searchBtn={item.searchBtn ? true : false}
        addBtn={item.addBtn ? true : false}
        calendarBtn={item.calendarBtn ? true : false}
        key={item.id}
    >
        {typeof item.childrenItems === "string"
            ? item.childrenItems
            : item.childrenItems.names.length > 1
            ? item.childrenItems.names.map((name) => (
                  <Badge withClose key={name}>
                      {name}
                  </Badge>
              ))
            : item.childrenItems.names.map((name) => (
                  <Badge key={name}>{name}</Badge>
              ))}
    </FormItem>
));

export default function Form() {
    return <div className="form">{mapData}</div>;
}
