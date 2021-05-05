import React from 'react';
import { Switch, Route } from 'react-router-dom'
import AppBar from './components/AppBar'
import ContactsView from './Views/ContactsView'
import HomeView from './Views/HomeView'
import RegisterView from './Views/RegisterView'
import LoginView from './Views/LoginView'
import Container from './components/Container/index'

// import ContactForm from './components/Form/ContactForm/ContactForm';
// import Filter from './components/Form/Filter/Filter';
// import ContactList from './components/Form/ContactList/ContactList';
import './App.css'


const App = () => (
  <Container>
    <AppBar />
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/register" component={RegisterView} />
      <Route path="/login" component={LoginView} />
      <Route path="/contacts" component={ContactsView} />


    </Switch>

  </Container>
)
// class App extends Component {

//   render() {

//     return (
//       <>
//         <h1 className="Title">Phonebook</h1>
//         <ContactForm />
//         <h2 className="Title">Contacts</h2>
//         <Filter />
//         <ContactList />
//       </>

//     )
//   }
// }

export default App;
