import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [text, setText] = useState("CICD Testing. Bui Trong Tri");

  return (
    <Router>
      <div>
        <h1>{text}</h1>
        <button onClick={() => setText("After you click 'Click me' button")}>Click me</button>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About Us</h2>;
}

function Contact() {
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <p>Welcome to my blog</p>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Blog</h2>
      <p>Welcome to my home page</p>
    </div>
  )
}

export default App;
