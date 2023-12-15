import logo from '../../imagens/logo.svg'
import './estilo.css'

function Logo() {
    return(
        <div className='logo'>
            <img className= 'logo-imagem' src={logo} alt='logo'></img>
            <p><strong>Frois</strong> Books</p>
        </div>
    )
} 

export default Logo
