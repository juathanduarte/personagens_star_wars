import api from '../providers/api'

export const getAllCharacters = async (page, search) => {
    try {
        const response = await api.get('/people/', {
            params: {
                page,
                search,
            },
        })
        return response.data
    } catch (error) {
        console.log('Erro ao buscar os personagens', error)
    }
}
