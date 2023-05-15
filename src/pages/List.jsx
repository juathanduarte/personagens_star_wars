import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import api from '../services/api'

import CardCharacters from '../components/CardCharacters'
import Button from '../components/Button'

const List = () => {
    const [charactersLists, setCharactersLists] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/people')
                setCharactersLists(response.data.results)
            } catch (error) {
                console.log('Erro ao buscar os dados', error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Personagens de Star Wars</h1>
            <CharactersContainer>
                {charactersLists.map((character) => (
                    <CardCharacters
                        character={character}
                        key={character.name}
                    />
                ))}
            </CharactersContainer>

            <Button onClick={() => setPage(page + 1)}>Próxima página</Button>
        </div>
    )
}

export default List

const CharactersContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`
