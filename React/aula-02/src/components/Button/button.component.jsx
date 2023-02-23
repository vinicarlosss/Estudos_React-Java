import './button.style.css'



export function Button({ className, children , onclick, alunos}){
    const fullClassName= className ? `button ${className}`: 'button'
    return <button onClick={() => onclick(alunos)} className={fullClassName}>{children}</button>
}