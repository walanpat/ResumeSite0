import logo from './logo.svg';
import './App.css';
import NameBlock from './components/nameBlock';
import ProjectBlock from './components/projectBlock';
import EducationBlock from './components/educationBlock'
import SkillsBarBlock from './components/skillsBarBlock';
import SoftwareSkillsBlock from './components/softwareSkills';
import InterestsBlock from './components/interestsBlock';


function App() {
  return (
    
  <div className="resume">
    <div className="base">
  <NameBlock/>
  </div>
  <div className="func">
   <ProjectBlock/>
   <EducationBlock/>
   <SkillsBarBlock/>
   <SoftwareSkillsBlock/>
   <InterestsBlock/>
  </div>
</div>
  );
}

export default App;
