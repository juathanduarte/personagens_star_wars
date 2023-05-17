import React from 'react'
import { styled } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardCharacters = ({ character, loading }) => {
    const convertHeight = (height) => {
        if (height === 'unknown') {
            return height
        }

        const heightInMeters = parseInt(height) / 100
        return heightInMeters.toFixed(2)
    }

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
            <Specified>
                <strong>Altura:</strong> {convertHeight(character.height)}
            </Specified>
            <Specified>
                <strong>Peso:</strong> {character.mass}
            </Specified>
            <Specified>
                <strong>Cor do cabelo:</strong> {character.hair_color}
            </Specified>
            <Specified>
                <strong>Etnia:</strong> {character.skin_color}
            </Specified>
            <Specified>
                <strong>Cor dos olhos: </strong>
                {character.eye_color}
            </Specified>
            <Specified>
                <strong>Ano de nascimento:</strong> {character.birth_year}
            </Specified>
            <Specified>
                <strong>Gênero:</strong> {character.gender}
            </Specified>
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

const Specified = styled.p`
    font-size: 1.2rem;

    strong {
        font-weight: 700;
    }
`
