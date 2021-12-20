

const Button = ({nameButton,nameClass, onClick}) => {
    return (
        <button 
        type="button" 
        className={nameClass}
        onClick={onClick}
    >
        {nameButton}
    </button> 
    );
}

export default Button;