import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",

  primaryBright: "#9daaff",
  primaryDark: "#9daaff",

  warning: "#ff3737",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  success: "#4a31d0",
  primary: "#15066a",
  background: "#FAF9FA",
  secondary: "#15066a",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eaf4ec",
  tertiary: "#EFF4F5",
  text: "#000000",
  textDisabled: "#BDC2C4",
  textSubtle: "#363c68",
  borderColor: "#E9EAEB",
  card: "#e3e3e6",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  success: "#ffffff",
  secondary: "#ffffff",
  primary: "#9daaff",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#36343c",
  primaryDark: "#9daaff",
  tertiary: "#27262c",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
