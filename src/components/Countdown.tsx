import React from "react";
import ReactCountdown from "react-countdown";

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    // Render a completed state
    return (
      <>
        <div className="flex flex-col items-center mx-2">
          <div className="text-base md:text-6xl font-bold bg-orange-900 px-8 py-4 rounded-lg shadow-lg text-white">
            0
          </div>
          <div className="mt-2 text-xl font-bold text-white">Days</div>
        </div>
        <div className="flex flex-col items-center mx-2">
          <div className="text-base md:text-6xl font-bold bg-orange-900 px-8 py-4 rounded-lg shadow-lg text-white">
            0
          </div>
          <div className="mt-2 text-xl font-bold text-white">Hours</div>
        </div>
        <div className="flex flex-col items-center mx-2">
          <div className="text-base md:text-6xl font-bold bg-orange-900 px-8 py-4 rounded-lg shadow-lg text-white">
            0
          </div>
          <div className="mt-2 text-xl font-bold text-white">Minutes</div>
        </div>
        <div className="flex flex-col items-center mx-2">
          <div className="text-base md:text-6xl font-bold bg-orange-900 px-8 py-4 rounded-lg shadow-lg text-white">
            0
          </div>
          <div className="mt-2 text-xl font-bold text-white">Seconds</div>
        </div>
      </>
    );
  } else {
    // Render a countdown
    return (
      <>
        <div className="flex flex-col items-center mx-2">
          <div className="text-base md:text-6xl font-bold bg-orange-900 px-8 py-4 rounded-lg shadow-lg text-white">
            {days}
          </div>
          <div className="mt-2 text-xl font-bold text-white">Days</div>
        </div>
        <div className="flex flex-col items-center mx-2">
          <div className="text-base md:text-6xl font-bold bg-orange-900 px-8 py-4 rounded-lg shadow-lg text-white">
            {hours}
          </div>
          <div className="mt-2 text-xl font-bold text-white">Hours</div>
        </div>
        <div className="flex flex-col items-center mx-2">
          <div className="text-base md:text-6xl font-bold bg-orange-900 px-8 py-4 rounded-lg shadow-lg text-white">
            {minutes}
          </div>
          <div className="mt-2 text-xl font-bold text-white">Minutes</div>
        </div>
        <div className="flex flex-col items-center mx-2">
          <div className="text-base md:text-6xl font-bold bg-orange-900 px-8 py-4 rounded-lg shadow-lg text-white">
            {seconds}
          </div>
          <div className="mt-2 text-xl font-bold text-white">Seconds</div>
        </div>
      </>
    );
  }
};

export default function Countdown() {
  const [isInteractive, setIsInteractive] = React.useState(false);
  React.useEffect(() => {
    setIsInteractive(true);
  }, []);

  return (
    <>
      {isInteractive ? (
        <ReactCountdown date={new Date("2024-09-28")} renderer={renderer} />
      ) : (
        <>{renderer(
            {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                completed: true,
            }
        )}</>
      )}
    </>
  );
}
