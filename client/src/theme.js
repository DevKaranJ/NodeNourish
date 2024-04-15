import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = () => ({
  grey: {
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
  primary: {
    100: "#E0E0E0",
    200: "#BDBDBD",
    300: "#9E9E9E",
    400: "#757575",
    500: "#607D8B",
    600: "#546E7A",
    700: "#455A64",
    800: "#37474F",
    900: "#263238",
  },
  greenAccent: {
    100: "#E8F5E9",
    200: "#C8E6C9",
    300: "#A5D6A7",
    400: "#81C784",
    500: "#66BB6A",
    600: "#4CAF50",
    700: "#43A047",
    800: "#388E3C",
    900: "#2E7D32",
  },
  redAccent: {
    100: "#FFEBEE",
    200: "#FFCDD2",
    300: "#EF9A9A",
    400: "#E57373",
    500: "#EF5350",
    600: "#E53935",
    700: "#D32F2F",
    800: "#C62828",
    900: "#B71C1C",
  },
  blueAccent: {
    100: "#E3F2FD",
    200: "#BBDEFB",
    300: "#90CAF9",
    400: "#64B5F6",
    500: "#42A5F5",
    600: "#2196F3",
    700: "#1E88E5",
    800: "#1976D2",
    900: "#1565C0",
  },
});

// mui theme settings
export const themeSettings = () => {
  const colors = tokens();
  return {
    palette: {
      mode: "light",
      primary: {
        main: colors.primary[500],
      },
      secondary: {
        main: colors.greenAccent[500],
      },
      neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
      },
      background: {
        default: "#fcfcfc",
      },
    },
    typography: {
      fontFamily: ["Public Sans", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Public Sans", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Public Sans", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Public Sans", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Public Sans", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Public Sans", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Public Sans", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const theme = useMemo(() => createTheme(themeSettings()), []);
  return [theme];
};
