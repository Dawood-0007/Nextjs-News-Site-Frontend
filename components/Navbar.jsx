"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import "../assets/navbar.css";

const Navbar = ({ allArticles = [] }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (value) => {
    setSearchValue(value);
    if (value.length > 0) {
      const filtered = allArticles.filter(article =>
        article.title.toLowerCase().includes(value.toLowerCase()) ||
        article.article.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`navbar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <nav className="nav-main">
        <p className="navName">Kalyptica</p>
        
        <button className="line-btn" onClick={toggleMobileMenu}>☰</button>
        
        <ul className={`nav ${isMobileMenuOpen ? 'show' : ''}`}>
          <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link href="/articles" onClick={() => setIsMobileMenuOpen(false)}>Articles</Link></li>
          <li><Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </nav>

      <div className="search-container">
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="🔍 Search for Article"
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          
          {showSuggestions && searchValue && (
            <div className="suggestions-dropdown">
              {searchResults.length > 0 ? (
                searchResults.map((article) => (
                  <Link 
                    key={article.id} 
                    href={`/article/${article.slug}`}
                    className="suggestion-item"
                    onClick={() => {
                      setSearchValue("");
                      setShowSuggestions(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {article.title}
                  </Link>
                ))
              ) : (
                <div className="no-results">No articles found</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;