import { UseFetch } from "../hooks/UseFetch"

const Home = () => {

const {dadoUsers,erro,loading} = UseFetch()

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
                </li>
              )
            })}
          </ul>
        )}
      </main>
  )
}

export default Home