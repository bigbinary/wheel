import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const timeAgo = time => {
  dayjs.extend(relativeTime);

  return dayjs(time).fromNow();
};

export const formatTime = time => dayjs(time).format("dddd, hh:mmA");
