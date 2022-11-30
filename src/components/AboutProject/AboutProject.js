function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="section__title" id="about-project">
        О проекте
      </h2>
      <div className="about-project__info">
        <div className="about-project__description">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__description">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project-graph">
        <p className="about-project-graph__backend">1 неделя</p>
        <p className="about-project-graph__frontend">4 недели</p>
      </div>
      <div className="about-project-graph">
        <p className="about-project-graph__backend about-project-graph_text">
          Back-end
        </p>
        <p className="about-project-graph__frontend about-project-graph_text">
          Front-end
        </p>
      </div>
    </section>
  );
}

export default AboutProject;
