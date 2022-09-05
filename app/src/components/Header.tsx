import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">Hacker News Feed</Link>
      </div>
    </header>
  );
}

export default Header;