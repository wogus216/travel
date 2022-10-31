import {
  Fullpage,
  FullpageNavigation,
  FullpageSection,
  FullPageSections,
} from '@ap.cx/react-fullpage';

import './FullpageScroll.css';

const FullpageScroll = () => {
  const SectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '20px',
    lineHeight: '2',
    animation: 'fadeout 3s',
  };

  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection className="first" style={SectionStyle}>
          <section>
            <div>고등학교 시절</div>
            <div>약속 기억나세요 ??</div>
            <div>저는 잊고 지냈지만..</div>
            <div>더는 후회하기 싫어서</div>
            <div>약속을 지키러 갑니다 !!</div>
          </section>
        </FullpageSection>
        <FullpageSection className="second" style={SectionStyle}>
          <section>
            <div>그래서 어디로 가냐고요 ??</div>

            <div>바로 말하면 재미없잖아요ㅋㅋ</div>

            <div>스크롤 하나만 더 내려주세요</div>
          </section>
        </FullpageSection>
        <FullpageSection className="third" style={SectionStyle}>
          <div className="flip">
            <div className="card">
              {/* 카드 앞면  */}
              <div className="front"></div>
              {/* 카드 뒷면 */}
              <div className="back"></div>
            </div>
            <div className="back-text">
              <div>미국 횡단을 갑니다.</div>
              <div>90일동안 !!</div>
            </div>
          </div>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default FullpageScroll;
