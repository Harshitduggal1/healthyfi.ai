import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
// other imports...

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                {/* Define your routes here */}
                <Route exact path="/" component={HomePage} />
                <Route path="/other" component={OtherPage} />
                {/* Catch-all route for 404 page */}
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;
