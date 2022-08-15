import { Link } from 'react-router-dom';
import closeModalBtn from '../../assets/close-btn.png';

const hideModal = () => {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
  window.location.reload();
};

const Modal = () => {
  return (
    <div id="modal" data-testid="modal" className="hidden">
      <div id="confirmation">
        <p>Employee Created!</p>
        <Link
          to="#"
          id="close-modal-btn"
          data-testid="close-modal-btn"
          onClick={hideModal}
        >
          <img src={closeModalBtn} alt="Close Modal" />
        </Link>
      </div>
    </div>
  );
};
export default Modal;
