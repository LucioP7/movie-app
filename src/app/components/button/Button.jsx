import './button.css';

export default function Button ({ onclick , children }) {
    return (
        <button className={`button`} onClick={onclick ? () => onclick() : null}>
            {children}
        </button>
    )
};

export function OutlineButton ({ onclick , children }) {
    return (
        <button className={`button-outline`} onClick={onclick ? () => onclick() : null}>
            {children}
        </button>
    )
};