import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import shopFrameLogo from '../images/shop frame logo-02 1.png';

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
  {
    name: 'Todo App',
    period: '2주',
    team: '개인 프로젝트',
    description: '할 일을 효율적으로 관리할 수 있는 반응형 웹 애플리케이션',
    techStack: ['React', 'TypeScript', 'CSS'],
    role: [
      'React Hooks를 활용한 상태 관리와 로컬 스토리지를 이용한 데이터 영속성을 구현했습니다.',
      '반응형 디자인을 적용해 모바일, 태블릿, 데스크톱에서 모두 최적화된 사용자 경험을 제공했습니다.',
      'TypeScript를 사용해 타입 안정성을 확보하고 개발 생산성을 향상시켰습니다.',
    ],
    github: 'https://github.com/OJS-dev-code',
    demo: '#',
  },
  {
    name: 'Weather Dashboard',
    period: '3주',
    team: '3인 팀 프로젝트',
    description: '실시간 날씨 정보를 제공하는 대시보드 웹 애플리케이션',
    techStack: ['React', 'JavaScript', 'API'],
    role: [
      '외부 날씨 API를 연동하여 실시간 데이터를 가져오는 기능을 구현했습니다.',
      '사용자 위치 기반 날씨 정보 제공과 검색 기능을 개발했습니다.',
      '로딩 상태와 에러 처리를 포함한 사용자 친화적인 UI/UX를 설계했습니다.',
    ],
    github: 'https://github.com/OJS-dev-code',
    demo: '#',
  },
  {
    name: 'Portfolio Website',
    period: '2주',
    team: '개인 프로젝트',
    description: '개인 포트폴리오를 소개하는 반응형 웹사이트',
    techStack: ['React', 'CSS', 'Vite'],
    role: [
      '현대적인 디자인과 부드러운 애니메이션을 적용한 사용자 경험을 구현했습니다.',
      'Swiper를 활용한 프로젝트 슬라이더와 반응형 레이아웃을 개발했습니다.',
      'GitHub Pages를 활용한 배포 환경을 구축하고 최적화했습니다.',
    ],
    github: 'https://github.com/OJS-dev-code/portfolio',
    demo: '#',
  },
];

export const ProjectsSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <section id="projects" className="section">
      <div className="section__inner">
        <div className="projects-header">
          <div>
            <h2 className="section__title">Projects</h2>
            <p className="section__description">
              실제로 사용 가능한 서비스를 목표로, 사용자 입장에서 &quot;편리한 경험&quot;을 제공하는
              웹을 만들기 위해 고민한 프로젝트들입니다.
            </p>
          </div>
          <div className="projects-counter">
            <span className="projects-counter__current">{currentIndex + 1}</span>
            <span className="projects-counter__separator">/</span>
            <span className="projects-counter__total">{projects.length}</span>
          </div>
        </div>

        <div className="projects-swiper-wrapper">
          <Swiper
            modules={[Navigation, Keyboard, Mousewheel]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            mousewheel={{
              forceToAxis: true,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.activeIndex);
            }}
            className="projects-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.name}>
                <article className="project-card">
                  {index === 0 && (
                    <div className="project-card__image">
                      <img src={shopFrameLogo} alt="ShopFrame Logo" />
                    </div>
                  )}
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
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
};

