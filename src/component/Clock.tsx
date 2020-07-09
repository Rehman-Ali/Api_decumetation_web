import React, { useRef, useEffect } from "react";

import points from "../image/clock/points.svg";
import hourhand from "../image/clock/hourhand.svg";
import minuteshand from "../image/clock/minuteshand.svg";
import secondhand from "../image/clock/secondhand.svg";
import dot from "../image/clock/dot.svg";

import clockbackground from "../image/clockbackground.jpg";
import { start } from "repl";

export default function Clock() {
  const clock1 = useRef(null);
  const clock2 = useRef(null);
  const clock3 = useRef(null);

  useEffect(() => {
    StartClock(clock1, 2, 15, 15);
    StartClock(clock2, 1, 25, 30);
    StartClock(clock3, 3, 35, 55);
  }, [clock1, clock2, clock3]);

  function StartClock(clock: React.MutableRefObject<any>, hour: number, minute: number, second: number) {
    const hourTransform = clock.current.childNodes[1] as HTMLElement;
    const minuteTransform = clock.current.childNodes[2] as HTMLElement;
    const secondTransform = clock.current.childNodes[3] as HTMLElement;

    hourTransform.style.transform = "translateX(-50%) translateY(-50%) rotate(" + (360 / 12) * hour++ + "deg)";
    minuteTransform.style.transform = "translateX(-50%) translateY(-50%) rotate(" + (360 / 60) * minute++ + "deg)";
    secondTransform.style.transform = "translateX(-50%) translateY(-50%) rotate(" + (360 / 60) * second++ + "deg)";

    setInterval(() => (hourTransform.style.transform = "translateX(-50%) translateY(-50%) rotate(" + (360 / 12) * hour++ + "deg)"), 1000 * 60 * 60);
    setInterval(() => (minuteTransform.style.transform = "translateX(-50%) translateY(-50%) rotate(" + (360 / 60) * minute++ + "deg)"), 1000 * 60);
    setInterval(() => (secondTransform.style.transform = "translateX(-50%) translateY(-50%) rotate(" + (360 / 60) * second++ + "deg)"), 1000);
  }

  return (
    <section id="clocks" className="px-10 py-4 mt-6 grid has-gap-lg txt-center img-bg clr-white" style={{ backgroundImage: `url(${clockbackground})` }}>
      <div className="column px-4">
        <div className="mb-8 relative" ref={clock1}>
          <img className="img w-12" src={points} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={hourhand} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={minuteshand} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={secondhand} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={dot} alt="" />
        </div>
        <div>
          <h6 className="font-bolder">Pakistan</h6>
          <div>201, Dev Arc, SG Road, Ahmedabad 380015, Gujarat, Pakistan</div>
        </div>
      </div>
      <div className="column px-4">
        <div className="mb-8 relative" ref={clock2}>
          <img className="img w-12" src={points} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={hourhand} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={minuteshand} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={secondhand} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={dot} alt="" />
        </div>
        <div>
          <h6 className="font-bolder">Canada</h6>
          <div>499, N. Canon Drive, Suite 215, Beverly Hills CA 90210 Canada</div>
        </div>
      </div>
      <div className="column px-4">
        <div className="mb-8 relative" ref={clock3}>
          <img className="img w-12" src={points} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={hourhand} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={minuteshand} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={secondhand} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={dot} alt="" />
        </div>
        <div>
          <h6 className="font-bolder">Australia</h6>
          <div>55 Queens Rd, Melbourne VIC 3004, Australia </div>
        </div>
      </div>
    </section>
  );
}
