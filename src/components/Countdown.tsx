import ReactCountdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }: {
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
          <div className="mt-2 text-xl font-bold text-orange-500">Days</div>
        </div>
        <div className="flex flex-col items-center mx-2">
          <div className="text-base md:text-6xl font-bold bg-orange-900 px-8 py-4 rounded-lg shadow-lg text-white">
            0
          </div>
          <div className="mt-2 text-xl font-bold text-orange-500">Hours</div>
        </div>
        <div className="flex flex-col items-center mx-2">
          <div className="text-base md:text-6xl font-bold bg-orange-900 px-8 py-4 rounded-lg shadow-lg text-white">
            0
          </div>
          <div className="mt-2 text-xl font-bold text-orange-500">Minutes</div>
        </div>
        <div className="flex flex-col items-center mx-2">
          <div className="text-base md:text-6xl font-bold bg-orange-900 px-8 py-4 rounded-lg shadow-lg text-white">
            0
          </div>
          <div className="mt-2 text-xl font-bold text-orange-500">Seconds</div>
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
          <div className="mt-2 text-xl font-bold text-orange-500">Days</div>
        </div>
        <div className="flex flex-col items-center mx-2">
          <div className="text-base md:text-6xl font-bold bg-orange-900 px-8 py-4 rounded-lg shadow-lg text-white">
            {hours}
          </div>
          <div className="mt-2 text-xl font-bold text-orange-500">Hours</div>
        </div>
        <div className="flex flex-col items-center mx-2">
          <div className="text-base md:text-6xl font-bold bg-orange-900 px-8 py-4 rounded-lg shadow-lg text-white">
            {minutes}
          </div>
          <div className="mt-2 text-xl font-bold text-orange-500">Minutes</div>
        </div>
        <div className="flex flex-col items-center mx-2">
          <div className="text-base md:text-6xl font-bold bg-orange-900 px-8 py-4 rounded-lg shadow-lg text-white">
            {seconds}
          </div>
          <div className="mt-2 text-xl font-bold text-orange-500">Seconds</div>
        </div>
      </>
    );
  }
};

export default function Countdown() {
  return (
    <>
      <ReactCountdown
        date={new Date("2024-09-28")}
        renderer={renderer}
      />
    </>
  );
}
