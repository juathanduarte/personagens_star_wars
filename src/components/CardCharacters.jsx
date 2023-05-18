import React from 'react'
import { styled, keyframes } from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CardCharacters = ({ character, loading, films }) => {
    const convertHeight = (height) => {
        const heightValue = parseInt(height)
        return `${
            heightValue > 100
                ? (heightValue / 100).toFixed(2).replace('.', ',') + ' m'
                : heightValue + ' cm'
        }`
    }

    const convertMass = (mass) => {
        if (mass === 'unknown') return 'Desconhecido'

        const massInKg = parseInt(mass)

        return massInKg.toFixed(2).replace('.', ',') + ' kg'
    }

    const birthVeritifcation = (birth) => {
        if (birth === 'unknown') return 'Desconhecido'
        return birth
    }

    const translateUrlToTitle = () => {
        const filmsUrls = character.films

        if (loading || films.length === 0) {
            return (
                <PulsatingSkeleton
                    width={'75%'}
                    height={30}
                    style={{
                        marginBottom: '5px',
                    }}
                />
            )
        }

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
                <PulsatingSkeleton
                    width={'95%'}
                    height={40}
                    style={{
                        marginBottom: '5px',
                    }}
                />
                <PulsatingSkeleton
                    width={'75%'}
                    height={30}
                    style={{
                        marginBottom: '5px',
                    }}
                />
                <PulsatingSkeleton
                    width={'45%'}
                    height={22}
                    style={{
                        marginBottom: '5px',
                    }}
                />
                <PulsatingSkeleton
                    width={'65%'}
                    height={22}
                    style={{
                        marginBottom: '5px',
                    }}
                />
                <PulsatingSkeleton
                    width={'35%'}
                    height={22}
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
                <p>Filmes</p> {translateUrlToTitle()}
            </Specified>
            <Specified>
                <p>Altura:</p> {convertHeight(character.height)}
            </Specified>
            <Specified>
                <p>Peso:</p> {convertMass(character.mass)}
            </Specified>
            <Specified>
                <p>Ano de nascimento:</p>{' '}
                {birthVeritifcation(character.birth_year)}
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
    border-radius: 16px;
    padding: 16px;
    flex-direction: column;
    width: 350px;
    height: 400px;
    min-width: 350px;
    min-height: 400px;
    justify-content: space-between;

    @media (max-width: 1669px) {
        width: calc(100% - 16px);
        min-width: calc(100% - 16px);
        height: 400px;
        min-height: 100%;
    }

    @media (max-width: 1200px) {
        width: calc(100% - 16px);
        min-width: calc(100% - 16px);
        height: 400px;
        min-height: 100%;
    }

    @media (max-width: 992px) {
        width: calc(100% - 16px);
        min-width: calc(100% - 16px);
        height: 400px;
        min-height: 100%;
    }

    @media (max-width: 769px) {
        width: calc(100% - 16px);
        min-width: calc(100% - 16px);
        height: 400px;
        min-height: 100%;
    }

    @media (max-width: 576px) {
        width: calc(100% - 16px);
        min-width: calc(100% - 16px);
        height: 400px;
        min-height: 100%;
    }
`

const Name = styled.h2`
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #ece4ef;
    text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.4);
    min-height: 82px;
`

const Specified = styled.h2`
    font-weight: 700;
    font-size: 14px;
    color: #d8cede;
    margin-bottom: 8px;

    p {
        font-size: 14px;
        color: #9c83a7;
        margin-bottom: 4px;
    }
`

const pulseAnimation = keyframes`
        0% {
            opacity: 1;
            }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    `

const PulsatingSkeleton = styled(Skeleton)`
    animation: ${pulseAnimation} 1.5s ease-in-out infinite;
`
