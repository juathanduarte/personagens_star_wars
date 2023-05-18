import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'

import CardCharacters from '../components/CardCharacters'
import Button from '../components/Button'
import Input from '../components/Input'
import { useDebounce } from '../utils/hooks'
import { getAllCharacters } from '../services/characters'
import { getAllFilms } from '../services/films'

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
        const fetchCharacters = async () => {
            setLoading(true)
            const data = await getAllCharacters(page, debouncedSearchCharacter)
            setCharactersLists(data.results)
            setPageInfo({
                hasNext: Boolean(data.next),
                hasPrevious: Boolean(data.previous),
            })
            setLoading(false)
        }
        fetchCharacters()
    }, [page, debouncedSearchCharacter])

    useEffect(() => {
        const fetchFilms = async () => {
            setLoading(true)
            const data = await getAllFilms()
            setFilms(data.results)
            setLoading(false)
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
    padding: 0 16px;
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
    margin: 16px;
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
