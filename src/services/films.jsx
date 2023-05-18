import api from '../providers/api'

export const getAllFilms = async () => {
    try {
        const response = await api.get('/films/')
        return response.data
    } catch (error) {
        console.log('Erro ao buscar os filmes', error)
    }
}
