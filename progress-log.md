## 현재 상태
- 진행 중 트랙: 세팅 완료, 다음 세션부터 01-network 학습 시작
- 진행 중 항목: -
- 상태: tech-wiki 저장소 구조/Git 연동 완전히 마무리, 학습 시작 준비 완료

### 2026-07-18 (추가 기록)
- 트랙: 없음 (환경 세팅 마무리)
- 다룬 항목: Git 인증 문제 해결 + 저장소 구조 완성
- 요약:
  - 13개 트랙 폴더 하위 `notes/`, `projects/` 서브폴더 구조로 통일 확정
  - `git status`, `git add`, `git commit`, `git push` 전체 흐름 실습
  - GitHub 인증 이슈(Bad credentials) 발생 → PAT(Personal Access Token) 발급으로 해결
  - 빈 폴더가 Git에 추적 안 되는 문제 확인 → `.gitkeep` 파일로 해결
  - GitHub 웹에서 전체 폴더 구조 최종 반영 확인 완료
- 다음에 이어갈 것: 다음 세션부터 실제 학습 시작 — `01-network` 트랙 1번 항목(OSI 7계층/TCP-IP 4계층)부터, `notes/`에 개념 정리 파일 첫 생성