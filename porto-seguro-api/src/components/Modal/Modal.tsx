import React from 'react';
import Button from '../Button/Button';
import { useRouter } from 'next/navigation';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  form?: boolean;
  titulo: string;
  info?: string;
}

const Modal = ({ isOpen, onClose, titulo, info, form }: ModalProps) => {
  const router = useRouter();

  if (!isOpen) return null;

  const redefinirSenha = () => {
    router.push("/login");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    redefinirSenha();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="TituloModal">{titulo}</h2>

        {form ? (
          <form onSubmit={handleSubmit}>
            <div className="ContainerInputModal">
              <label htmlFor="modal">Nova Senha:</label>
              <input
                className="InputModal"
                id="modal"
                type="text"
                placeholder="Insira uma nova senha"
              />
            </div>
            <Button type="submit" titulo="Redefinir" click={() => {}} />
          </form>
        ) : (
          <p>{info}</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
