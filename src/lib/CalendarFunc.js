import React, { useState } from 'react'
import { isSameDay } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { Calendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
// Very rough implementation of multiple date selection

function CalendarFunc({selectedDates, setSelectedDates}) {
    const modifiers = {
        selected: date => selectedDates.some(selectedDate => isSameDay(selectedDate, date))
    }
    const handleDayClick = date => {
        setSelectedDates([...selectedDates, date])
    }
    return (
        <Calendar onDayClick={handleDayClick} modifiers={modifiers} locale={enGB} />
    )
}

CalendarFunc.prototypes={
    selectedDates:PropTypes.array,
    setSelectedDates:PropTypes.func
}