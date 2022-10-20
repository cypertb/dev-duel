import GlobalStyles from './GlobalStyles'
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { Navbar } from './components'
import { inspectUser, duelUsers } from './services/userService'
import { useEffect } from 'react'

import Home from './Screens/Home'
import Inspect from './Screens/Inspect'
// import InspectResults from './Screens/InspectResults'
import Duel from './Screens/Duel'
// import DuelResults from './Screens/DuelResults'

function App() {
   // Hook that runs after React has updated the DOM
   useEffect(() => {
      inspectUser()
   }, [])

   return (
      <Router>
         <GlobalStyles />
         <Navbar />
         <Route exact path="/duel" component={Duel} />
         {/* <Route path="/duelResults" component={DuelResults} /> */}
         <Route exact path="/inspect" component={Inspect} />
         {/* <Route path="/inspectResults" component={InspectResults} /> */}
         <Route exact path="/" component={Home} />
      </Router>
   )
}

export default App
