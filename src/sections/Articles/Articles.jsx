import "./articles.css";
import { ArticleCard } from "../../components/ArticleCard";

export const Articles = () => { 
  return (
    <section className="articles-section">
      <div className="articles-container">
        <h2 className="articles-heading">My Words</h2>
        <ArticleCard />
      </div>
    </section>    
  )
}
 