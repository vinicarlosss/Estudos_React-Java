import './container.style.css'

export function Container({className, children }){

    const fullClassName = className ? `container ${className}` : 'container'

    return <div className={fullClassName}>{children}</div>
}