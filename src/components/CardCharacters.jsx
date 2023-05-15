import React from 'react'
import { styled } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardCharacters = ({ character, loading }) => {
    if (loading)
        return (
            <Card>
                <Skeleton
                    width={'95%'}
                    height={16}
                    style={{
                        marginBottom: '5px',
                    }}
                />
                <Skeleton
                    width={'75%'}
                    height={16}
                    style={{
                        marginBottom: '5px',
                    }}
                />
                <Skeleton
                    width={'55%'}
                    height={16}
                    style={{
                        marginBottom: '5px',
                    }}
                />
                <Skeleton
                    width={'45%'}
                    height={16}
                    style={{
                        marginBottom: '5px',
                    }}
                />
                <Skeleton
                    width={'85%'}
                    height={16}
                    style={{
                        marginBottom: '5px',
                    }}
                />
                <Skeleton
                    width={'25%'}
                    height={16}
                    style={{
                        marginBottom: '5px',
                    }}
                />
                <Skeleton
                    width={'65%'}
                    height={16}
                    style={{
                        marginBottom: '5px',
                    }}
                />
                <Skeleton
                    width={'35%'}
                    height={16}
                    style={{
                        marginBottom: '5px',
                    }}
                />
            </Card>
        )
    return (
        <Card key={character.name}>
            <h2>{character.name}</h2>
            <p>Altura: {character.height}</p>
            <p>Peso: {character.mass}</p>
            <p>Cor do cabelo: {character.hair_color}</p>
            <p>Etnia: {character.skin_color}</p>
            <p>Cor dos olhos: {character.eye_color}</p>
            <p>Ano de nascimento: {character.birth_year}</p>
            <p>Gênero: {character.gender}</p>
            {/* HOMEWORLD */}
            {/* FILMS
                        SPECIES
                        VEHICLES
                        STARSHIPS
                        CREATED 
                        EDITED 
                        URL  */}
        </Card>
    )
}

export default CardCharacters

const Card = styled.li`
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    padding: 20px;
    min-height: 210px;
    justify-content: space-between;
`
