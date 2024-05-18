import './logo.css'
import img from '../../assets/img/logo.svg'

function Logo() {

  return (
  <a className='logo' href='#'>
    <div className='img-wrap'>
        <img src={img} alt="logo" />
    </div>

    <span>Cosmomoll</span>
  </a>
  )
}

export default Logo
