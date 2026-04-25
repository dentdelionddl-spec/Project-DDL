# DENTDELION

정적 사이트입니다. Netlify, Vercel, GitHub Pages 등에 그대로 배포할 수 있습니다.

## 구조
- index.html
- css/style.css
- js/data.js
- js/app.js

## 로컬 미리보기
이 폴더에서 정적 서버를 실행하세요. 예:
- VS Code: Live Server 확장
- Python: `python3 -m http.server`
- Node: `npx serve .`

## 배포 (GitHub + Netlify)
1. 이 저장소를 GitHub에 푸시
2. Netlify에서 "Import from Git" → 이 저장소 선택
3. Build command: 비워둠 / Publish directory: `/`
4. Deploy
