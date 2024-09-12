import React from "react"
import { ListGroup } from "react-bootstrap"
import "../assets/scss/List.scss"

interface ListItemProps {
    id: number;
    name: string;
    onClick: () => void;
}

interface ListProps {
    title: string;
    data: ListItemProps[];
}

const List: React.FC<ListProps> = ({ title, data }) => {
    return (
        <>
            <h1 id="subtitle">{title}</h1>
            <ListGroup className="list">
                {data && data.map((item) => (
                    <ListGroup.Item action key={item.id} onClick={item.onClick}>{item.name}</ListGroup.Item>
                ))}
            </ListGroup>
        </>
    )
}

export default List