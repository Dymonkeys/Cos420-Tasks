import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holidays = [
        { emoji: "🎏", name: "Dragon Boat Festival" },
        { emoji: "🎃", name: "Halloween" },
        { emoji: "🎄", name: "Christmas" },
        { emoji: "🎂", name: "Birthday" },
        { emoji: "🪔", name: "Diwali" }
        // Add more holidays
    ];

    const [currentHoliday, setCurrentHoliday] = useState(holidays[0]);

    const getNextHolidayAlphabetically = () => {
        const currentIndex = holidays.findIndex(
            (holiday) => holiday.name === currentHoliday.name
        );
        const nextIndex =
            currentIndex === holidays.length - 1 ? 0 : currentIndex + 1;
        setCurrentHoliday(holidays[nextIndex]);
    };

    const getNextHolidayInYear = () => {
        const currentIndex = holidays.findIndex(
            (holiday) => holiday.name === currentHoliday.name
        );
        const nextIndex =
            currentIndex === holidays.length - 1 ? 0 : currentIndex + 1;
        setCurrentHoliday(holidays[nextIndex]);
    };

    return (
        <div>
            <div>Holiday: {currentHoliday.emoji}</div>
            <Button onClick={getNextHolidayAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={getNextHolidayInYear}>Advance by Year</Button>
        </div>
    );
}
