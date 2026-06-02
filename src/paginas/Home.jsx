import { useFetch } from "../hooks/UseFetch"
import { Link } from "react-router-dom"

const Home = () => {
const url = 'https://dummyjson.com/users'
const {dadoUsers,erro,loading} = useFetch(url)

  return (
      <main className="conteudo">
        <h2>home</h2>
        {loading && <p>Carregando...</p>}
        {erro && <p>Erro: {erro.message }</p>}
        {!loading && !erro && (
          <ul className="lista">
            {dadoUsers.map((user)=>{
              return (
                <li className="item" key={user.id}>
                  {user.firstName} {user.lastName}
                  <Link to={`/usuario/${user.id}`} className="botao-perfil">Ver perfil do usuário</Link>
                </li>
              )
            })}
          </ul>
        )}
      </main>
  )
}

export default Home