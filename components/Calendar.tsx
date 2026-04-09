"use client";

import { useState } from "react";
import DateRangePicker from "./DateRangePicker";
import NotesPanel from "./NotesPanel";
import HeroImage from "./HeroImage";
import { addMonths, format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";

export default function Calendar() {
  const [range, setRange] = useState({
    start: null,
    end: null,
  });

  const [currentMonth, setCurrentMonth] = useState(new Date());

  return (
    <div className="max-w-5xl mx-auto bg-gray-100 shadow-xl rounded-2xl overflow-hidden border border-gray-300">
      
      <div className="flex flex-col md:flex-row">

        {/* LEFT SIDE */}
        <div className="md:w-1/2 bg-white">

          <HeroImage />

          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gray-200 border-b">
            
            {/* LEFT ARROW */}
            <button
              onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-900 shadow hover:bg-blue-600 hover:text-white transition"
            >
              ←
            </button>

            {/* MONTH */}
            <h2 className="text-lg md:text-xl font-bold text-gray-900">
              {format(currentMonth, "MMMM yyyy")}
            </h2>

            {/* RIGHT ARROW */}
            <button
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-900 shadow hover:bg-blue-600 hover:text-white transition"
            >
              →
            </button>
          </div>

          {/* CALENDAR WITH ANIMATION */}
          <div className="bg-gray-50">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMonth.toString()}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <DateRangePicker
                  range={range}
                  setRange={setRange}
                  currentMonth={currentMonth}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT SIDE (NOTES) */}
        <div className="md:w-1/2 bg-gray-50 border-l border-gray-300">
          <NotesPanel range={range} />
        </div>

      </div>
    </div>
  );
}