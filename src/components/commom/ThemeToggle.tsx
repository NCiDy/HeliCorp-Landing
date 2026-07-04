"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="p-2 rounded-full border border-gray-300">
            </button>
        );
    }

    return (
        <button
            onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-full border border-gray-300"
        >
            {theme === "dark"
                ? <Sun size={20}/>
                : <Moon size={20}/>}
        </button>
    );
}