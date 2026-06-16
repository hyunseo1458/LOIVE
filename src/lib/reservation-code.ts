// "2023년 10월" + 15 -> "TIDE-231015-XXXX" 형태의 예약 번호 생성
export function generateReservationCode(monthLabel: string, day: number) {
  const match = monthLabel.match(/(\d+)년 (\d+)월/);
  const yy = match ? match[1].slice(-2) : "00";
  const mm = match ? match[2].padStart(2, "0") : "00";
  const dd = String(day).padStart(2, "0");
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `TIDE-${yy}${mm}${dd}-${suffix}`;
}

// "2023년 10월" + 15 -> "2023년 10월 15일"
export function formatFullDate(monthLabel: string, day: number) {
  return `${monthLabel} ${day}일`;
}
