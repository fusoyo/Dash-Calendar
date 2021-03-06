# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Datepicker(Component):
    """A Datepicker component.


Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- label (string; optional): A label that will be printed when this component is rendered.
- initialDate (string; optional): The initialDate controls the calendar's inistal date. like 2012/06/01"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, label=Component.UNDEFINED, initialDate=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'label', 'initialDate']
        self._type = 'Datepicker'
        self._namespace = 'dash_calendar'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'label', 'initialDate']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Datepicker, self).__init__(**args)
