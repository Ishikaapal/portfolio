import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/util";

export const ThemeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");

        }
        else {
            localStorage.setItem("theme", "light")
            setIsDarkMode(false);
        }

        // Detect screen size
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640); // Tailwind 'sm' = 640px
        };
        checkMobile();

        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const toggleThem = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
        else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);

        }
    };

    return <button onClick={toggleThem}
        className={cn("p-2 round-full transition-color duration-300 focus:outline-hidden",
            isMobile ? "top-4 right-20" : "top-3 right-5"

        )}>
        {" "}
        {isDarkMode ? <Sun className="h-6 w-6 text-warning" />
            : <Moon className="h-6 w-6 text-accent" />}
    </button>

}; 