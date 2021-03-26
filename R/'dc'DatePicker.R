# AUTO GENERATED FILE - DO NOT EDIT

'dc'Datepicker <- function(id=NULL, label=NULL, initialDate=NULL) {
    
    props <- list(id=id, label=label, initialDate=initialDate)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Datepicker',
        namespace = 'dash_calendar',
        propNames = c('id', 'label', 'initialDate'),
        package = 'dashCalendar'
        )

    structure(component, class = c('dash_component', 'list'))
}
