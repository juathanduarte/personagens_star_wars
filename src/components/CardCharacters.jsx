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
            <Name>{character.name}</Name>
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
    display: flex;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    flex-direction: column;
    min-width: 210px;
    justify-content: space-between;
`

const Name = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
`
