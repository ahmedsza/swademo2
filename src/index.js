import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useRef } from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';



import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js';
import { createBrowserHistory } from "history";


const browserHistory = createBrowserHistory({ basename: '' });
var reactPlugin = new ReactPlugin();
var appInsights = new ApplicationInsights({
    config: {
      connectionString: 'InstrumentationKey=65cc2975-3ad6-4198-b82f-da0defb9a5d6;IngestionEndpoint=https://southafricanorth-1.in.applicationinsights.azure.com/;LiveEndpoint=https://southafricanorth.livediagnostics.monitor.azure.com/',
      enableAutoRouteTracking: true,
    disableAjaxTracking: false,
    autoTrackPageVisitTime: true,
    enableCorsCorrelation: true,
    enableRequestHeaderTracking: true,
    enableResponseHeaderTracking: true,
    extensions: [reactPlugin],
        extensionConfig: {
          [reactPlugin.identifier]: { history: browserHistory }
        }
    }
});
appInsights.loadAppInsights();












// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


class EmployeeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
    this.getData = this.getData.bind(this);
    this.signIn = this.signIn.bind(this);
    this.getDataLocal = this.getDataLocal.bind(this);
    this.usernamelabel=React.createRef();
  }

  getDataLocal() {
    fetch("https://ahmsdeve2e.azurewebsites.net/api/Order")
      .then(res => res.json()) 
      .then(
        (result) => {
          console.log(result);
          this.setState({
            orders: result
          });
        }
      );
  }

  signIn() {

  }

   getData() {
    
 

   
  }


  callApi(mytoken)
  {
    
  }

  componentDidMount() {
    // fetch("https://localhost:44338/api/Order")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         orders: result
    //       });
    //     }
    //   );
  }
render() {
    return (
      
      <div>
        <div class="btn-group ml-auto dropleft">
        <button type="button" id="getlocaldata" class="btn btn-secondary d-none" onClick={this.getDataLocal}>Get Data Local</button>
        <button type="button" id="testbutton" class="btn btn-secondary d-none" onClick={this.getData}>Get Data</button>
        <button type="button" id="editProfileButton" class="btn btn-secondary d-none" onclick="sayHello()">Edit Profile</button>
        <button type="button" id="signIn" class="btn btn-secondary" onClick={this.signIn}>Sign-in</button>
        <button type="button" id="signOut" class="btn btn-success d-none" onclick="signOut()">Sign-out</button>
        <label  id="usernamelabel" ref={this.usernamelabel} class="btn btn-success d-none" ></label>
      </div>

        <h2>Employees Data v2...</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Desc</th>
              <th>Location</th>
              <th>Latitude</th>
            </tr>
          </thead>
          <tbody>   
            {this.state.orders.map(order => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.orderDescription}</td>
              <td>{order.location}</td>
              <td>{order.latitude}</td>
              </tr>
  ))}      
          </tbody>

        </table>
      </div>
      );
    }
  
}
export default withAITracking(reactPlugin, EmployeeComponent);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <EmployeeComponent />

);
