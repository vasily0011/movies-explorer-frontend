import { Link } from 'react-router-dom';

function PageNotFound () {

  return (
  <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <Link className='not-found__back-link' to="/">Назад</Link>
  </section>
  )
}

export default PageNotFound;