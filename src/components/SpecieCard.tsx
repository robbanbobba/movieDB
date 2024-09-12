import React from 'react'
import { Card } from 'react-bootstrap'
import { ListGroupItem, ListGroup } from 'react-bootstrap'
import { SimpleFilm, SpecieOne } from '../services/StarWarsAPI.types'
import useNavigation from '../hooks/useNavigation'

type SpecieCardProps = {
    data: SpecieOne
}

const SpecieCard: React.FC<SpecieCardProps> = ({ data }) => {

    const { navigateTo } = useNavigation()

    return (
        <>
            <Card>
                <ListGroup className="list">
                    <ListGroupItem key="1"><strong>Name:</strong> {data.name}</ListGroupItem>
                    <ListGroupItem key="2"><strong>Classification: </strong> {data.classification}</ListGroupItem>
                    <ListGroupItem key="3"><strong>Eye-colors: </strong>{data.eye_colors}</ListGroupItem>
                    <ListGroupItem key="4"><strong>Hair-colors: </strong>{data.hair_colors}</ListGroupItem>
                    <ListGroupItem key="7"><strong>Skin-colors: </strong>{data.skin_colors}</ListGroupItem>
                    <ListGroupItem key="5"><strong>Average Height: </strong>{data.average_height}</ListGroupItem>
                    <ListGroupItem key="6"><strong>Average Lifespan: </strong>{data.average_lifespan}</ListGroupItem>
                    <ListGroupItem key="8"><strong>Language: </strong>{data.language}</ListGroupItem>
                    <ListGroupItem key="9"><strong>Characters: </strong>{data.people.map((people, index) => (
                        <ListGroup key={`people-list-${people.id}`}>
                            <ListGroupItem key={index} onClick={() => navigateTo('people', people.id)}>{people.name}</ListGroupItem>
                        </ListGroup>
                    ))}</ListGroupItem>
                    {typeof data.homeworld === 'object' && data.homeworld && <ListGroupItem key="10"><strong>HomeWorld: </strong>{data.homeworld.name}</ListGroupItem>}
                    <ListGroupItem key="11"><strong>Films: </strong>{data.films.map((film: SimpleFilm) => (
                        <ListGroup key={`film-list-${film.id}`}>
                            <ListGroupItem key={film.id} onClick={() => navigateTo('film', film.id)}>{film.title}</ListGroupItem>
                        </ListGroup>
                    ))}</ListGroupItem>
                </ListGroup>
            </Card>
        </>
    )
}

export default SpecieCard