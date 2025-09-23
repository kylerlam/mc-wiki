export function useFormula(principal, rate) {
  const futureMoney = principal * 2;
  const numOfYears =
    Math.log(futureMoney / principal) / Math.log(1 + rate / 100);
  return numOfYears.toFixed(2); // 保留两位小数
}
