import {
  Fullpage,
  FullpageNavigation,
  FullpageSection,
  FullPageSections,
} from '@ap.cx/react-fullpage';
import React from 'react';
import './FullpageScroll.css';

const FullpageScroll = () => {
  const SectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection style={SectionStyle}>
          <section>
            <div>고등학교때 친구들과 한 약속 기억나시나요??</div>
            <br />
            <div>저는 잊고 지내다...친구한명이 트리거를 해줬어요</div>
            <br />
            <div>그래서 10년만에 지키려고 떠나요 !!</div>
          </section>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <section>
            <div>그래서 어디로 가냐고요 ??</div>
            <div>바로 말하면 재미없잖아요ㅋㅋ</div>
            <div>스크롤 하나만 더 내려주세요</div>
          </section>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <div className="flip">
            <div className="card">
              {/* 카드 앞면  */}
              <div className="front">앞면</div>
              {/* 카드 뒷면 */}
              <div className="back">뒷면</div>
            </div>
          </div>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullpageScroll;
