import hnLogo from '../images/y18.gif';
import gitLogo from '../images/GitHub_logo.png';

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="link-container">
          <a href="https://news.ycombinator.com/" target="_blank">
            <img src={hnLogo} alt="hacker-news-logo" />
            <span>Visit original site</span>
          </a>
          <a href="https://github.com/henrihakkarainen/" target="_blank">
            <img src={gitLogo} alt="github-logo" />
            <span>GitHub (henrihakkarainen)</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;