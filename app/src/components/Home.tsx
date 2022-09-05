import { NewsObject } from '../utils/types';
import News from './News';

type Props = {
  loading: boolean;
  news: NewsObject[];
  loadMore: () => Promise<void>;
}

const Home = ({ loading, news, loadMore }: Props) => {
  return (
    <>
    <div className="news-list">
      {news.map((n, i) => (<News key={n.id} item={n} number={i+1} />))}
    </div>

    {loading && <div className="loader" />}
    {!loading &&
      <button type="button" onClick={loadMore}>
        Load more
      </button>
    }
    </>
  );
}

export default Home;