function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
      <li className="portfolio__item">
        <a className="portfolio__link" href="https://github.com/vasily0011/how-to-learn" target="_blank" rel="noreferrer">
        Статичный сайт
        <p className="portfolio__arrow">↗</p>
        </a>
      </li>
      <li className="portfolio__item">
        <a className="portfolio__link" href="https://github.com/vasily0011/russian-travel" target="_blank" rel="noreferrer">
        Адаптивный сайт
        <p className="portfolio__arrow">↗</p>
        </a>
      </li>
      <li className="portfolio__item">
        <a className="portfolio__link" href="https://github.com/vasily0011/react-mesto-api-full" target="_blank" rel="noreferrer">
        Одностраничное приложение
        <p className="portfolio__arrow">↗</p>
        </a>
      </li>
      </ul>
    </section>
  );
}

export default Portfolio;
