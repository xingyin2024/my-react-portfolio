import articles from "../Libraries/articles.json";
import { Button } from "./Button/Button";

export const ArticleCard = () => {
  return (
    <>
      {articles.articles.map((item) => (
        <div className="article-card" key={item.id}>
          <div className="article-image-container">
            <a href={item.global} target="_blank">
              <img
                className="article-image"
                src={item.image}
                alt={item.title}
              />
            </a>
          </div>

          <div className="description">
            <p className="date">{item.date}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <div className="buttons">
              <Button
                className="button"
                source={item.global}
                image="global"
                text="Read article"
                color="pink"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
