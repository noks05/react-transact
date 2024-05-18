import "./hero.css";
import Button from '../../ui/Button.jsx'

function Hero() {
    return (
        <div className="hero content-container">
            <h2>About us</h2>
            <h1>We transform the way you transact</h1>
            <p>
                Cosmomoll helps you invoice, exchange, and withdraw with ease. Welcome to your new favourite way to handle all things crypto.
            </p>

            <Button text='Try Cosmomoll now' />
        </div>
    )
}

export default Hero

