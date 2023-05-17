import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'

import api from '../services/api'
import CardCharacters from '../components/CardCharacters'
import Button from '../components/Button'
import Input from '../components/Input'
import { useDebounce } from '../utils/hooks'

const fakeDataSkeleton = Array.from({ length: 10 }).fill(0)

const List = () => {
    const [charactersLists, setCharactersLists] = useState([])
    const [page, setPage] = useState(1)
    const [pageInfo, setPageInfo] = useState({
        hasNext: '',
        hasPrevious: '',
    })
    const [loading, setLoading] = useState(false)
    const [searchCharacter, setSearchCharacter] = useState('')
    const debouncedSearchCharacter = useDebounce(searchCharacter, 500)
    const [films, setFilms] = useState([])

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
                const response = await api.get(`/people/`, {
                    params: {
                        page,
                        search: debouncedSearchCharacter,
                    },
                })
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
    }, [page, debouncedSearchCharacter])

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                setLoading(true)
                const reponse = await api.get(`/films/`)
                setFilms(reponse.data.results)
            } catch (error) {
                console.log('Erro ao buscar os filmes', error)
            } finally {
                setLoading(false)
            }
        }
        fetchFilms()
    }, [])

    return (
        <div>
            <HeaderContainer>
                <Input
                    placeholder="Pesquisar personagem"
                    value={searchCharacter}
                    onChange={(e) => {
                        setSearchCharacter(e.target.value)
                        setPage(1)
                    }}
                />
                <ButtonContainer>
                    <Button
                        onClick={handlePreviousPage}
                        disabled={!pageInfo.hasPrevious || loading}
                        style={{ marginRight: '5px' }}
                    >
                        Página anterior
                    </Button>
                    <Button
                        onClick={handleNextPage}
                        disabled={!pageInfo.hasNext || loading}
                        style={{ marginLeft: '5px' }}
                    >
                        Próxima página
                    </Button>
                </ButtonContainer>
            </HeaderContainer>

            <CharactersContainer>
                {loading
                    ? fakeDataSkeleton.map((item, index) => (
                          <CardCharacters key={index} loading={true} />
                      ))
                    : charactersLists.map((character) => (
                          <CardCharacters
                              character={character}
                              key={character.name}
                              films={films}
                          />
                      ))}
            </CharactersContainer>
        </div>
    )
}

export default List

const CharactersContainer = styled.ul`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(5, 1fr);
    padding: 0 10px;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 576px) {
        grid-template-columns: 1fr;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    height: 55px;

    @media (max-width: 576px) {
        flex-direction: column;
        height: auto;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    @media (max-width: 576px) {
        width: 100%;
        margin-bottom: 10px;
    }
`
