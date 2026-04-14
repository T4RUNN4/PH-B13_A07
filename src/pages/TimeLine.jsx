import { useContext } from "react";
import HistoryCard from "../components/unique/timelineComponents/historyCard";
import { TimelineContext } from "../context/TimeLineContext";

export default function TimeLine() {
  const { currTimeLine } = useContext(TimelineContext);

  return (
    <div className="py-10 px-6 md:px-20 bg-[#F8FAFC]">
      {
        currTimeLine.map((message, index) => (
          <HistoryCard key={index} message={message} />
        ))
      }
    </div>
  )
}
