import "./toastr.style.css";
import { useEffect } from "react";
import useGlobalToastr from "../../../contexts/toastr/toastr.context";

const TOASTR_DELAY = 5000;

export function Toastr() {
  const [mensagem, setMensagem] = useGlobalToastr();

  useEffect(() => {
    if (mensagem) {
      setTimeout(() => {
        setMensagem("");
      }, TOASTR_DELAY);
    }
  }, [mensagem, setMensagem]);

  if (!mensagem) return;

  return (
    <div className="toastr">
      <p className="toastr-message">{mensagem}</p>
    </div>
  );
}