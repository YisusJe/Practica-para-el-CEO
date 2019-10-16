import React from "react";
import "./bootstrap.min.css";
import "./cover.css";

function Nav() {
  return (
    <nav class="nav nav-masthead justify-content-center">
      <a class="nav-link active" href="https://getbootstrap.com/">
        Home
      </a>
      <a class="nav-link" href="https://getbootstrap.com/">
        Features
      </a>
      <a class="nav-link" href="https://getbootstrap.com/">
        Contact
      </a>
    </nav>
  );
}

function Header() {
  return (
    <header class="masthead mb-auto">
      <div class="inner">
        <h3 class="masthead-brand">Cover</h3>
        <Nav/>
      </div>
    </header>
  );
}

function Cover() {
  return (
    <main role="main" class="inner cover">
      <h1 class="cover-heading">Cover your page.</h1>
      <p class="lead">
        Cover is a one-page template for building simple and beautiful home
        pages. Download, edit the text, and add your own fullscreen background
        photo to make it your own.
      </p>
      <p class="lead">
        <a href="https://getbootstrap.com/" class="btn btn-lg btn-secondary">
          Learn more
        </a>
      </p>
    </main>
  );
}

function Footer() {
  return (
    <footer class="mastfoot mt-auto">
      <div class="inner">
        <p>
          Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>,
          by <a href="https://twitter.com/mdo">@mdo</a>.
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Header></Header>
      <Cover></Cover>
      <Footer></Footer>
    </div>
  );
}

export default App;
