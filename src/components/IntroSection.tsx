import React from 'react';

export const IntroSection: React.FC = () => {
  return (
    <section id="top" className="section section--intro">
      <div className="section__inner">
        <p className="badge">Frontend Developer</p>
        <h1 className="intro__title">
          사용자 경험과 편리성을 위한 웹을 만드는
          <br />
          개발자 <span className="highlight">오정서</span>입니다.
        </h1>
        <p className="intro__subtitle">
          React와 반응형 레이아웃을 중심으로, 사용자가 편하게 사용할 수 있는 인터페이스를
          고민하고 구현합니다.
        </p>
      </div>
    </section>
  );
};

