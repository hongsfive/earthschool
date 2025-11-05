'use client';

export default function FontTestPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-display font-heading text-primary text-center mb-4">
          📝 타이포그래피 테스트
        </h1>
        <p className="text-center text-caption text-text/60 mb-12">
          나눔고딕(제목) + 노토산스(본문) 조합
        </p>
        
        {/* 폰트 패밀리 테스트 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-heading-lg font-heading text-primary mb-6">
            폰트 패밀리 (Font Family)
          </h2>
          
          <div className="space-y-6">
            {/* 나눔고딕 */}
            <div className="border-l-4 border-primary pl-6 py-4 bg-primary/5">
              <p className="text-caption text-primary/80 mb-2">제목용: 나눔고딕 (Nanum Gothic)</p>
              <h3 className="font-nanum text-2xl font-bold mb-2">
                지구를 지키는 시학교
              </h3>
              <p className="font-nanum text-lg">
                The Earth Poetry School - 자연과 함께 배우는 생태 교육
              </p>
            </div>
            
            {/* 노토산스 */}
            <div className="border-l-4 border-sky pl-6 py-4 bg-sky/5">
              <p className="text-caption text-sky/80 mb-2">본문용: 노토산스 (Noto Sans KR)</p>
              <p className="font-noto text-base leading-relaxed">
                기후위기 시대, 아이와 부모가 함께 자연의 소리에 귀 기울이며 생명의 소중함을 배웁니다. 
                우리는 시를 통해 자연과 소통하고, 생태적 감수성을 키워갑니다.
              </p>
            </div>
            
            {/* Poppins */}
            <div className="border-l-4 border-earth pl-6 py-4 bg-earth/5">
              <p className="text-caption text-earth/80 mb-2">영문 제목: Poppins</p>
              <h3 className="font-poppins text-2xl font-bold mb-2">
                Natural Harmony Design
              </h3>
              <p className="font-poppins text-lg">
                Typography System for Earth Poetry School
              </p>
            </div>
            
            {/* Inter */}
            <div className="border-l-4 border-water pl-6 py-4 bg-water/5">
              <p className="text-caption text-water/80 mb-2">영문 본문: Inter</p>
              <p className="font-inter text-base leading-relaxed">
                In an era of climate crisis, children and parents come together to listen to the sounds of nature 
                and learn the preciousness of life. We communicate with nature through poetry and cultivate ecological sensitivity.
              </p>
            </div>
          </div>
        </div>
        
        {/* 폰트 크기 테스트 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-heading-lg font-heading text-primary mb-6">
            폰트 크기 (Font Size)
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-softGray pb-4">
              <p className="text-caption text-text/60 mb-2">Display (48px) - H1 대제목</p>
              <h1 className="text-display font-heading text-primary">
                지구를 지키는 시학교
              </h1>
            </div>
            
            <div className="border-b border-softGray pb-4">
              <p className="text-caption text-text/60 mb-2">Heading Large (36px) - H2 중제목</p>
              <h2 className="text-heading-lg font-heading text-primary">
                자연과 함께 배우는 생태 교육
              </h2>
            </div>
            
            <div className="border-b border-softGray pb-4">
              <p className="text-caption text-text/60 mb-2">Heading Medium (24px) - H3 소제목</p>
              <h3 className="text-heading-md font-heading text-primary">
                시를 통해 자연과 소통하기
              </h3>
            </div>
            
            <div className="border-b border-softGray pb-4">
              <p className="text-caption text-text/60 mb-2">Heading Small (20px) - H4 작은 제목</p>
              <h4 className="text-heading-sm font-heading text-primary">
                생태적 감수성을 키우는 프로그램
              </h4>
            </div>
            
            <div className="border-b border-softGray pb-4">
              <p className="text-caption text-text/60 mb-2">Body Large (18px) - 강조 본문</p>
              <p className="text-body-lg font-body">
                기후위기 시대, 우리는 자연의 소리에 귀 기울이며 생명의 소중함을 배웁니다.
              </p>
            </div>
            
            <div className="border-b border-softGray pb-4">
              <p className="text-caption text-text/60 mb-2">Body (16px) - 일반 본문</p>
              <p className="text-body font-body">
                아이와 부모가 함께 참여하는 생태 교육 프로그램을 통해 자연과의 연결을 회복하고, 
                지속 가능한 미래를 위한 실천 방법을 함께 고민합니다.
              </p>
            </div>
            
            <div className="border-b border-softGray pb-4">
              <p className="text-caption text-text/60 mb-2">Caption (14px) - 보조 텍스트</p>
              <p className="text-caption font-body text-text/70">
                교육 기간: 2024년 3월 ~ 12월 | 대상: 초등학생 및 학부모 | 장소: 보령 지역 일대
              </p>
            </div>
            
            <div>
              <p className="text-caption text-text/60 mb-2">Caption Small (12px) - 작은 보조 텍스트</p>
              <p className="text-caption-sm font-body text-text/60">
                © 2024 지구를 지키는 시학교. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        
        {/* 실제 사용 예시 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-heading-lg font-heading text-primary mb-6">
            실제 사용 예시
          </h2>
          
          {/* 카드 예시 1 */}
          <div className="bg-gradient-to-br from-primary/5 to-sky/5 rounded-xl p-8 mb-6 border border-primary/10">
            <span className="inline-block bg-accent text-white text-caption px-3 py-1 rounded-full mb-4">
              Featured Program
            </span>
            <h3 className="text-heading-md font-heading text-primary mb-3">
              보령소리탐사대
            </h3>
            <p className="text-body font-body text-text/80 mb-4">
              보령 지역의 생명 소리를 채집하고 기록하는 특별한 생태 탐험입니다. 
              숲속, 바닷가, 갯벌에서 들리는 다양한 자연의 소리를 귀 기울여 듣고, 
              이를 시로 표현하는 감동적인 경험을 제공합니다.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-caption text-text/60">
                📅 매주 토요일 오전 10시
              </span>
              <button className="bg-primary text-white text-body px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                자세히 보기
              </button>
            </div>
          </div>
          
          {/* 카드 예시 2 */}
          <div className="bg-gradient-to-br from-sprout/10 to-water/10 rounded-xl p-8 border border-sprout/20">
            <h3 className="text-heading-md font-heading text-earth mb-3">
              자연과 함께하는 시 쓰기
            </h3>
            <p className="text-body font-body text-text/80 mb-4">
              자연을 관찰하고 느낀 감정을 시로 표현하는 프로그램입니다. 
              전문 시인과 함께하는 창작 워크숍을 통해 아이들의 창의력과 표현력을 키웁니다.
            </p>
            <ul className="space-y-2 text-body font-body text-text/70">
              <li className="flex items-start">
                <span className="text-sprout mr-2">✓</span>
                <span>초등 저학년: 감각 표현 중심의 짧은 시 쓰기</span>
              </li>
              <li className="flex items-start">
                <span className="text-sprout mr-2">✓</span>
                <span>초등 고학년: 주제 의식이 있는 생태시 창작</span>
              </li>
              <li className="flex items-start">
                <span className="text-sprout mr-2">✓</span>
                <span>학부모 참여: 가족이 함께 쓰는 협동시</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* 폰트 적용 가이드 */}
        <div className="bg-gradient-to-br from-sunset/10 to-accent/5 rounded-lg p-8 border-l-4 border-accent">
          <h3 className="text-heading-md font-heading text-earth mb-4">
            ✅ 폰트 적용 완료!
          </h3>
          <div className="space-y-3 text-body font-body text-text/80">
            <p>
              <strong className="text-primary">제목:</strong> 나눔고딕 (Nanum Gothic) - 제목의 굵기와 가독성이 좋습니다
            </p>
            <p>
              <strong className="text-primary">본문:</strong> 노토산스 (Noto Sans KR) - 본문의 부드럽고 읽기 편한 폰트입니다
            </p>
            <p className="text-caption text-text/60 pt-4 border-t border-text/10">
              💡 <strong>Tailwind 클래스 사용법:</strong><br/>
              제목: <code className="bg-charcoal/5 px-2 py-1 rounded text-primary">font-heading</code> 
              {' '}또는 <code className="bg-charcoal/5 px-2 py-1 rounded text-primary">font-nanum</code><br/>
              본문: <code className="bg-charcoal/5 px-2 py-1 rounded text-primary">font-body</code> 
              {' '}또는 <code className="bg-charcoal/5 px-2 py-1 rounded text-primary">font-noto</code><br/>
              크기: <code className="bg-charcoal/5 px-2 py-1 rounded text-primary">text-display</code>, 
              <code className="bg-charcoal/5 px-2 py-1 rounded text-primary">text-heading-lg</code>, 
              <code className="bg-charcoal/5 px-2 py-1 rounded text-primary">text-body</code> 등
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

