
import { hooksUseCalendarStore } from "../../hooks/hooksIndex";


export const CompoFabDelete = () => {

    const { startDeletingEvent, hasEventSelected } = hooksUseCalendarStore();

    const handleDelete = () => {
        startDeletingEvent();
    }


  return (
    <button
        className="btn btn-danger fab-danger"
        onClick={ handleDelete }
        style={{
            display: hasEventSelected ? '': 'none'
        }}
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
