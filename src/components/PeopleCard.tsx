import React from 'react'
import { Card } from 'react-bootstrap'
import { ListGroupItem, ListGroup } from 'react-bootstrap'
import { Character, SimpleFilm, SubCat } from '../services/StarWarsAPI.types'
import useOpenUrl from '../hooks/useOpenUrl'
import useNavigation from '../hooks/useNavigation'



type PeopleCardProps = {
    data: Character
}

const PeopleCard: React.FC<PeopleCardProps> = ({ data }) => {

    const { openUrl } = useOpenUrl()
    const { navigateTo } = useNavigation()

    return (
        <>
            <img src={data.image_url} alt={data.name} height='400px' width='300px' />
            <Card>
                <ListGroup className="list">
                    <ListGroupItem key="1"><strong>Name:</strong> {data.name}</ListGroupItem>
                    <ListGroupItem key="2"><strong>Birtyear: </strong>{data.birth_year}</ListGroupItem>
                    <ListGroupItem key="3"><strong>Eye-color: </strong>{data.eye_color}</ListGroupItem>
                    <ListGroupItem key="4"><strong>Hair-color: </strong>{data.hair_color}</ListGroupItem>
                    <ListGroupItem key="5"><strong>Height: </strong>{data.height}</ListGroupItem>
                    <ListGroupItem key="6"><strong>Mass: </strong>{data.mass}</ListGroupItem>
                    <ListGroupItem key="7"><strong>Skin-color: </strong>{data.skin_color}</ListGroupItem>
                    <ListGroupItem key="8" onClick={() => openUrl(data.wiki_link)}><strong>Wiki: </strong><a>{data.wiki_link}</a></ListGroupItem>
                    <ListGroupItem key="9"><strong>Affiliations: </strong>{data.affiliations.map((string, index) => (
                        <ListGroup key={`affiliation-list-${index}`}>
                            <ListGroupItem key={index}>{string}</ListGroupItem>
                        </ListGroup>
                    ))}</ListGroupItem>
                    <ListGroupItem key="10"><strong>HomeWorld: </strong>{data.homeworld.name}</ListGroupItem>
                    <ListGroupItem key="11"><strong>Films: </strong>{data.films.map((film: SimpleFilm) => (
                        <ListGroup key={`film-list-${film.id}`}>
                            <ListGroupItem key={film.id} onClick={() => navigateTo('film', film.id)}>{film.title}</ListGroupItem>
                        </ListGroup>
                    ))}</ListGroupItem>
                    <ListGroupItem key="12"><strong>Starships: </strong>{data.starships.map((starship: SubCat) => (
                        <ListGroup key={`strarships-list-${starship.id}`}>
                            <ListGroupItem key={starship.id} onClick={() => navigateTo('starship', starship.id)}>{starship.name}</ListGroupItem>
                        </ListGroup>
                    ))}</ListGroupItem>
                    <ListGroupItem key="13"><strong>Vehicles: </strong>{data.vehicles.map((vehicle: SubCat) => (
                        <ListGroup key={`vehicles-list-${vehicle.id}`}>
                            <ListGroupItem key={vehicle.id} onClick={() => navigateTo('vehicle', vehicle.id)}>{vehicle.name}</ListGroupItem>
                        </ListGroup>
                    ))}</ListGroupItem>
                    {data.species.length > 0 && <ListGroupItem key="14"><strong>Species: </strong>{data.species.map((specie: SubCat) => (
                        <ListGroup key={`species-list-${specie.id}`}>
                            <ListGroupItem key={specie.id} onClick={() => navigateTo('specie', specie.id)}>{specie.name}</ListGroupItem>
                        </ListGroup>
                    ))}</ListGroupItem>}
                </ListGroup>
            </Card>
        </>
    )
}

export default PeopleCard