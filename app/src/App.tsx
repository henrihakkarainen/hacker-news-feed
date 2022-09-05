import { Route, Routes } from 'react-router-dom';import { useEffect, useState } from 'react';
import { IdsResult, NewsObject, NewsResult } from './utils/types';
import axios from './utils/axios';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import './App.scss';
import Article from './components/Article';

const App = () => {
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ news, setNews ] = useState<NewsObject[]>([]);

  useEffect(() => {
    init().then();
  }, []);

  const init = async () => {
    const result: IdsResult = await axios.get('topstories.json');
    await fetchStories(result.data.splice(0, 20));
    setLoading(false);
  }

  const fetchStories = async (ids: number[]) => {
    const newsObjects: NewsObject[] = news;
    for (const id of ids) {
      const res: NewsResult = await axios.get(`item/${id}.json`);
      if (newsObjects.find(n => n.id == res.data.id) == null) {
        newsObjects.push(res.data);
      }
    }

    setNews(newsObjects);
  }

  const loadNewStories = async () => {
    setLoading(true);
    const result: IdsResult = await axios.get('topstories.json');
    const ids = result.data;

    const oldIds = news.map(n => n.id);
    const newIds: number[] = [];

    for (let i = 0; newIds.length < 20; i++) {
      if (!oldIds.includes(ids[i])) {
        newIds.push(ids[i]);
      }
    }

    await fetchStories(newIds);
    setLoading(false);
  }

  return (
    <div className="main">
      <Header />
      <div className="container">
      <Routes>
        <Route path="/"
               element={<Home loading={loading} news={news} loadMore={loadNewStories} />}></Route>
        <Route path="/news/:id"
               element={<Article news={news}/>}></Route>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
