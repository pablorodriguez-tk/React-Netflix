import Jumbotron from './components/jumbotron';
import JumboData from './fixtures/jumbo.json';

const App = () => {
  return (
    <Jumbotron.Container>
      {JumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <p>{item.title}</p>
          <p>{item.subTitle}</p>
          <p>{item.image}</p>
          <p>{item.alt}</p>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
};

export default App;
