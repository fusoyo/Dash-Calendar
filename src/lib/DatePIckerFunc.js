import React, { useState } from "react"
import DatePicker from "react-multi-date-picker"



function DatePickerFunc({id}) {
    const [value, setValue] = useState(new Date(2012,5,1))
    return (
         <DatePicker
                    id={id}
                    value={value}
                    onChange={(e)=>{
                        console.log('e',e,e[0]['day'],e[0]['month'].number)
                        setValue(e)}}
                    multiple={true}
                    format={'YYYY-MM-DD'}
                    type={'input-icon'}
                    calendar={'gregorian'}
                />
    )


};


DatePickerFunc.propTypes = {
    id:PropTypes.string
};

export default DatePickerFunc;