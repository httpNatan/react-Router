const Usuario = ()=>{
        return (
            <div className="usuario">
                <img src="https://via.placeholder.com/40" alt="avatar" />
                <div>
                    <div>Nome do Usuário</div>
                    <small>cargo@example.com</small>
                </div>
                <button className="botao" style={{marginLeft:'auto'}}>Perfil</button>
            </div>
        )
}

export default Usuario