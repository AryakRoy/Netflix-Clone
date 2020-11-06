import './App.css';
import Row from "./Components/Row.js"
import requests from "./requests.js"
import Banner from "./Components/Banner.js"
import NavBar from "./Components/NavBar.js"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row key={requests.fetchNetflixOriginals} title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow="true"/>
      <Row key={requests.fetchTrending} title="Tending Now" fetchURL={requests.fetchTrending}/>
      <Row key={requests.fetchTopRated} title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row key={requests.fetchActionMovies} title="Action" fetchURL={requests.fetchActionMovies}/>
      <Row key={requests.fetchComedyMovies} title="Comedy" fetchURL={requests.fetchComedyMovies}/>
      <Row key={requests.fetchHorrorMovies} title="Horror" fetchURL={requests.fetchHorrorMovies}/>
      <Row key={requests.fetchRomanceMovies} title="Romance" fetchURL={requests.fetchRomanceMovies}/>
      <Row key={requests.fetchDocumentaries} title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
