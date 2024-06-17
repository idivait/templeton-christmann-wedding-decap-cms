import * as React from "react"
import AddToCalendarHOC from 'react-add-to-calendar-hoc';

export const Dropdown = ({children, className})=>(
    <ul className={`flex flex-col border-blush rounded border ${className}`}>
        {children}
    </ul>
)

export const Button = ({children, link, className, onClick})=>{
    const buttonStyle = `ring-2 ring-blush bg-blush rounded hover:bg-orange py-2 px-3 pt-3 font-bold text-lg focus:border-stone-100 w-full flex items-center justify-center ${className}`;
    if (link) {
        return (
            <a className={buttonStyle} href={link}>
            {children}
        </a>
        )
    }
    return (
        <button className={buttonStyle} onClick={onClick}>
            {children}
        </button>
    )
}

const AddToCalendarDropdown = AddToCalendarHOC(Button, Dropdown);

// YYYYMMDDTHHmmss
const AddToCalendar = ()=>{
  const event = {
    description: 'At the Highlander Room of the Eureka Springs Community Center.',
    duration: 4,
    endDatetime: '20240907T220000',
    startDatetime: '20240907T170000',
    title: 'Templeton-Christmann Wedding',
    timezone: 'America/Chicago'
  }
  return(<AddToCalendarDropdown className="w-full" buttonProps={{className : "bg-navy"}} event={event} linkProps={{className : "hover:bg-slate-100 hover:text-navy"}} />)
}

export const ActionButtonList = () => (
    <ul className="grid mt-4 grid-cols-2 auto-rows-auto gap-4 mb-0 text-center">
      <li className="col-span-2 w-full">
        <Button link="/rsvp">Submit Your RSVP</Button>
      </li>
      <li>
        <AddToCalendar />
      </li>
      <li>
        <Button link="https://www.google.com/maps/dir//Eureka%20Springs%20Community%20Center" className="bg-navy">Get Directions</Button>
      </li>
    </ul>
  );