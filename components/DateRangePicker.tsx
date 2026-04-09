import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  isSameDay,
  isAfter,
  isBefore,
} from "date-fns";

export default function DateRangePicker({ range, setRange, currentMonth }: any) {
  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const handleClick = (day: Date) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: day, end: null });
    } else {
      if (isBefore(day, range.start)) {
        setRange({ start: day, end: range.start });
      } else {
        setRange({ ...range, end: day });
      }
    }
  };

  const isInRange = (day: Date) => {
    if (range.start && range.end) {
      return isAfter(day, range.start) && isBefore(day, range.end);
    }
    return false;
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-7 gap-2">
        {days.map((day: Date) => (
          <div
            key={day.toString()}
            onClick={() => handleClick(day)}
           className={`p-2 text-center cursor-pointer font-medium
  ${
    range.start && isSameDay(day, range.start)
      ? "bg-blue-600 text-white rounded-l-full"
      : range.end && isSameDay(day, range.end)
      ? "bg-blue-600 text-white rounded-r-full"
      : isInRange(day)
      ? "bg-blue-100 text-blue-900"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-lg"
  }
`}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
}