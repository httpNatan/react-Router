import { useFetch } from '../hooks/UseFetch'
import { useParams } from 'react-router-dom'

const Usuario = ()=>{
    const {id} = useParams()
    const url = `https://dummyjson.com/users/${id}`

    const {dadoUsers,erro,loading} = useFetch(url)
    
    
console.log(dadoUsers)
        return (
            <main className="conteudo usuario-conteudo">
                <section className="usuario-card">
                    {loading && <p>Carregando...</p>}
                    {erro && <p>Erro: {erro.message}</p>}
                    {!loading && !erro && (
                        <div className="usuario-detalhes">
                            <h2 className="titulo-usuario">Usuário {id}</h2>
                            <div className="campo-usuario">
                                <span>Nome:</span>
                                <strong>{dadoUsers.firstName} {dadoUsers.lastName}</strong>
                            </div>
                            <div className="campo-usuario">
                                <span>Email:</span>
                                <strong>{dadoUsers.email}</strong>
                            </div>
                            <div className="campo-usuario">
                                <span>Senha:</span>
                                <strong>{dadoUsers.password}</strong>
                            </div>
                        </div>
                    )}
                </section>
            </main>
        )
}

export default Usuario