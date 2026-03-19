/**
 * 번역 대상 문자열을 자동으로 수집합니다.
 *
 * [수동 관리] messages.ts - UI 라벨, Contact, Member, Research 등 고정 문구
 * [자동 수집] notices.ts - NOTICES, NEWS 배열
 * [자동 수집] highlights.ts - HIGHLIGHTS 배열 (Congratulate 섹션)
 *
 * 새 공지/뉴스/하이라이트 추가: 해당 데이터 파일에만 추가하면 됨.
 */
import { messagesEn as messagesBase } from "./messages";
import { NOTICES, NEWS } from "./notices";
import { HIGHLIGHTS } from "./highlights";

function buildMessagesEn(): Record<string, string> {
  const out: Record<string, string> = { ...messagesBase };

  // Notice 섹션 공통 (sectionNews, sectionNotice, category는 번역 제외)
  out["notice.readMore"] = "Read more";
  out["notice.backToNotice"] = "Back to Notice";
  out["notice.notFound"] = "Notice not found.";

  // NEWS: notices.ts의 NEWS 배열에서 자동 수집
  NEWS.forEach((item, i) => {
    out[`news.title.${i}`] = item.title;
  });

  // NOTICES: notices.ts의 NOTICES 배열에서 자동 수집 (category는 번역 제외)
  NOTICES.forEach((n) => {
    out[`notice.${n.id}.title`] = n.title;
    out[`notice.${n.id}.excerpt`] = n.excerpt;
    out[`notice.${n.id}.content`] = n.content;
  });

  // HIGHLIGHTS: highlights.ts에서 자동 수집 (Congratulate 섹션, badge는 번역 제외)
  HIGHLIGHTS.forEach((h) => {
    out[`highlight.${h.id}.title`] = h.title;
  });

  return out;
}

/** 번역 대상 전체 (모듈 로드 시 1회 계산) */
export const messagesEn = buildMessagesEn();

export function getMessagesEn(): Record<string, string> {
  return messagesEn;
}
