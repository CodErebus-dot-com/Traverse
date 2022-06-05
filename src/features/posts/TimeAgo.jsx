import { parseISO, formatDistanceToNow } from "date-fns";

const TimeAgo = ({ timeStamp }) => {
  const renderTimeStamp = (
    <span>
      <i>{formatDistanceToNow(parseISO(timeStamp))} ago</i>
    </span>
  );
  return renderTimeStamp;
};

export default TimeAgo;
