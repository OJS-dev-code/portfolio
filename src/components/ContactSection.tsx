import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="section__inner">
        <h2 className="section__title">Contact</h2>
        <p className="section__description">
          함께 더 나은 사용자 경험을 만들 기회를 찾고 있습니다.
          <br />
          아래 이메일이나 GitHub를 통해 언제든지 연락 주세요.
        </p>

        <div className="contact-card">
          <dl>
            <div className="contact-row">
              <dt>이름</dt>
              <dd>오정서</dd>
            </div>
            <div className="contact-row">
              <dt>이메일</dt>
              <dd>
                <a href="mailto:ohjs652@gmail.com">ohjs652@gmail.com</a>
              </dd>
            </div>
            <div className="contact-row">
              <dt>GitHub</dt>
              <dd>
                <a href="https://github.com/OJS-dev-code" target="_blank" rel="noreferrer">
                  @OJS-dev-code
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <p className="contact-note">
          앞으로 진행할 프로젝트와 경험을 이 포트폴리오에 계속해서 업데이트할 예정입니다.
        </p>
      </div>
    </section>
  );
};

