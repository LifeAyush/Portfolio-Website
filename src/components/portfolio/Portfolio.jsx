import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.jpg";
import IMG2 from "../../assets/mod.png";
import IMG3 from "../../assets/imgg3.jpg";
import IMG4 from "../../assets/img4.png";
import IMG5 from "../../assets/img6.png";

const data=[
  {
    id: 1,
    image: IMG1,
    title: 'ToDo list Web App using Django',
    github: 'https://github.com/LifeAyush/todo-list',
    demo: 'https://dribbble.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Modern UI/UX Website using ReactJs',
    github: 'https://github.com/LifeAyush/modern-ui-ux',
    demo: 'https://lifeayush.github.io/modern-ui-ux/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'React CRUD Operations',
    github: 'https://github.com/LifeAyush/react-crud-operations',
    demo: 'https://dribbble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Budget Calculator using Vanilla JS',
    github: 'https://github.com/LifeAyush/budget-calculator',
    demo: 'https://lifeayush.github.io/budget-calculator/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'University Website using HTML and CSS',
    github: 'https://github.com/LifeAyush/dummy-university-website',
    demo: 'https://lifeayush.github.io/dummy-university-website/'
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
