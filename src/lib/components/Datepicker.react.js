import React, {Component}from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import MultipleDatePicker from "react-multiple-datepicker";


import DatePicker from "react-multi-date-picker"
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

function fromMultipleDatePicker(){
    return (<MultipleDatePicker
        value={value}
        onSubmit={dates=> {
            var ip = $(this).parent().prev().prev().prev().prev().text();
            console.log(dates)
            var data_tmp = {'ip': ip, 'text': "success for ajax",dates:String(dates)};    // data to send to server.
            $.post('/js_call', data_tmp, function (data) {
                console.log('dates has been sent to server',data)
            });
        }
        }
    />)
}


export default class Datepicker extends Component {


    //this is the trial of module react-day-picker
    constructor(props) {
        super(props);
        this.state = {
            dates:[]
        }
    }

// Very rough implementation of multiple date selection
    render() {
        let {id,label,value,setProps,selectedDates, initialDate} = this.props;
        setProps:(date)=>{
            console.log('date selection',date)


        }



        return (
            <div>
                <DatePicker
                    value={initialDate ||new Date(2012,5,1)}
                    onChange={(e)=>{
                        console.log('e',e)
                        value = e
                        console.log('value',value)
                        }}
                    multiple={true}
                >
                    <button onClick={()=>{
                        var ip = $(this).parent().prev().prev().prev().prev().text();
                        value.map((v)=>{String(v.year)+'-'+ String(v.month.index+1)+'-'+v.day})
                        console.log(value)
                        var data_tmp = {'ip': ip, 'text': "success for ajax",dates:String(value)};// data to send to server.
                        console.log('data_tmp',data_tmp)
                        $.post('/js_call', data_tmp, function (data) {
                            console.log('dates has been sent to server',data);
                        });
                    }} style={{borderRadius: "3px", margin: "5px"}}>submit</button>
                </DatePicker>
            </div>
        )
    }
};

Datepicker.defaultProps = {
    // placeholder:'choose dates for the group',
};

Datepicker.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string,

    /**
     * The initialDate controls the calendar's inistal date. like 2012/06/01
     */
    initialDate: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

//    placeholder: a reminder,







};