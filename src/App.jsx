import React , {Fragment}  from 'react'
import Footer from './components/footer/Section.jsx'
import Header from './components/header/Section.jsx'
import Contenu from './components/contenu/Section.jsx'
export default class App extends React.Component{
  render() {
    return(
      <Fragment>
        <Header/>
        <Contenu/>
        <Footer/>
      </Fragment>
    );
  }
}

