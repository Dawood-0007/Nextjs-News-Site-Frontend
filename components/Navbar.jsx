"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import "../assets/navbar.css"; 

const Navbar = () => {

  const [searchValue, setValue] = useState("");
  const [result, setResult] = useState([]);
  const [suggestion, setSuggestion] = useState(true)

  function handleClick() {
    const searchInp = document.getElementById("search-input");
    const mainNav = document.getElementById('navbar')
    const navItems = document.getElementById('nav-ul');
    const navbar = document.getElementById('main-nav');

    if (navbar.classList.contains('nav-main')) {
      navbar.classList.remove('nav-main');
      navbar.classList.add('nav-display');
    } else {
      navbar.classList.remove('nav-display');
      navbar.classList.add('nav-main');
    }

    if (navItems.classList.contains('nav')) {
      navItems.classList.remove('nav');
      navItems.classList.add('nav-items');
    } else {
      navItems.classList.remove('nav-items');
      navItems.classList.add('nav');
    }
    if (mainNav.classList.contains('navbar-display')) {
      mainNav.classList.remove('navbar-display');
      mainNav.classList.add('navbar-display-sec');
    } else {
      mainNav.classList.add('navbar-display');
      mainNav.classList.remove('navbar-display-sec');
    }
    if (searchInp.style.display == "none") {
      searchInp.style.display = "flex";
    }  else {
      searchInp.style.display = "none";
    }
  };
  function handleClicked() {
    const searchInp = document.getElementById("search-input");
    const mainNav = document.getElementById('navbar')
    const navbar = document.getElementById('main-nav');
    const navItems = document.getElementById('nav-ul');

    if (navbar.classList.contains('nav-display')) {
      navbar.classList.add('nav-main');
      navbar.classList.remove('nav-display');
    }
    if (navItems.classList.contains('nav-items')) {
      navItems.classList.add('nav');
      navItems.classList.remove('nav-items');
    }

    if (mainNav.classList.contains('navbar-display')) {
      mainNav.classList.remove('navbar-display');
      mainNav.classList.add('navbar-display-sec');
    }
    if (searchInp.style.display == "none") {
      searchInp.style.display = "flex";
    }
  }

  function handleChange(event) {
    const value = event.target.value;
    setValue(value);
  }

  useEffect(() => {
    async function fetchData() {
      if (searchValue !== "") {
        try {
          const response = await axios.get(`https://khatreezserver.vercel.app/search/article/${encodeURIComponent(searchValue)}`);
          const result = response.data;
          setResult(result);
        } catch (err) {
          console.error("Error Occured", err)
        }
      }
    } fetchData();
  }, [searchValue]);

  function handleFocus() {
    setSuggestion(true)
  }

  function handleFocusOut() {
    setTimeout(() => setSuggestion(false), 100);
  }

  function handleClickOut() {
    setTimeout(() => setSuggestion(false), 100);
    setTimeout(() => { setValue("") }, 100); }

  return (
    <div className='navbar' id='navbar'>
      <nav id='main-nav' className='nav-main'>
        <p className='navName'>Khatreez</p>
        <ul className='nav' id="nav-ul">
          <li><Link href="/" onClick={handleClicked}>Home</Link></li>
          <li><Link href="/articles" onClick={handleClicked}>Articles</Link></li>
          <li><Link href="/contact" onClick={handleClicked}>Contact Us</Link></li>
        </ul>
        <button className="line-btn" onClick={handleClick}>☰</button>
      </nav>
      <div id='search-input' className={`div-search-main ${suggestion ? "search-main" : ""}`}>
  <div className='div-search'>
    <input 
      type="text" 
      placeholder='🔍 Search for Article' 
      name="search" 
      onChange={handleChange} 
      onBlur={handleFocusOut} 
      onFocus={handleFocus} 
      value={searchValue} 
    />
  {suggestion && (
  <ul className='ul-focus'>
    {searchValue !== "" && result.length > 0 
      ? result.map((article) => (
        <React.Fragment key={article.id}>
          <li 
            className='search-items'
            onClick={handleClickOut}
          ><Link to={`/articles/${article.id}`}>{article.title}</Link></li>
          <hr />
        </React.Fragment>
      ))
      : searchValue !== "" && result.length === 0 && (
        <li className='Link-items'>No article found</li>
      )}
  </ul>
)}

  </div>
</div>
    </div>
  )
}
export default Navbar