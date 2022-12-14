/**
 * Skills
 * 
 * @returns 
 */
const Skills = () => {

  const skillsList = [
    {
      title: 'Front-end',
      skills: [
        'React, Hook',
        'Javascript ES6',
        'Webpack',
        'Html5',
        'Css3',
        'W3C',
      ],
    },
    {
      title: 'Back-end',
      skills: [
        '.Net Framework',
        'PHP',
        'Java, Spring Boot',
        'NodeJS',
      ],
    },
    {
      title: 'Database',
      skills: [
        'SQL Server',
        'MySQL',
        'Oracle',
        'Postgres',
        'MongoDB',
      ],
    },
    {
      title: 'Others',
      skills: [
        'Gitlab CICD',
        'Jenkins',
        'Docker',
        'CICD',
        'DevOps',
        'Unit testing',
        'E2E testing',
        'Stress testing',
        'AWS',
      ],
    },
  ];

  return (
    <div className="w-full p-6 md:p-12 print:p-3 bg-green-dark text-white print:bg-white print:text-black">
      <p className="text-3xl print:font-bold print:text-green-dark">Skills</p>
      <div className="flex flex-col md:flex-row mt-5 md:mt-9">
        {
          skillsList.map((type, typeIndex) => {
            return (
              <div key={`type_${typeIndex}`} className={`basis-1/${skillsList.length - 1} md:pr-3 mb-5 md:mb-0`}>
                <p className="text-xl">{ type.title }</p>
                <hr className="mt-2 mb-2" />
                <ul className="ml-2 list-inside list-disc leading-6 md:leading-8 print:leading-5 text-lg print:text-md">
                {
                  type.skills.map((skill, skillIndex) => {
                    return (
                      <li key={`type_${skillIndex}`}>
                        { skill }
                      </li>
                    )
                  })
                }
                </ul>
              </div>
            );
          })
        }    
      </div>
    </div>
  );
}

export default Skills;
