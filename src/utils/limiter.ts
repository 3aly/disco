function limiter<T>(arr: T[], limit: number): T[] {
  return arr?.slice(0, limit);
}
export default limiter;
