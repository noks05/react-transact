import "./button.css";

// eslint-disable-next-line react/prop-types
function Button({ text }) {
    return (
        <button className="btn-reset btn" type="button">
            {text}
        </button>
    )
}

export default Button

