import React from 'react'
import { Card } from 'react-bootstrap'
import { ListGroupItem, ListGroup } from 'react-bootstrap'
import { ApiResponseCharacters } from '../services/StarWarsAPI.types'
import useNavigation from '../hooks/useNavigation'



type PeopleListCardProps = {
    generalData: ApiResponseCharacters
}

const PeopleListCard: React.FC<PeopleListCardProps> = ({ generalData }) => {

    const { navigateTo } = useNavigation()

    return (
        <>
            <ListGroup id="imageList">
                {generalData.data.map((character) => (
                    <ListGroupItem key={character.id} onClick={() => navigateTo('people', character.id)}><Card>
                        <div className="card-image-wrapper">
                            <img src={character.image_url} alt={character.name} className="card-image" />
                        </div>
                        <div className="card-text">
                            {character.name}
                        </div>
                    </Card></ListGroupItem>
                ))}
            </ListGroup>
        </>
    )
}

export default PeopleListCard