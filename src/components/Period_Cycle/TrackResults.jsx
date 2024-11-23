import React, { useState, useEffect, useMemo } from "react";
import { DayPickerRangeController } from "react-dates";
import moment from "moment";
import Grid from "@mui/material/Grid";

function TrackResults({ startPeriodDate, daysLast, cycleCount }) {
  // Initialize the current cycle range (start date + duration)
  const [focusedInput, setFocusedInput] = useState("START_DATE");
  const [initialMonth, setInitialMonth] = useState(startPeriodDate);
  const isMobile = window.innerWidth < 800;

  // Memoize menstruation date range calculation to avoid unnecessary recalculations
  const menses = useMemo(() => {
    const start = startPeriodDate.clone();
    const end = startPeriodDate.clone().add(daysLast, "days");
    return [start, end];
  }, [startPeriodDate, daysLast]);

  // Update the initial month when the startPeriodDate changes
  useEffect(() => {
    setInitialMonth(startPeriodDate.clone());
  }, [startPeriodDate]);

  // Utility function to check if a given date falls within any of the next three menstrual cycles
  const isInCycle = (momentDate, cycleMultiplier = 0) => {
    const cycleStart = menses[0].clone().add(cycleMultiplier * cycleCount, "days").subtract(1, "days");
    const cycleEnd = menses[1].clone().add(cycleMultiplier * cycleCount, "days");
    return momentDate.isBetween(cycleStart, cycleEnd);
  };

  // Check if the date is in the menstruation period across multiple cycles
  const check = (momentDate) => {
    return (
      isInCycle(momentDate, 0) || // Current cycle
      isInCycle(momentDate, 1) || // Next cycle
      isInCycle(momentDate, 2) || // Cycle after next
      isInCycle(momentDate, 3)    // Third cycle ahead
    );
  };

  // Utility to highlight days just before menstruation in all cycles
  const isHighlighted = (momentDate) => {
    const isBeforeCycle = (cycleMultiplier = 0) => {
      const cycleStart = menses[0].clone().add(cycleMultiplier * cycleCount, "days").subtract(1, "days");
      const cycleEnd = menses[1].clone().add(cycleMultiplier * cycleCount, "days").subtract(1, "days");
      return momentDate.isBetween(cycleStart, cycleEnd);
    };
    return (
      isBeforeCycle(0) || // Current cycle
      isBeforeCycle(1) || // Next cycle
      isBeforeCycle(2) || // Cycle after next
      isBeforeCycle(3)    // Third cycle ahead
    );
  };

  return (
    <div>
      <DayPickerRangeController
        focusedInput={focusedInput} // Determines which input field is focused
        initialVisibleMonth={() => initialMonth} // Set the visible month in the calendar
        numberOfMonths={isMobile ? 1 : 3} // Render 1 or 3 months depending on device size
        renderDayContents={(momentDate) => (
          <Grid container>
            <Grid item xs={12}>
              {/* Show a drop icon if the date is in a menstruation cycle */}
              {check(momentDate) && <span style={{ fontSize: "100%" }}>🩸</span>}
            </Grid>
            <Grid item xs={12}>{momentDate.date()}</Grid>
          </Grid>
        )}
        isDayHighlighted={(momentDate) => isHighlighted(momentDate)} // Highlight specific dates
      />
    </div>
  );
}

export default TrackResults;
