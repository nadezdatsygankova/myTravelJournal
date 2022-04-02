
import './App.css';
import Nav from './components/Nav'
import data from './data'
import Card from './components/Card'

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.imageUrl}
        item={item} />
    )
  })

  return (
    <div className="App">
      <Nav />
      <section >
        {cards}
      </section>
    </div>
  );
}

export default App;

