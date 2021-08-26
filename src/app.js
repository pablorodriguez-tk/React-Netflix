import { BrowserRouter as Router, Route } from 'react-router-dom';
import FaqsContainer from './containers/faqs';
import FooterContainer from './containers/footer';
import JumbotronContainer from './containers/jumbotron';
import * as ROUTES from './constants/routes';

const App = () => (
  <Router>
    <Route exact path={ROUTES.HOME}>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </Route>
  </Router>
);

export default App;
