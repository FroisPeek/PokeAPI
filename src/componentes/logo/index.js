import logo from '../../imagens/logo-pokemon.png'
import './estilo.css'

function Logo() {
    return (
        <div className='logo'>
            <div className='logo-imagem'>
                <img src={logo} alt='logo' />
            </div>
            <div className='nomeBaitola'>
                <p><strong>Frois</strong>Pokemons</p>
            </div>
        </div>
    )
}

export default Logo;
