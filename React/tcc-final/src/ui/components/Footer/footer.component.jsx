import './footer.style.css';

export function Footer({ className }) {
  return (
    <>
      <footer className={`footer ${className}`}>
        <p>My House Planner 2023 ®</p>
      </footer>
    </>
  );
}
