import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import api from '../services/api'

import CardCharacters from '../components/CardCharacters'
import Button from '../components/Button'

const List = () => {
    const [charactersLists, setCharactersLists] = useState([])
    const [page, setPage] = useState(1)
    const [pageInfo, setPageInfo] = useState({
        hasNext: '',
        hasPrevious: '',
    })
    const [loading, setLoading] = useState(false)

    function handleNextPage() {
        setPage(page + 1)
    }

    function handlePreviousPage() {
        setPage(page - 1)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await api.get(`/people/?page=${page}`)
                setCharactersLists(response.data.results)
                setPageInfo({
                    hasNext: Boolean(response.data.next),
                    hasPrevious: Boolean(response.data.previous),
                })
            } catch (error) {
                console.log('Erro ao buscar os dados', error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [page])

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

            <Button
                onClick={handleNextPage}
                disabled={!pageInfo.hasNext || loading}
            >
                Próxima página
            </Button>
            <Button
                onClick={handlePreviousPage}
                disabled={!pageInfo.hasPrevious || loading}
            >
                Página anterior
            </Button>

            <h1>{page}</h1>
        </div>
    )
}

export default List

const CharactersContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`
