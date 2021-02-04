import {Route, Switch} from 'react-router-dom'
import App from '../App'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/Homepage'

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/home" exact component={HomePage} />


        </Switch>
    )
}