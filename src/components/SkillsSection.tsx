import React from 'react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section section--alt">
      <div className="section__inner">
        <h2 className="section__title">Skills</h2>
        <p className="section__description">
          웹의 기본기와 React를 중심으로, 다양한 화면 크기에서도 자연스럽게 보이는 반응형
          레이아웃을 구현할 수 있습니다.
        </p>

        <div className="skills-grid">
          <div className="skills-group">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5 시맨틱 마크업과 접근성을 고려한 구조 설계</li>
              <li>CSS / SCSS를 활용한 레이아웃 및 컴포넌트 스타일링</li>
              <li>
                JavaScript(ES6+) 문법 이해와 DOM 제어, 비동기 처리(fetch, async/await) 기본
              </li>
              <li>React를 활용한 컴포넌트 기반 UI 개발</li>
            </ul>
          </div>

          <div className="skills-group">
            <h3>Responsive Web</h3>
            <ul>
              <li>모바일·태블릿·데스크톱을 고려한 반응형 레이아웃 설계</li>
              <li>flex/grid를 활용한 유연한 컴포넌트 배치</li>
              <li>미디어 쿼리를 활용한 화면 크기별 스타일 최적화</li>
            </ul>
          </div>

          <div className="skills-group">
            <h3>Collaboration & Tools</h3>
            <ul>
              <li>GitHub를 활용한 버전 관리 및 협업 경험</li>
              <li>Firebase Hosting을 활용한 React 앱 배포 경험</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

