"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "loive:wishlist";

function readStoredIds(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// TODO: 로그인 연동 후 localStorage 대신 Supabase에 사용자별로 저장
export function useWishlist() {
  // 서버에는 localStorage가 없어 초기값은 항상 []로 시작 (SSR 하이드레이션 불일치 방지),
  // 마운트 후 클라이언트에서 실제 저장된 값으로 동기화한다.
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- SSR 이후 클라이언트 전용 localStorage 값으로 1회 동기화
    setIds(readStoredIds());
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setIds(readStoredIds());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const isLiked = useCallback((id: string) => ids.includes(id), [ids]);

  const toggle = useCallback((id: string) => {
    setIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return { likedIds: ids, isLiked, toggle };
}
