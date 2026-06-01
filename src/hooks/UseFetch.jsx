import { useState,useEffect } from "react"

export const UseFetch = ()=>{
    const [dadoUsers,setDadoUsers] = useState([])
    const [erro,setErro] = useState(null)
    const [loading,setLoading] = useState(true)
    
    const url = 'https://dummyjson.com/users'

    useEffect(()=>{
        var buscarDados = async ()=>{
            try{
                const dadoJson = await fetch(url)
                const dado = await dadoJson.json()
                // usar apenas o array de users para facilitar o consumo
                setDadoUsers(dado.users || [])
            }catch(err){
                setErro(err)
            }finally{
                  setLoading(false)  
            }
        }

        buscarDados()
    },[])

    return{dadoUsers,erro,loading}
}