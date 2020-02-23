import React, { Component } from 'react';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render () {
        return (
            <div className="App">
                <Header />
               
                
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/Schools' component={Home}/>
                    <Route  exact path='/contactus' render ={ () => <Contact />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);