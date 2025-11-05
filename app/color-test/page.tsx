'use client';

export default function ColorTestPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          🎨 새로운 컬러 팔레트 테스트
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-charcoal">
            Primary Colors (메인 브랜드 컬러)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* 숲의 초록 */}
            <div className="text-center">
              <div className="bg-primary h-32 rounded-lg shadow-md mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">숲의 초록</span>
              </div>
              <p className="text-sm font-mono text-charcoal">#4A7C59</p>
              <p className="text-xs text-charcoal/60">bg-primary</p>
            </div>
            
            {/* 하늘의 파랑 */}
            <div className="text-center">
              <div className="bg-sky h-32 rounded-lg shadow-md mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">하늘의 파랑</span>
              </div>
              <p className="text-sm font-mono text-charcoal">#87CEEB</p>
              <p className="text-xs text-charcoal/60">bg-sky</p>
            </div>
            
            {/* 흙의 갈색 */}
            <div className="text-center">
              <div className="bg-earth h-32 rounded-lg shadow-md mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">흙의 갈색</span>
              </div>
              <p className="text-sm font-mono text-charcoal">#8B6B47</p>
              <p className="text-xs text-charcoal/60">bg-earth</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-charcoal">
            Secondary Colors (보조 컬러)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* 새싹 연두 */}
            <div className="text-center">
              <div className="bg-sprout h-32 rounded-lg shadow-md mb-3 flex items-center justify-center">
                <span className="text-charcoal font-bold text-lg">새싹 연두</span>
              </div>
              <p className="text-sm font-mono text-charcoal">#B8E994</p>
              <p className="text-xs text-charcoal/60">bg-sprout</p>
            </div>
            
            {/* 노을 주황 */}
            <div className="text-center">
              <div className="bg-sunset h-32 rounded-lg shadow-md mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">노을 주황</span>
              </div>
              <p className="text-sm font-mono text-charcoal">#FFB366</p>
              <p className="text-xs text-charcoal/60">bg-sunset (accent)</p>
            </div>
            
            {/* 물의 청록 */}
            <div className="text-center">
              <div className="bg-water h-32 rounded-lg shadow-md mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">물의 청록</span>
              </div>
              <p className="text-sm font-mono text-charcoal">#6DB3B8</p>
              <p className="text-xs text-charcoal/60">bg-water</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-charcoal">
            Neutral Colors (중립 컬러)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 자연 화이트 */}
            <div className="text-center">
              <div className="bg-secondary h-32 rounded-lg shadow-md mb-3 flex items-center justify-center border-2 border-softGray">
                <span className="text-charcoal font-bold text-lg">자연 화이트</span>
              </div>
              <p className="text-sm font-mono text-charcoal">#FAFAF8</p>
              <p className="text-xs text-charcoal/60">bg-secondary (배경색)</p>
            </div>
            
            {/* 부드러운 그레이 */}
            <div className="text-center">
              <div className="bg-softGray h-32 rounded-lg shadow-md mb-3 flex items-center justify-center">
                <span className="text-charcoal font-bold text-lg">부드러운 그레이</span>
              </div>
              <p className="text-sm font-mono text-charcoal">#E5E5E3</p>
              <p className="text-xs text-charcoal/60">bg-softGray</p>
            </div>
            
            {/* 깊은 차콜 */}
            <div className="text-center">
              <div className="bg-charcoal h-32 rounded-lg shadow-md mb-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">깊은 차콜</span>
              </div>
              <p className="text-sm font-mono text-charcoal">#3A3A3A</p>
              <p className="text-xs text-charcoal/60">bg-charcoal (텍스트)</p>
            </div>
          </div>
        </div>
        
        {/* 실제 사용 예시 */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-primary">
            실제 사용 예시
          </h2>
          
          <div className="space-y-6">
            {/* 버튼 예시 */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-earth">버튼 스타일</h3>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Primary 버튼
                </button>
                <button className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-sunset/90 transition-colors">
                  Accent 버튼 (주황)
                </button>
                <button className="bg-sky text-white px-6 py-3 rounded-lg hover:bg-sky/90 transition-colors">
                  Sky 버튼
                </button>
              </div>
            </div>
            
            {/* 카드 예시 */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-earth">카드 스타일</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-sprout/10 border-l-4 border-sprout p-6 rounded-lg">
                  <h4 className="text-primary font-bold mb-2">새싹 카드</h4>
                  <p className="text-text/80">성장과 생명력을 표현하는 카드입니다.</p>
                </div>
                <div className="bg-sky/10 border-l-4 border-sky p-6 rounded-lg">
                  <h4 className="text-sky font-bold mb-2">하늘 카드</h4>
                  <p className="text-text/80">희망과 미래를 상징하는 카드입니다.</p>
                </div>
              </div>
            </div>
            
            {/* 배경 비교 */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-earth">배경색 비교</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-lg" style={{ background: '#F5F3ED' }}>
                  <p className="font-bold text-primary mb-2">기존 배경색</p>
                  <p className="text-sm text-charcoal">#F5F3ED (따뜻한 베이지)</p>
                </div>
                <div className="bg-secondary p-6 rounded-lg border-2 border-primary">
                  <p className="font-bold text-primary mb-2">✨ 새로운 배경색</p>
                  <p className="text-sm text-charcoal">#FAFAF8 (자연 화이트)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 안내 메시지 */}
        <div className="mt-8 bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
          <h3 className="text-lg font-bold text-accent mb-2">
            ✅ 새로운 색상이 보이시나요?
          </h3>
          <p className="text-text">
            이 페이지가 제대로 표시되면 캐시가 정상적으로 클리어되었고 새로운 컬러 팔레트가 적용된 것입니다!
          </p>
          <p className="text-text mt-2">
            특히 <strong>노을 주황(#FFB366)</strong>과 <strong>자연 화이트 배경(#FAFAF8)</strong>을 확인해보세요.
          </p>
        </div>
      </div>
    </div>
  );
}

