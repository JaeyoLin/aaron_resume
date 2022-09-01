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
    <div className="w-full p-6 md:p-12 bg-green-dark text-white">
      <p className="text-3xl">Skills</p>
      <div className="flex flex-col md:flex-row mt-5 md:mt-9">
        {
          skillsList.map((type) => {
            return (
              <div className={`basis-1/${skillsList.length - 1} md:pr-3 mb-5 md:mb-0`}>
                <p className="text-xl">{ type.title }</p>
                <hr className="mt-2 mb-2" />
                <ul className="ml-2 list-inside list-disc leading-6 md:leading-8 text-lg">
                {
                  type.skills.map((skill) => {
                    return (
                      <li>
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
