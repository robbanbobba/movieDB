import React from 'react'
import { Card } from 'react-bootstrap'
import { ListGroupItem, ListGroup } from 'react-bootstrap'
import { SimpleFilm, Starship } from '../services/StarWarsAPI.types'
import useNavigation from '../hooks/useNavigation'

type StarshipCardProps = {
    data: Starship
}

const StarshipCard: React.FC<StarshipCardProps> = ({ data }) => {

    const { navigateTo } = useNavigation()

    return (
        <>
            <Card>
                <ListGroup className="list">
                    <ListGroupItem key="1"><strong>Name:</strong> {data.name}</ListGroupItem>
                    <ListGroupItem key="2"><strong>Model: </strong> {data.model}</ListGroupItem>
                    <ListGroupItem key="3"><strong>Starship-class: </strong>{data.starship_class}</ListGroupItem>
                    <ListGroupItem key="4"><strong>Manufacturer: </strong>{data.manufacturer}</ListGroupItem>
                    <ListGroupItem key="7"><strong>Cost in credits: </strong>{data.cost_in_credits}</ListGroupItem>
                    <ListGroupItem key="5"><strong>Length: </strong>{data.length}</ListGroupItem>
                    <ListGroupItem key="6"><strong>Crew: </strong>{data.crew}</ListGroupItem>
                    <ListGroupItem key="8"><strong>Passengers: </strong>{data.passengers}</ListGroupItem>
                    <ListGroupItem key="9"><strong>Max Atmosphering Speed: </strong>{data.max_atmosphering_speed}</ListGroupItem>
                    <ListGroupItem key="10"><strong>Hyperdrive Rating: </strong>{data.hyperdrive_rating}</ListGroupItem>
                    <ListGroupItem key="11"><strong>MGLT: </strong>{data.MGLT}</ListGroupItem>
                    <ListGroupItem key="12"><strong>Cargo capacity: </strong>{data.cargo_capacity}</ListGroupItem>
                    <ListGroupItem key="13"><strong>Consumables: </strong>{data.consumables}</ListGroupItem>
                    {data.pilots.length > 0 && <ListGroupItem key="14"><strong>Pilots: </strong>{data.pilots.map((pilot, index) => (
                        <ListGroup key={`people-list-${pilot.id}`}>
                            <ListGroupItem key={index} onClick={() => navigateTo('people', pilot.id)}>{pilot.name}</ListGroupItem>
                        </ListGroup>
                    ))}</ListGroupItem>}
                    <ListGroupItem key="16"><strong>Films: </strong>{data.films.map((film: SimpleFilm) => (
                        <ListGroup key={`film-list-${film.id}`}>
                            <ListGroupItem key={film.id} onClick={() => navigateTo('film', film.id)}>{film.title}</ListGroupItem>
                        </ListGroup>
                    ))}</ListGroupItem>
                </ListGroup>
            </Card>
        </>
    )
}

export default StarshipCard