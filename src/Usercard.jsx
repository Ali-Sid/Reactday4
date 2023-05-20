import AliSid from "./assets/AliSid.jpeg";

export default function Usercard() {
  //skills
  const skills = [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "SQLite",
    "MySQL",
    "Bootstrap",
    "Tailwind CSS",
    "Python",
    "Numpy",
    "Pandas",
    "Data Analysis",
    "GraphQL",
    "Docker",
    "Git",
  ];
  // const skillsBoxes = skills.map((skill, index) => (
  //   <div key={index} className='skills-box'>
  //     {skill}
  //   </div>
  // ))
  const Skills = () => {
    return (
      // <div className='skills-container'>{skillsBoxes}</div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="grid-item">{skill}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div style={{ display: "flex", alignItems: "flex-start" }}>
      <img src={AliSid} alt="AliSid" style={{ borderRadius: "50%" }} />
      <div style={{ marginTop: "180px", marginLeft: "-200px" }}>
        <h2>
          <strong>ALI SIDDIQUI</strong>
        </h2>
        <p>Frontend Developer, India</p>
      </div>
      <div style={{ marginTop: "300px", marginLeft: "-200px" }}>
        <h2 style={{ textAlign: "start", marginLeft: "30px" }}>
          <strong>SKILLS</strong>
        </h2>
        <Skills />
      </div>
    </div>
  );
}
