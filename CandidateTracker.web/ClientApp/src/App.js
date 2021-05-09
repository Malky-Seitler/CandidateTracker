import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import { CandidatesCountContextComponent } from './CandidatesCountContext';
import ShowPending from './Pages/ShowPending';
import ShowRefused from './Pages/ShowRefused';
import ShowConfirmed from './Pages/ShowConfirmed';
import ShowDetails from './Pages/ShowDetails';

export default class App extends Component {

    static displayName = App.name;

    render() {
        return (
            <CandidatesCountContextComponent>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/AddCandidate' component={AddCandidate} />
                    <Route exact path='/ShowPending' component={ShowPending} />
                    <Route exact path='/ShowRefused' component={ShowRefused} />
                    <Route exact path='/ShowConfirmed' component={ShowConfirmed} />
                    <Route exact path='/ShowDetails/:id' component={ShowDetails} />
                </Layout>
            </CandidatesCountContextComponent>

        );
    }
}