import React from 'react'
import { styled } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardCharacters = ({ character, loading, films }) => {
    const convertHeight = (height) => {
        const heightInMeters = parseInt(height) / 100
        return heightInMeters.toFixed(2).replace('.', ',') + ' m'
    }

    const convertMass = (mass) => {
        if (mass === 'unknown') return 'Desconhecido'

        const massInKg = parseInt(mass)
        return massInKg.toFixed(2).replace('.', ',') + ' kg'
    }

    const translateUrlToTitle = () => {
        const filmsUrls = character.films
        return filmsUrls
            .map((url) => {
                const filmTitle = films.find((film) => film.url === url)
                return filmTitle?.title || ''
            })
            .join(', ')
    }

    const convertGender = (gender) => {
        if (gender === 'male') {
            return 'Masculino'
        } else if (gender === 'female') {
            return 'Feminino'
        } else {
            return 'Desconhecido'
        }
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
    translateUrlToTitle()

    return (
        <Card key={character.name}>
            <Name>{character.name}</Name>
            <Specified>
                <p>Filmes</p> {translateUrlToTitle()}
            </Specified>
            <Specified>
                <p>Altura:</p> {convertHeight(character.height)}
            </Specified>
            <Specified>
                <p>Peso:</p> {convertMass(character.mass)}
            </Specified>
            <Specified>
                <p>Ano de nascimento:</p> {character.birth_year}
            </Specified>
            <Specified>
                <p>Gênero:</p> {convertGender(character.gender)}
            </Specified>
        </Card>
    )
}

export default CardCharacters

const Card = styled.li`
    display: flex;
    background: linear-gradient(135deg, #0e1765, #2a115c);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 20px;
    flex-direction: column;
    min-width: 210px;
    justify-content: space-between;
`

const Name = styled.h2`
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #ece4ef;
    text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.4);
    margin-bottom: 16px;
    min-height: 80px;
`

const Specified = styled.p`
    font-weight: 700;
    font-size: 14px;
    color: #d8cede;
    margin-bottom: 12px;

    p {
        font-size: 14px;
        color: #9c83a7;
        margin-bottom: 4px;
    }
`
