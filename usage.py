import dash_calendar
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
from flask import Flask, request
import pickle as pkl

app = dash.Dash(__name__)

server = app.server

app.layout = html.Div([
    dash_calendar.Datepicker(
        id='input',
        label='my-label',
        initialDate='2012/06/01',
    ),
    html.Div(id='output')
])


@server.route('/js_call', methods=['GET', 'POST'])
def js_call():
      dates = request.values['dates'].split(',')
      print(dates)

      # to send the command by ssh : os.system("ssh user@host \' restart(command) \' ")
      with open('data/transferedDates.txt', 'wb') as f:
        pkl.dump(request.values,f)

      return 'ok!!!!'



if __name__ == '__main__':
    app.run_server(debug=False,port=8081)
