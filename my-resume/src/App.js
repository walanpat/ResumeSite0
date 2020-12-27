import logo from './logo.svg';
import './App.css';
import NameBlock from './components/nameBlock';



function App() {
  return (
  <div class="resume">
    <div class="base">
    <div class="profile">
      <div class="photo">
        <i class="fas fa-rocket"></i>
      </div>
      <div class="info">
        <h1 class="name">Nicholas Georgiou</h1>
        <h2 class="job">Software Developer</h2>
      </div>
    </div>
    <div class="about">
      <h3>About Me</h3>I'm a web designer for Fiserv, specializing in web design, graphic design, and UX. Experienced with the Adobe Creative Suite, responsive design, social media management, and prototyping.
    </div>
    <div class="contact">
      <h3>Contact Me</h3>
      <div class="call"><a href="tel:123-456-7890"><i class="fas fa-phone"></i><span>123-456-7890</span></a></div>
      <div class="address"><a href="https://goo.gl/maps/fiTBGT6Vnhy"><i class="fas fa-map-marker"></i><span>Provo, Utah</span></a>
      </div>
      <div class="email"><a href="mailto:astronaomical@gmail.com"><i class="fas fa-envelope"></i><span>astronaomical</span></a></div>
      <div class="website"><a href="http://astronaomical.com/" target="_blank"> <i class="fas fa-home"></i><span>astronaomical.com</span></a></div>
    </div>
    <div class="follow">
      <h3>Follow Me</h3>
      <div class="box">
        <a href="https://www.facebook.com/astronaomical/" target="_blank"><i class="fab fa-facebook"></i></a>
        <a href="https://www.instagram.com/astronaomical/" target="_blank"><i class="fab fa-instagram "></i></a>
        <a href="https://www.pinterest.com/astronaomical/" target="_blank"><i class="fab fa-pinterest"></i></a>
        <a href="https://www.linkedin.com/in/naomi-weatherford-758385112/" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="https://codepen.io/astronaomical/" target="_blank"><i class="fab fa-codepen"></i></a>
        <a href="https://www.behance.net/astronaomical" target="_blank"><i class="fab fa-behance"></i></a>
      </div>
    </div>
  </div>
  <div class="func">
    <div class="work">
      <h3><i class="fa fa-briefcase"></i>Project Experience</h3>
      <ul>
        <li><span>Krackle Consulting Group -Web Developer</span><small>UNC Chapel HillF</small><small>June 2020 - Present</small></li>
        <li><span>Hack NC- "Most Innovative" Award</span><small>Hack NC</small><small>Jan 2018 - Apr 2018</small></li>
      </ul>
    </div>
    <div class="edu">
      <h3><i class="fa fa-graduation-cap"></i>Education</h3>
      <ul>
        <li><span>Bachelor of Science Computer Science</span><small>University of North Carolina at Chapel Hill</small><small>2017 - 2021</small></li>
        <li><span>Physics and Astronomy Minors</span></li>
        <li><span>Couchell Scholarship for Academic Excellence</span><small>Recipient</small></li>
      </ul>
    </div>
    <div class="skills-prog">
      <h3><i class="fas fa-code"></i>Programming Skills</h3>
      <ul>
        <li data-percent="95"><span>HTML5</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>
        <li data-percent="90"><span>CSS</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>
        <li data-percent="60"><span>JavaScript</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>
        <li data-percent="50"><span>jQuery</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>
        <li data-percent="40"><span>JSON</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>
        <li data-percent="55"><span>PHP</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>
        <li data-percent="40"><span>MySQL</span>
          <div class="skills-bar">
            <div class="bar"></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="skills-soft">
      <h3><i class="fas fa-bezier-curve"></i>Software Skills</h3>
      <ul>
        <li data-percent="90">
          <svg viewbox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle class="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>Illustrator</span><small></small>
        </li>
        <li data-percent="75">
          <svg viewbox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle class="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>Photoshop</span><small></small>
        </li>
        <li data-percent="85">
          <svg viewbox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle class="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>InDesign</span><small></small>
        </li>
        <li data-percent="65">
          <svg viewbox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle class="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>Dreamweaver</span><small></small>
        </li>
      </ul>
    </div>
    <div class="interests">
      <h3><i class="fas fa-star"></i>Interests</h3>
      <div class="interests-items">
        <div class="art"><i class="fas fa-palette"></i><span>Art</span></div>
        <div class="art"><i class="fas fa-book"></i><span>Books</span></div>
        <div class="movies"><i class="fas fa-film"></i><span>Movies</span></div>
        <div class="music"><i class="fas fa-headphones"></i><span>Music</span></div>
        <div class="games"><i class="fas fa-gamepad"></i><span>Games</span></div>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
