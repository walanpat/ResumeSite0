const SkillsBarBlock = () => {
    return (
        <div className="skills-prog">
        <h3><i className="fas fa-code"></i>Programming Skills</h3>
        <ul>
          <li data-percent="95"><span>React.js</span>
            <div className="skills-bar">
              <div className="bar"></div>
            </div>
          </li>
          <li data-percent="90"><span>CSS</span>
            <div className="skills-bar">
              <div className="bar"></div>
            </div>
          </li>
          <li data-percent="60"><span>JavaScript</span>
            <div className="skills-bar">
              <div className="bar"></div>
            </div>
          </li>
          <li data-percent="50"><span>jQuery</span>
            <div className="skills-bar">
              <div className="bar"></div>
            </div>
          </li>
          <li data-percent="40"><span>JSON</span>
            <div className="skills-bar">
              <div className="bar"></div>
            </div>
          </li>
          <li data-percent="95"><span>HTML5</span>
            <div className="skills-bar">
              <div className="bar"></div>
            </div>
          </li>
          <li data-percent="40"><span>PostGresSQL</span>
            <div className="skills-bar">
              <div className="bar"></div>
            </div>
          </li>
        </ul>
      </div>
    );
  };
  
  export default SkillsBarBlock;
  