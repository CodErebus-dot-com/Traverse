import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timeStamp }) => {
  const renderTimeStamp = <p>{formatDistanceToNow(parseISO(timeStamp))}</p>;
  return renderTimeStamp;
};

export default TimeAgo;
