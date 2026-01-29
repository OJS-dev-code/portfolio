import React from 'react';

const projects = [
  {
    name: 'ShopFrame',
    period: '1개월',
    team: '5인 팀 프로젝트',
    description: '온라인 쇼핑몰을 운영하려는 사업자를 위한 간편한 웹 쇼핑몰 에디터 사이트',
    techStack: ['React', 'HTML', 'SCSS'],
    role: [
      '초기 기획 단계에서 쇼핑몰 에디터의 핵심 기능(레이아웃 편집, 컴포넌트 배치 등)을 정의하고 화면 흐름을 설계했습니다.',
      'React와 SCSS를 사용해 주요 화면 UI를 구현하고, 에디터 인터랙션이 자연스럽게 느껴지도록 컴포넌트 구조를 설계했습니다.',
      'Firebase를 활용한 배포 환경을 구축하고, 팀이 공통으로 접속해 테스트할 수 있도록 빌드 및 배포 파이프라인을 정리했습니다.',
    ],
    github: 'https://github.com/OJS-dev-code/ShopFrame',
    demo: 'https://hotel-83914.web.app/',
  },
  // TODO: 나중에 프로젝트를 더 추가하고 싶을 때, 이 배열에 객체를 하나 더 넣으면 됩니다.
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="section__inner">
        <h2 className="section__title">Projects</h2>
        <p className="section__description">
          실제로 사용되는 서비스를 목표로, 사용자 입장에서 &quot;편리한 경험&quot;을 제공하는
          웹을 만들기 위해 고민한 프로젝트들입니다.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <h3 className="project-card__title">{project.name}</h3>
              <p className="project-card__meta">
                <span>{project.period}</span>
                <span>·</span>
                <span>{project.team}</span>
              </p>
              <p className="project-card__description">{project.description}</p>

              <div className="project-card__tech">
                {project.techStack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-card__role">
                <h4>담당 역할</h4>
                <ul>
                  {project.role.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-card__links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub 보기
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  배포 사이트 방문
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

