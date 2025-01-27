
import { useDispatch, useSelector } from 'react-redux';
import { onCloseDateModal, onOpenDateModal } from '../store/storeIndex';


export const hooksUseUiStore = () => {
    const dispatch = useDispatch();

    const { 
        isDateModalOpen
    } = useSelector( state => state.ui );

    const openDateModal = () => {
        dispatch( onOpenDateModal() )
    }

    const closeDateModal = () => {
        dispatch( onCloseDateModal() )
    }

    const toggleDateModal = () => {
        (isDateModalOpen)
            ? openDateModal()
            : closeDateModal();
    }

   return {
        //* Propiedades
        isDateModalOpen,

        //* Métodos
        closeDateModal,
        openDateModal,
        toggleDateModal,
   }
}





