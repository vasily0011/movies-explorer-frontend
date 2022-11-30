import Avatar from "../../images/avatar.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <h3 className="section__title" id="about-me">
        Студент
      </h3>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__title">Василий</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 34 года</p>
          <p className="about-me__description">
            Я родился в городе Константиновске Ростовской области, закончил
            Новочеркасский политехнический институт по специальности "Програмное
            обеспеспечение вычислительной техники и автоматизированных систем".
            Я люблю слушать музыку, а ещё увлекаюсь бегом. После того, как
            прошёл курс по веб-разработке, начал заниматься
          </p>
          <a
            className="about-me__link"
            href="https://github.com/vasily0011"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={Avatar} alt="Фото" className="about-me__avatar" />
      </div>
    </section>
  );
}

export default AboutMe;
