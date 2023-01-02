import './Button.css'

function Button({children, onAdd, className}) {
    return ( 
        <button onClick={onAdd} className={`button ${className}`}>{children}</button>
     );
}

export default Button;