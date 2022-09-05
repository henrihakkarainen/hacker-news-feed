import { Link, useParams } from 'react-router-dom';
import { getDateFromTimestamp } from '../utils';
import { NewsObject } from "../utils/types";
import arrowLeft from '../images/arrow-left.png';

type Props = {
  news: NewsObject[];
}

const Article = ({ news }: Props) => {
  const { id } = useParams();
  const item = news.find(n => n.id.toString() === id);

  return item ? (
    <div className="article">
      <div className="title">
        <h1>{item.title}</h1>
        <div className="middle-row">
          <div>by: {item.by}</div>
          <div>score: {item.score}</div>
        </div>
        <div>{getDateFromTimestamp(item.time)}</div>
      </div>

      <div className="navigation">
        {item.url &&
          <>
          <div className="info">
            View the article below
            <span>(link opens on new window)</span>
          </div>
          <a href={item.url} target="_blank">{item.url}</a>
          <div className="info">OR</div>
          <Link to="/">
            <img src={arrowLeft} alt="arrow-left" />
            Go back to homepage
          </Link>
          </>
        }
        {item.text &&
          <>
          <div className="info">{item.text}</div>
          <Link to="/">
            <img src={arrowLeft} alt="arrow-left" />
            Go back to homepage
          </Link>
          </>
        }
      </div>
    </div>
  ) : (
    <></> /* could add some loading / not found here */
  );
}

export default Article;