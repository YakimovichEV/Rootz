import { StaticImageData } from "next/image";

import img1 from "../../../public/images/slider/1.jpg";
import img2 from "../../../public/images/slider/2.jpg";
import img3 from "../../../public/images/slider/3.jpg";
import img4 from "../../../public/images/slider/4.jpg";
import img5 from "../../../public/images/slider/5.jpg";

export type Slide = {
    id: number;
    title: string;
    content: string;
    image: StaticImageData;
};

export const slides: Slide[] = [
    {
        id: 0,
        title: "Save water",
        content:
            "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        image: img1,
    },
    {
        id: 1,
        title: "Plant trees",
        content:
            "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        image: img2,
    },
    {
        id: 2,
        title: "Save energy",
        content:
            "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        image: img3,
    },
    {
        id: 3,
        title: "Avoid plastic",
        content:
            "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        image: img4,
    },
    {
        id: 4,
        title: "Choose organic",
        content:
            "Taking on the issue of ensuring access to safe water requires worldwide effort.",
        image: img5,
    },
];
