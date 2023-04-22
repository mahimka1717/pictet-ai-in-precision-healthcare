

export default function Main_ft() {
    return (
      <>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <header className="o-header o-header--simple" data-o-component="o-header" data-o-header--no-js>
          <div className="o-header__row o-header__top">
            <div className="o-header__container">
              <div className="o-header__top-wrapper">
                <div className="o-header__top-column o-header__top-column--left">
                  <a href="/partnercontent/swiss-tourism-board/aarau/#o-header-drawer" className="o-header__top-link o-header__top-link--menu" aria-controls="o-header-drawer" title="Open drawer menu">
                    <span className="o-header__top-link-label">Open drawer menu</span>
                  </a>
                  <a href="/partnercontent/swiss-tourism-board/aarau/#o-header-search" className="o-header__top-link o-header__top-link--search" aria-controls="o-header-search" title="Open search bar">
                    <span className="o-header__top-link-label">Open search bar</span>
                  </a>
                </div>
                <div className="o-header__top-column o-header__top-column--center">
                  <a className="o-header__top-logo" href="https://www.ft.com/" title="Go to Financial Times homepage">
                    <span className="o-header__visually-hidden">Financial Times</span>
                  </a>
                </div>
                <div className="o-header__top-column o-header__top-column--right">
                  <a className="o-header__top-link o-header__top-link--myft" href="https://www.ft.com/myft" aria-label="My F T">
                    <span className="o-header__visually-hidden">myFT</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="o-header-search" className="o-header__row o-header__search o--if-js" role="search" data-o-header-search>
            <div className="o-header__container">
              <form className="o-header__search-form" action="https://www.ft.com/search" role="search" aria-label="Site search">
                <label className="o-header__visually-hidden" htmlFor="o-header-search-term-js">Search the <abbr title="Financial Times">FT</abbr></label>
                <input className="o-header__search-term" id="o-header-search-term-js" name="q" type="text" placeholder="Search the FT" />
                <button className="o-header__search-submit" type="submit">Search</button>
                <button className="o-header__search-close" type="button" aria-controls="o-header-search" title="Close search bar">
                  <span className="o-header__visually-hidden">Close search bar</span>
                </button>
              </form>
            </div>
          </div>
        </header>
        <div style={{display:'none'}} className="o-header__drawer" id="o-header-drawer" role="navigation" aria-label="Drawer menu" data-o-header-drawer data-o-header-drawer--no-js>
          <div className="o-header__drawer-inner">
            <div className="o-header__drawer-tools">
              <a className="o-header__drawer-tools-logo" href="https://www.ft.com/">
                <span className="o-header__visually-hidden">Financial Times</span>
              </a>
              <button type="button" className="o-header__drawer-tools-close" aria-controls="o-header-drawer" title="Close drawer menu">
                <span className="o-header__visually-hidden">Close drawer menu</span>
              </button>
            </div>
            <nav className="o-header__drawer-editions" aria-label="Edition switcher">
              <a className="o-header__drawer-editions-link" href="https://www.ft.com/uk?edition=uk" aria-label="Current edition" aria-current="page">UK Edition</a>
              <a className="o-header__drawer-editions-link" href="https://www.ft.com/international?edition=international">International Edition</a>
            </nav>
            <div className="o-header__drawer-search">
              <form className="o-header__drawer-search-form" action="https://www.ft.com/search" role="search" aria-label="Site search">
                <label className="o-header__visually-hidden" htmlFor="o-header-drawer-search-term">Search the <abbr title="Financial Times">FT</abbr></label>
                <input className="o-header__drawer-search-term" id="o-header-drawer-search-term" name="q" type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" placeholder="Search the FT" />
                <button className="o-header__drawer-search-submit" type="submit">
                  <span className="o-header__visually-hidden">Search</span>
                </button>
              </form>
            </div>
            <nav className="o-header__drawer-menu o-header__drawer-menu--primary">
              <ul className="o-header__drawer-menu-list">
                <li className="o-header__drawer-menu-item o-header__drawer-menu-item--heading">
                  Top sections
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--selected" href="https://www.ft.com/" aria-label="Current page" aria-current="page">Home</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <div className="o-header__drawer-menu-toggle-wrapper">
                    <a className="o-header__drawer-menu-link o-header__drawer-menu-link--parent o-header__drawer-menu-link--unselected" href="https://www.ft.com/world">World</a>
                    <button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-1">
                      Show more World links
                    </button>
                  </div>
                  <ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-1">
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/">World Economy</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/world/uk">UK</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/world/us">US</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/world/asia-pacific/china">China</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/world/africa">Africa</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/world/asia-pacific">Asia Pacific</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/emerging-markets">Emerging Markets</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/world/europe">Europe</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/world/americas">Latin America</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/world/mideast">Middle East and Africa</a>
                    </li>
                  </ul>
                </li>
                <li className="o-header__drawer-menu-item">
                  <div className="o-header__drawer-menu-toggle-wrapper">
                    <a className="o-header__drawer-menu-link o-header__drawer-menu-link--parent o-header__drawer-menu-link--unselected" href="https://www.ft.com/world/uk">UK</a>
                    <button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-2">
                      Show more UK links
                    </button>
                  </div>
                  <ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-2">
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/uk-business-economy">UK Economy</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/world/uk/politics">UK Politics &amp; Policy</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/companies/uk">UK Companies</a>
                    </li>
                  </ul>
                </li>
                <li className="o-header__drawer-menu-item">
                  <div className="o-header__drawer-menu-toggle-wrapper">
                    <a className="o-header__drawer-menu-link o-header__drawer-menu-link--parent o-header__drawer-menu-link--unselected" href="https://www.ft.com/companies">Companies</a>
                    <button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-3">
                      Show more Companies links
                    </button>
                  </div>
                  <ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-3">
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/companies/energy">Energy</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/companies/financials">Financials</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/companies/health">Health</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/companies/industrials">Industrials</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/companies/media">Media</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/companies/retail-consumer">Retail &amp; Consumer</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/companies/technology">Technology</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/companies/telecoms">Telecoms</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/companies/transport">Transport</a>
                    </li>
                  </ul>
                </li>
                <li className="o-header__drawer-menu-item">
                  <div className="o-header__drawer-menu-toggle-wrapper">
                    <a className="o-header__drawer-menu-link o-header__drawer-menu-link--parent o-header__drawer-menu-link--unselected" href="https://www.ft.com/emerging-markets">Markets</a>
                    <button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-4">
                      Show more Markets links
                    </button>
                  </div>
                  <ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-4">
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://ftalphaville.ft.com">Alphaville</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://markets.ft.com/data">Markets Data</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/capital-markets">Capital Markets</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/commodities">Commodities</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/currencies">Currencies</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/equities">Equities</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/fund-management">Fund Management</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/ft-trading-room">Trading</a>
                    </li>
                  </ul>
                </li>
                <li className="o-header__drawer-menu-item">
                  <div className="o-header__drawer-menu-toggle-wrapper">
                    <a className="o-header__drawer-menu-link o-header__drawer-menu-link--parent o-header__drawer-menu-link--unselected" href="https://www.ft.com/opinion">Opinion</a>
                    <button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-5">
                      Show more Opinion links
                    </button>
                  </div>
                  <ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-5">
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/columnists">Columnists</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/ft-view">FT View</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/the-big-read">The Big Read</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/lex">Lex</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://ftalphaville.ft.com/">Alphaville</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/obituaries">Obituaries</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/letters">Letters</a>
                    </li>
                  </ul>
                </li>
                <li className="o-header__drawer-menu-item">
                  <div className="o-header__drawer-menu-toggle-wrapper">
                    <a className="o-header__drawer-menu-link o-header__drawer-menu-link--parent o-header__drawer-menu-link--unselected" href="https://www.ft.com/work-careers">Work &amp; Careers</a>
                    <button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-6">
                      Show more Work &amp; Careers links
                    </button>
                  </div>
                  <ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-6">
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="http://rankings.ft.com/businessschoolrankings/rankings">Business School Rankings</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/business-education">Business Education</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/entrepreneurship">Entrepreneurship</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/recruitment">Recruitment</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/business-books">Business Books</a>
                    </li>
                  </ul>
                </li>
                <li className="o-header__drawer-menu-item">
                  <div className="o-header__drawer-menu-toggle-wrapper">
                    <a className="o-header__drawer-menu-link o-header__drawer-menu-link--parent o-header__drawer-menu-link--unselected" href="https://www.ft.com/life-arts">Life &amp; Arts</a>
                    <button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-7">
                      Show more Life &amp; Arts links
                    </button>
                  </div>
                  <ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-7">
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/house-home">House &amp; Home</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/books">Books</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/companies/food-beverage">Food &amp; Drink</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/travel">Travel</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/style">Style</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/arts">Arts</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/">Sports</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/music">Music</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/film">Film, TV &amp; Radio</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/magazine">Magazine</a>
                    </li>
                  </ul>
                </li>
                <li className="o-header__drawer-menu-item">
                  <div className="o-header__drawer-menu-toggle-wrapper">
                    <a className="o-header__drawer-menu-link o-header__drawer-menu-link--parent o-header__drawer-menu-link--unselected" href="https://www.ft.com/personal-finance">Personal Finance</a>
                    <button className="o-header__drawer-menu-toggle o-header__drawer-menu-toggle--unselected" aria-controls="o-header-drawer-child-8">
                      Show more Personal Finance links
                    </button>
                  </div>
                  <ul className="o-header__drawer-menu-list o-header__drawer-menu-list--child" id="o-header-drawer-child-8">
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/personal-finance/mortgages">Property &amp; Mortgages</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/personal-finance/investments">Investments</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/personal-finance/pensions">Pensions</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/personal-finance/tax">Tax</a>
                    </li>
                    <li className="o-header__drawer-menu-item">
                      <a className="o-header__drawer-menu-link o-header__drawer-menu-link--child o-header__drawer-menu-link--unselected" href="https://www.ft.com/">Bankings &amp; Savings</a>
                    </li>
                  </ul>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--unselected" href="https://www.ft.com/">Science &amp; Environment</a>
                </li>
                <li className="o-header__drawer-menu-item o-header__drawer-menu-item--heading">
                  FT recommends
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--unselected" href="https://www.ft.com/lex">Lex</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--unselected" href="https://ftalphaville.ft.com/">Alphaville</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--unselected" href="https://www.ft.com/lunch-with-the-ft">Lunch with the FT</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--unselected" href="https://www.ft.com/video">Video</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--unselected" href="https://www.ft.com/special-reports">Special Reports</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--unselected" href="https://www.ft.com/news-feed">News feed</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link-- o-header__drawer-menu-link--unselected" href="https://www.ft.com/newsletters">Newsletters</a>
                </li>
                <li className="o-header__drawer-menu-item o-header__drawer-menu-item--divide">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--secondary o-header__drawer-menu-link--unselected" href="https://www.ft.com/myft">My FT</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--secondary o-header__drawer-menu-link--unselected" href="https://markets.ft.com/data/portfolio/dashboard">Portfolio</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link o-header__drawer-menu-link--secondary o-header__drawer-menu-link--unselected" href="https://www.ft.com/todaysnewspaper">{`Today's Paper`}</a>
                </li>
              </ul>
            </nav>
            <nav className="o-header__drawer-menu o-header__drawer-menu--user">
              <ul className="o-header__drawer-menu-list">
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link" href="https://www.ft.com/products?segID=400863&segmentID=190b4443-dc03-bd53-e79b-b4b6fbd04e64">Subscribe</a>
                </li>
                <li className="o-header__drawer-menu-item">
                  <a className="o-header__drawer-menu-link" href="https://www.ft.com/login">Sign In</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="pc m-pc">
          <div className="tooltip-progress progress-container js-progress">
            <div className="progress-bar" id="progressBar" />
          </div>
          <div className="pc-wrapper o-grid-container">
            <div className="pc__client">
              <div className="pc__client-title">
                JPMorgan
              </div>
              <div className="pc__client-disclaimers">
                <div className="pc__title-button">
                  <img alt="" src="https://www.ft.com/partnercontent/cms/_resources/themes/simpleBC/dist/static/pcHeader/information_hover.png?m=1628000569" />
                </div>
              </div>
            </div>
            <div className="pc__title">
              <div className="pc__title-content">
                Partner Content
                <div className="pc__title-button">
                  <img alt="" src="https://www.ft.com/partnercontent/cms/_resources/themes/simpleBC/dist/static/pcHeader/information_hover.png?m=1628000569" />
                </div>
              </div>
              <div className="pc__client-title">
                JPMorgan
              </div>
            </div>
            <div className="pc__share">
              <div className="pc__share-content">
                Share
              </div>
              <div className="pc__share-btn">
                <img alt="" src="https://www.ft.com/partnercontent/cms/_resources/themes/simpleBC/dist/static/pcHeader/btn_export.png?m=1628000569" />
              </div>
            </div>
            <div className="pc__disclaimer">
              <div className="pc__disclaimer-btn">
                <img alt="" src="https://www.ft.com/partnercontent/cms/_resources/themes/simpleBC/dist/static/pcHeader/close.svg?m=1628000569" />
              </div>
              <div id="clientname-disclaimer" style={{display: 'none'}}>JPMorgan</div>
              <div className="pc__disclaimer-content">
                This content was paid for by JPMorgan and produced in partnership with the Financial Times
                Commercial department.
              </div>
            </div>
            <div className="pc__share-more">
              <div className="pc__share-more-close">
                <img alt="" src="https://www.ft.com/partnercontent/cms/_resources/themes/simpleBC/dist/static/pcHeader/close.svg?m=1628000569" />
              </div>
              <div className="pc__share-more-title">Share</div>
              <div className="pc__share-more-btn">
                <div className="pc__share-more-btn__link -fb">
                  <a rel="noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=http://www.ft.com/partnercontent/swiss-tourism-board/aarau.html" target="_blank">
                    <div className="pc__share-more-link-btn">
                      <div className="pc__share-more-link-btn-img">
                        <img alt="" src="https://www.ft.com/partnercontent/cms/_resources/themes/simpleBC/dist/static/social/facebook.png?m=1628000569" />
                      </div>
                      <div className="pc__share-more-link-btn-content">
                        Share with Facebook
                      </div>
                    </div>
                  </a>
                </div>
                <div className="pc__share-more-btn__link -tw">
                  <a rel="noreferrer" href="https://twitter.com/share?url=http://www.ft.com/partnercontent/swiss-tourism-board/aarau.html&text=Aarau&related=ftcompanies&via=ft_content" target="_blank">
                    <div className="pc__share-more-link-btn">
                      <div className="pc__share-more-link-btn-img">
                        <img alt="" src="https://www.ft.com/partnercontent/cms/_resources/themes/simpleBC/dist/static/social/twitter.png?m=1628000569" />
                      </div>
                      <div className="pc__share-more-link-btn-content">
                        Share with Twitter
                      </div>
                    </div>
                  </a>
                </div>
                <div className="pc__share-more-btn__link -li">
                  <a rel="noreferrer" href="https://www.linkedin.com/shareArticle?mini=true&url=http://www.ft.com/partnercontent/swiss-tourism-board/aarau.html&title=Aarau&summary=&source=@ft_content" target="_blank">
                    <div className="pc__share-more-link-btn">
                      <div className="pc__share-more-link-btn-img">
                        <img alt="" src="https://www.ft.com/partnercontent/cms/_resources/themes/simpleBC/dist/static/social/linkedin.png?m=1628000569" />
                      </div>
                      <div className="pc__share-more-link-btn-content">
                        Share with LinkedIn
                      </div>
                    </div>
                  </a>
                </div>
                <div className="pc__share-more-btn__link -wa">
                  <a rel="noreferrer" href="whatsapp://send?text=Aarau-http://www.ft.com/partnercontent/swiss-tourism-board/aarau.html" target="_blank">
                    <div className="pc__share-more-link-btn">
                      <div className="pc__share-more-link-btn-img">
                        <img alt="" src="https://www.ft.com/partnercontent/cms/_resources/themes/simpleBC/dist/static/social/whatsapp.png?m=1628000569" />
                      </div>
                      <div className="pc__share-more-link-btn-content">
                        Share with WhatsApp
                      </div>
                    </div>
                  </a>
                </div>
                <div className="pc__share-more-btn__link -link" data-ori="Copy Link" data-cp="The link has been copied!">
                  <a href="/partnercontent/swiss-tourism-board/aarau/#">
                    <div className="pc__share-more-link-btn">
                      <div className="pc__share-more-link-btn-img">
                        <img alt="" src="https://www.ft.com/partnercontent/cms/_resources/themes/simpleBC/dist/static/social/link.png?m=1628000569" />
                      </div>
                      <div className="pc__share-more-link-btn-content">
                        Copy Link
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }