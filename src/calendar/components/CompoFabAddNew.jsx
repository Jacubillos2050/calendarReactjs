import { addHours } from 'date-fns';
import { hooksUseCalendarStore, hooksUseUiStore } from "../../hooks/hooksIndex";


export const CompoFabAddNew = () => {

    const { openDateModal } = hooksUseUiStore();
    const { setActiveEvent } = hooksUseCalendarStore();

    const handleClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 2 ),
            bgColor: '#fafafa',
            user: {
                _id: '123',
                name: 'Cuby'
            }
        });
        openDateModal();
    }


  return (
    <button
        className="btn btn-primary fab"
        onClick={ handleClickNew }
    >
        <i className="fas fa-plus"></i>
    </button>
  )
}






