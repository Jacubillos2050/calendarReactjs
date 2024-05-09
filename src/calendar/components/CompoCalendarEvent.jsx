


export const CompoCalendarEvent = ({ event }) => {
    const { title, user } = event;

    return (
        <>
            <strong>{ title }</strong> {/* resalta el titulo */}
            <span> - { user.name }</span>
        </>
    )
}




