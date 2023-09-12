const dadosApi = async ({api}) => {
    const dados = await api.get(`/posts`);

    const dadosApiJson = await dados['data'];

    return console.log(dadosApiJson)
};

export default dadosApi
