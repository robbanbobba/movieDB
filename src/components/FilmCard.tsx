import React from 'react'
import { Card } from 'react-bootstrap'
import { ListGroupItem, ListGroup } from 'react-bootstrap'
import { Film, SubCat } from '../services/StarWarsAPI.types'
import useNavigation from '../hooks/useNavigation'

type FilmCardProps = {
    data: Film
}

const FilmCard: React.FC<FilmCardProps> = ({ data }) => {

    const { navigateTo } = useNavigation()

    return (
        <>
            <div>
                <p>{data.opening_crawl}</p>
                <img src={data.image_url} alt={data.title} />
                <Card>
                    <ListGroup className="list">
                        <ListGroupItem key="1"><strong>Titel: </strong>{data.title}</ListGroupItem>
                        <ListGroupItem key="2"><strong>Director: </strong>{data.director}</ListGroupItem>
                        <ListGroupItem key="3"><strong>Producer: </strong>{data.producer}</ListGroupItem>
                        <ListGroupItem key="4"><strong>Episode: </strong>{data.episode_id}</ListGroupItem>
                        <ListGroupItem key="5"><strong>Release Date: </strong>{data.release_date}</ListGroupItem>
                        <ListGroupItem key="6"><strong>Characters: </strong>{data.characters.map((character: SubCat) => (
                            <ListGroup>
                                <ListGroupItem key={character.id} onClick={() => navigateTo('people', character.id)}>{character.name}</ListGroupItem>
                            </ListGroup>
                        ))}</ListGroupItem>
                        {data.planets && (<ListGroupItem key="7"><strong>Planets: </strong>{data.planets.map((planet: SubCat) => (
                            <ListGroup>
                                <ListGroupItem key={planet.id} onClick={() => navigateTo('planet', planet.id)}>{planet.name}</ListGroupItem>
                            </ListGroup>
                        ))}</ListGroupItem>)}
                        {data.starships && (<ListGroupItem key="8"><strong>Starships: </strong>{data.starships.map((starship: SubCat) => (
                            <ListGroup>
                                <ListGroupItem key={starship.id} onClick={() => navigateTo('starship', starship.id)}>{starship.name}</ListGroupItem>
                            </ListGroup>
                        ))}</ListGroupItem>)}
                        {data.vehicles && (<ListGroupItem key="9"><strong>Vehicles: </strong>{data.vehicles.map((vehicle: SubCat) => (
                            <ListGroup>
                                <ListGroupItem key={vehicle.id} onClick={() => navigateTo('vehicle', vehicle.id)}>{vehicle.name}</ListGroupItem>
                            </ListGroup>
                        ))}</ListGroupItem>)}
                        {data.species && (<ListGroupItem key="10"><strong>Species: </strong>{data.species.map((specie: SubCat) => (
                            <ListGroup>
                                <ListGroupItem key={specie.id} onClick={() => navigateTo('specie', specie.id)}>{specie.name}</ListGroupItem>
                            </ListGroup>
                        ))}</ListGroupItem>)}
                    </ListGroup>
                </Card>
            </div>
        </>
    )
}

export default FilmCard