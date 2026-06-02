import { useState,useEffect } from "react"

export const useFetch = (url)=>{

    
    const [dadoUsers,setDadoUsers] = useState([])
    const [erro,setErro] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        var buscarDados = async ()=>{
            try{
                const dadoJson = await fetch(url)
                const dado = await dadoJson.json()
                // se a resposta tiver users, retornamos o array; caso contrário, retornamos o objeto único
                setDadoUsers(dado.users ? dado.users : dado)
            }catch(err){
                setErro(err)
            }finally{
                  setLoading(false)  
            }
        }

        buscarDados()
    },[url])

    return{dadoUsers,erro,loading}
}