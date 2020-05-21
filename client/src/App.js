import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import ReactGA from 'react-ga'
import Dashboard from './Dashboard'
import Login from './Login'
import NotFound from './NotFound'
import ErrorBoundary from './ErrorBoundary'
import CSVImport from './CSVImport'
import GetStarted from './GetStarted'
import Setup from './Setup'


const App = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-117297491-1')
    }
  }, [])

  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/csv-import">
            <CSVImport />
          </Route>
          <Route path="/start">
            <GetStarted />
          </Route>
          <Route path="/setup">
            <Setup />
          </Route>
          <Route exact path="/">
            <Redirect to={'/login'} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ErrorBoundary>
  )
}

export default App
