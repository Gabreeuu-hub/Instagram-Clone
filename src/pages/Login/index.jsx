import { Link } from 'react-router-dom'

import instaimg from '../../imagens/instaimg.png'
import facebooklogo from '../../imagens/facebook.png'

export const Login = () => {

    return (
        <div className='container'>
            <div className="pagina">
                <img src={instaimg} alt="img-insta" className='instaimg' />
                <div className="paginaum">

                    <div className="primeiro-container">
                        <h1 className='titulo'>Instagram</h1>
                        <input type="text"
                            className="usuario inpt"
                            placeholder='Telefone, nome de usuário ou email' />
                        <input type="password"
                            className="senha inpt"
                            placeholder='Senha' />
                        <button className="loginbtn">Entrar</button>
                        <p className="ou">OU</p>
                        <div className="facebook">
                            <img src={facebooklogo} alt="fb" className="fb" />
                            <p className='logfb'>Entrar com o Facebook</p>
                        </div>
                        <p className="esenha">Esqueceu a senha?</p>
                    </div>
                    <div className="segundo-container">
                        <p className="criarconta">Não tem uma conta? <Link className='cadastro' to={'./pages/Home'}>Cadastre-se</Link></p>
                    </div>
                    <div className="terceiro-container">
                        <p className="obter-app">Obtenha o aplicativo.</p>
                    </div>
                    <div className="quarto-container">
                        <img className='app appum' src="https://static.cdninstagram.com/rsrc.php/v3
          /y_/r/tUzYKZ-xrQK.png" alt="app link" />
                        <img className='app appdois' src="https://static.cdninstagram.com/rsrc.php/v3
          /yE/r/QQnPXT5YsC4.png" alt="app link" />
                    </div>
                </div>
            </div>
        </div>
    )
}