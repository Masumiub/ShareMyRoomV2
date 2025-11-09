'use client';

import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

interface CalendarDatePickerProps {
  value: [Dayjs | null, Dayjs | null];
  onChange: (newValue: [Dayjs | null, Dayjs | null]) => void;
}

const CalendarDatePicker: React.FC<CalendarDatePickerProps> = ({ value, onChange }) => {
  const [startDate, endDate] = value;

  // Simple manual range selection
  const handleDateSelect = (date: Dayjs) => {
    if (!startDate || (startDate && endDate)) {
      // Start new selection
      onChange([date, null]);
    } else if (startDate && !endDate) {
      // Complete selection
      if (date.isAfter(startDate)) {
        onChange([startDate, date]);
      } else {
        onChange([date, startDate]);
      }
    }
  };

  const isDateInRange = (date: Dayjs) => {
    if (!startDate || !endDate) return false;
    return date.isAfter(startDate) && date.isBefore(endDate);
  };

  const isStartDate = (date: Dayjs) => {
    return startDate?.isSame(date, 'day');
  };

  const isEndDate = (date: Dayjs) => {
    return endDate?.isSame(date, 'day');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flex flex-col lg:flex-row gap-8 p-5">
        {/* February Calendar */}
        <div className="flex-1">
          <div className="text-center font-semibold mb-4">February 2022</div>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
            {/* Previous month days */}
            {[28, 29, 30, 31].map(day => (
              <div key={`prev-${day}`} className="text-center text-sm text-gray-400 py-2">
                {day}
              </div>
            ))}
            {/* Current month days */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28].map(day => {
              const date = dayjs(`2022-02-${day.toString().padStart(2, '0')}`);
              const isSelectedStart = isStartDate(date);
              const isSelectedEnd = isEndDate(date);
              const isInRange = isDateInRange(date);
              
              return (
                <div
                  key={`feb-${day}`}
                  onClick={() => handleDateSelect(date)}
                  className={`
                    text-center text-sm py-2 cursor-pointer rounded
                    ${isSelectedStart || isSelectedEnd 
                      ? 'bg-black text-white font-bold' 
                      : isInRange 
                        ? 'bg-gray-200' 
                        : 'hover:bg-gray-100'
                    }
                  `}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        {/* March Calendar */}
        <div className="flex-1">
          <div className="text-center font-semibold mb-4">March 2022</div>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                {day}
              </div>
            ))}
            {/* Previous month days */}
            {[28, 29, 30, 31, 1, 2, 3].map(day => (
              <div key={`prev-mar-${day}`} className="text-center text-sm text-gray-400 py-2">
                {day}
              </div>
            ))}
            {/* Current month days */}
            {[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map(day => {
              const date = dayjs(`2022-03-${day.toString().padStart(2, '0')}`);
              const isSelectedStart = isStartDate(date);
              const isSelectedEnd = isEndDate(date);
              const isInRange = isDateInRange(date);
              
              return (
                <div
                  key={`mar-${day}`}
                  onClick={() => handleDateSelect(date)}
                  className={`
                    text-center text-sm py-2 cursor-pointer rounded
                    ${isSelectedStart || isSelectedEnd 
                      ? 'bg-black text-white font-bold' 
                      : isInRange 
                        ? 'bg-gray-200' 
                        : 'hover:bg-gray-100'
                    }
                  `}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-between items-center mt-6 px-4">
        <button className="p-2 hover:bg-gray-100 rounded">
          <span className="text-lg font-bold">{'<'}</span>
        </button>
        <div className="flex gap-4">
          <span className="font-semibold">February 2022</span>
          <span className="font-semibold">March 2022</span>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded">
          <span className="text-lg font-bold">{'>'}</span>
        </button>
      </div>
    </LocalizationProvider>
  );
};

export default CalendarDatePicker;