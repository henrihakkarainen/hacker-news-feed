import { Link } from 'react-router-dom';
import { NewsObject } from '../utils/types';
import { getShortUrl } from '../utils';

type Props = {
  item: NewsObject;
  number: number;
}

const News = ({ item, number }: Props) => {
  return (
    <div className="news-item">
      <div className="news-number">{number}.</div>
      <div className="news-text">
        <Link to={`/news/${item.id}`}>{item.title}</Link>
        <a href={item.url} target="_blank">{getShortUrl(item.url)}</a>
      </div>
    </div>
  );
}

export default News;