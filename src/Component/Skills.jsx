const ArrayOfSkills = ["JavaScript", "React", "Node.js", "CSS", "Bootstrap"];
const Skills = () => {
  return (
    <div className="skills">
      {ArrayOfSkills.map((skill) => {
        return (
          <p key={skill} className={skill === "Node.js" ? "Nodejs" : skill}>
            {skill}
          </p>
        );
      })}
    </div>
  );
};

export default Skills;
