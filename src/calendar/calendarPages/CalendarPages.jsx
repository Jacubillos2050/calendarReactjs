import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { helpersGetMessages, helpersCalendarLocalizer } from '../../helpers/helpersIndex';
import { hooksUseUiStore, hooksUseCalendarStore } from '../../hooks/hooksIndex';

import { CompoCalendarEvent, CompoCalendarModal, CompoNavbar, CompoFabAddNew, CompoFabDelete } from "../calendarPagesIndex" 



export const CalendarPages = () => {

  const { openDateModal } = hooksUseUiStore();
  const { events, setActiveEvent } = hooksUseCalendarStore();

  const [ lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'week' );

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }
  
    return {
      style
    }
  }

  const onDoubleClick = ( event ) => {
    // console.log({ doubleClick: event });
    openDateModal();
  }

  const onSelect = ( event ) => {
    // console.log({ click: event });
    setActiveEvent( event );
  }

  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event );
    setLastView( event )
  }


    return (
        
        <>
          <CompoNavbar />
    
          <Calendar
            culture='es'
            localizer={ helpersCalendarLocalizer }
            events={ events }
            defaultView={ lastView }
            startAccessor="start"
            endAccessor="end"
            style={{ height: 'calc( 100vh - 80px )' }}
            messages={ helpersGetMessages() }
            eventPropGetter={ eventStyleGetter }
            components={{
              event: CompoCalendarEvent
            }}
            onDoubleClickEvent={ onDoubleClick }
            onSelectEvent={ onSelect }
            onView={ onViewChanged }
          />
    
    
          <CompoCalendarModal />
          
          <CompoFabAddNew />
          <CompoFabDelete />
    
        </>
    )
}










