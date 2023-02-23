import "./container.style.css";

export function Container({ children, direction, align }) {
  return (
    <div className={`container__ ${direction} ${align}`}>
      {children}
    </div>
  );
}
