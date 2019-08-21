import React from 'react'
import { BrowserRouter , Route } from 'react-router-dom'
import Homepage_Content from './homepage/Homepage_Content'
import Header from './Header'
import Footer from './Footer'
import Artist from './Artist'

const App = () => {
    return (<div>
        <BrowserRouter>
            <div>
                <Header />
                <Route path='/' exact component={Homepage_Content} />
                <Route path='/artist' component={Artist} />
                <Footer />

            </div>
        </BrowserRouter>
    </div>);
};

export default App;
