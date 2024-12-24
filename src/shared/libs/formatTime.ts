export const formatTime = (time: string) =>
  time.length < 5 ? "0" + time : time;
