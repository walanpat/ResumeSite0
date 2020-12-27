const SoftwareSkillsBlock = () => {
    return (
        <div className="skills-soft">
      <h3><i className="fas fa-bezier-curve"></i>Software Skills</h3>
      <ul>
        <li data-percent="90">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle className="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>Illustrator</span><small></small>
        </li>
        <li data-percent="75">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle className="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>Photoshop</span><small></small>
        </li>
        <li data-percent="85">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle className="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>InDesign</span><small></small>
        </li>
        <li data-percent="65">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45"></circle>
            <circle className="cbar" cx="50" cy="50" r="45"></circle>
          </svg><span>Dreamweaver</span><small></small>
        </li>
      </ul>
    </div>
    );
  };
  
  export default SoftwareSkillsBlock;
  