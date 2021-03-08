import "./App.css";
import React, { useState } from "react";
import MovieList from "./component/movieList";
import { Navbar, Form, FormControl, Button, Nav } from "react-bootstrap";
import Add from "./component/add";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import Infos from "./component/Infos";
function App() {
  const data = [
    {
      title: "Flinch",
      src: "https://best.egybest.film/wp-content/uploads/2021/02/Flinch-1.jpg",
      rating: 2,
      text:
        "A young hit man wrestles with his conscience when he begins to develop feelings for the woman who witnesses a murder he commits.",
      trailer:"https://www.youtube.com/embed/HrELGOlaTSA",
      description:"flinch is a movie"
    },
    {
      title: "Monster Hunter",
      src: "https://pbs.twimg.com/media/El3_IO6U4AEvc65.jpg",
      rating: 3,
      text:
        "When Lt. Artemis and her loyal soldiers are transported to a new world, they engage in a desperate battle for survival against enormous enemies with incredible powers.",
       trailer:"https://www.youtube.com/embed/QNV8PsuJEZE",
       description:'monster hunter is a movie' 
    },
    {
      title: "Expiry",
      src:
        "https://img.yts.mx/assets/images/movies/expiry_2021/medium-cover.jpg",
      rating: "1",
      text:
        "A couple living in a dystopian society that regulates relationships wake up one morning to find they are no longer allowed to touch. Determined to stay together, they must search for a way to defy the system that controls their lives.",
        trailer:"https://www.youtube.com/embed/DoqqHHBkaoM",
        description:'expiry is a movie'
    },
    {
      title: "Beauty Is Skin Deep",
      src: "https://i.jeded.com/i/beauty-is-skin-deep.203760.jpg",
      rating: 3,
      text:
        "The small town of Glenwood is rocked by a series of unsolved murders.",
        trailer:"https://www.youtube.com/embed/msl3eKQw9-c",
        description:'Beauty is a skin deep'
    },
    {
      title: "Burn It All",
      src:
        "https://i.egycdn.com/pic/WmFwZndlY21ZbXZjbVl2bUhjRWNtSVB2TmptRVBtbW1F.jpg",
      rating: 5,
      text:
        "An enraged woman battles a ring of violent organ smugglers after returning to her hometown to bury her mother.",
        trailer:"https://www.youtube.com/embed/bl5qqkiHJcU",
        description:'burn it all is a movie'
    },
    {
      title: "The Mauritanian",
      src:
        "https://best.egybest.film/wp-content/uploads/2021/02/The-Mauritanian.jpg",
      rating: 4,
      text:
        "A defense attorney, her associate and a military prosecutor uncover a far-reaching conspiracy while investigating the case of a suspected 9/11 terrorist imprisoned at Guantanamo Bay, Cuba, for six years.",
        trailer:"https://www.youtube.com/embed/EdAh-1d8lNY",
        description:'the mauritanian is a movie'
    },
  ];
  const starList = [
    {
      id: 1,
      icon: "★",
      isColored: false,
    },
    {
      id: 2,
      icon: "★",
      isColored: false,
    },
    {
      id: 3,
      icon: "★",
      isColored: false,
    },
    {
      id: 4,
      icon: "★",
      isColored: false,
    },
    {
      id: 5,
      icon: "★",
      isColored: false,
    },
  ];

  const [tabStar, setTabStar] = useState(starList);

  const [movieList, setMovieList] = useState(data);
  const [search, setSearch] = useState("");

  const movieAdd = (title, src, rating, text) =>
    setMovieList([...movieList, { title, src, rating, text }]);
  const changeColor = (id) => {
    setTabStar(
      tabStar.map((el) =>
        el.id === id ? { ...el, isColored: !el.isColored } : el
      )
    );
  };
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">CyriX</Navbar.Brand>
        <Add movieAdd={movieAdd} />
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <FormControl
            onChange={(search) => setSearch(search.target.value)}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <div>
            {tabStar.map((star) => (
              <span
                className={star.isColored ? "gold" : "black"}
                onClick={() => changeColor(star.id)}
              >
                {star.icon}
              </span>
            ))}
          </div>
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
      <BrowserRouter>
        <Switch>
          <Route
           exact path="/"
            render={(props) => (
              <MovieList
                movieList={movieList}
                search={search}
                tabStar={tabStar}
                {...props}
              />
            )}
          />
          <Route
            path="/infos/:title"
            render={(props) => (
              <Infos
                movieList={movieList}
                
                {...props}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
