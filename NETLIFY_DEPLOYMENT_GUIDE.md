# 🚀 Netlify 배포 가이드

## ✅ 완료된 작업

1. ✅ **교육 프로그램 문의 폼 Netlify Forms 연동 완료**
2. ✅ **netlify.toml 설정 파일 생성 완료**
3. ✅ **GitHub 저장소 업로드 완료**
   - 저장소: https://github.com/hongsfive/earthschool

---

## 🌐 Netlify 배포 방법

### 1단계: Netlify 가입 및 로그인

1. **Netlify 사이트 접속**: https://app.netlify.com
2. **"Sign up" 클릭** (회원가입) 또는 "Log in" (로그인)
3. **"Continue with GitHub" 클릭** → GitHub 계정으로 로그인

---

### 2단계: GitHub 저장소 연결

1. Netlify 대시보드에서 **"Add new site"** 클릭
2. **"Import an existing project"** 선택
3. **"Deploy with GitHub"** 클릭
4. GitHub 권한 요청이 나오면 **"Authorize Netlify"** 클릭
5. 저장소 목록에서 **"hongsfive/earthschool"** 선택
   - (안 보이면 "Configure the Netlify app on GitHub" 클릭하여 권한 부여)

---

### 3단계: 배포 설정

다음 설정이 **자동으로 감지**됩니다:

```
Build command:    npm run build
Publish directory: .next
```

**아무것도 수정하지 말고** 그대로 **"Deploy site"** 버튼 클릭!

---

### 4단계: 배포 완료! 🎉

- 빌드가 시작되며 **2-3분** 정도 소요됩니다
- 완료되면 **랜덤 URL**이 자동 생성됩니다
  - 예: `https://amazing-cupcake-123456.netlify.app`
- 이 URL로 바로 접속 가능합니다! ✅

---

## 📧 문의 폼 설정

### 문의 폼 작동 원리

1. **자동 작동**: 이미 코드에 Netlify Forms가 설정되어 있어 **추가 작업 불필요**
2. **문의 확인 방법**:
   - Netlify 대시보드 → **"Forms"** 메뉴
   - 제출된 문의를 확인할 수 있습니다

### 이메일 알림 설정 (선택사항)

문의가 들어올 때 이메일로 알림 받기:

1. Netlify 대시보드 → **"Forms"** 메뉴
2. **"Form notifications"** 클릭
3. **"Add notification"** → **"Email notification"** 선택
4. 이메일 주소 입력 → **저장**

---

## 🎨 커스텀 도메인 연결 (선택사항)

자체 도메인(예: `earthschool.kr`)을 연결하려면:

1. Netlify 대시보드 → **"Domain settings"**
2. **"Add custom domain"** 클릭
3. 도메인 입력 후 DNS 설정 안내 따르기

---

## 🔄 자동 배포

**이제 GitHub에 코드를 푸시하면 자동으로 배포됩니다!**

```bash
# 코드 수정 후
git add -A
git commit -m "업데이트 내용"
git push

# 자동으로 Netlify가 감지하여 배포 시작!
```

---

## 💡 주요 기능

### ✅ 무료로 제공되는 것들:
- ✅ 자동 HTTPS (SSL 인증서)
- ✅ CDN (전 세계 빠른 속도)
- ✅ 자동 배포 (Git push 시)
- ✅ 문의 폼 (월 100회까지)
- ✅ 월 100GB 대역폭

### 📊 무료 플랜 제한:
- 월 300분 빌드 시간
- 월 100회 폼 제출
- 월 100GB 대역폭

**지구를지키는시학교 규모라면 무료 플랜으로 충분합니다!** ✅

---

## ❓ 문제 해결

### 배포 실패 시:

1. Netlify 대시보드 → **"Deploys"** → 실패한 배포 클릭
2. **"Deploy log"**에서 오류 메시지 확인
3. 대부분 자동으로 해결되며, 재배포하면 됩니다

### 문의 폼이 작동하지 않으면:

1. 첫 배포 후 한 번은 **"Clear cache and retry"** 실행
2. 폼 테스트: 실제로 제출해보기
3. Netlify → **"Forms"** 메뉴에서 제출 내역 확인

---

## 📞 추가 도움

- Netlify 공식 문서: https://docs.netlify.com
- Next.js on Netlify: https://docs.netlify.com/frameworks/next-js/

---

**배포 완료 후 생성된 URL을 확인하고 접속해보세요!** 🎉


