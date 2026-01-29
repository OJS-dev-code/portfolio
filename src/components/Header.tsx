import React from 'react';

export const Header: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <div className="header__inner">
        <button
          className="header__logo"
          type="button"
          onClick={() => handleScroll('top')}
        >
          OJS
        </button>
        <nav className="header__nav">
          <button type="button" onClick={() => handleScroll('projects')}>
            Projects
          </button>
          <button type="button" onClick={() => handleScroll('skills')}>
            Skills
          </button>
          <button type="button" onClick={() => handleScroll('contact')}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

