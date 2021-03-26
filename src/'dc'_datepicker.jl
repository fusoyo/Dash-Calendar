# AUTO GENERATED FILE - DO NOT EDIT

export 'dc'_datepicker

"""
    'dc'_datepicker(;kwargs...)

A Datepicker component.

Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `label` (String; optional): A label that will be printed when this component is rendered.
- `initialDate` (String; optional): The initialDate controls the calendar's inistal date. like 2012/06/01
"""
function 'dc'_datepicker(; kwargs...)
        available_props = Symbol[:id, :label, :initialDate]
        wild_props = Symbol[]
        return Component("'dc'_datepicker", "Datepicker", "dash_calendar", available_props, wild_props; kwargs...)
end

