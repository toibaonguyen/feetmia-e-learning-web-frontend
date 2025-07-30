import { Inter, Noto_Sans, Poppins, Roboto } from "next/font/google";

//main font
export const inter = Inter({
    subsets: ['latin', 'vietnamese'],
    variable: "--font-inter",
    weight: ["400", "600", "700"]
})

//2nd font
export const notoSans = Noto_Sans({
    variable: "--font-noto-sans",
    weight: ["600", "700"]
})

//titles
export const poppins = Poppins({
    variable: "--font-noto-sans",
    weight: ["600", "700"]
})

//buttons
export const roboto = Roboto({
    variable: "--font-roboto",
    weight: ["500", "600"]
})