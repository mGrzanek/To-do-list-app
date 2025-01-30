import NavBar from "./components/NavBar/NavBar";
import Container from "./components/Container/Container";
import Hero from "./components/Hero/Hero";
import SearchForm from "./components/SearchForm/SearchForm";
import List from "./components/List/List";

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </main>
  );
}

export default App;
