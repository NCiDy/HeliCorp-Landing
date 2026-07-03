"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const specs = [
    { label: "Camera", value: "1080P, góc rộng 140°, hồng ngoại ban đêm" },
    { label: "Dung tích", value: "5 lít (2 ngăn: 2L + 3L)" },
    { label: "Kết nối", value: "WiFi 2.4GHz qua App PETKIT" },
    { label: "Đàm thoại", value: "2 chiều, tích hợp mic & loa" },
    { label: "Nguồn điện", value: "Adapter 6V hoặc 4 pin D" },
];

export default function Specifications() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={ref} className="relative h-[250vh] bg-gray-50">

            {/* TITLE */}
            <div className="sticky top-20 text-center z-10">
                <h2 className="text-3xl font-bold text-blue-500">
                    Thông số kỹ thuật
                </h2>
            </div>

            <div className="flex max-w-6xl mx-auto mt-20">

                {/* IMAGE STICKY */}
                <div className="sticky top-40 w-1/2 h-[60vh]">
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/petkit_specs.webp"
                            alt="specs"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* SPECS SCROLL STORY */}
                <div className="w-1/2 space-y-40 py-20">

                    {specs.map((item, index) => {
                        const start = index / specs.length;
                        const end = (index + 1) / specs.length;

                        const opacity = useTransform(
                            scrollYProgress,
                            [start, end],
                            [0.3, 1]
                        );

                        const scale = useTransform(
                            scrollYProgress,
                            [start, end],
                            [0.95, 1.05]
                        );

                        return (
                            <motion.div
                                key={item.label}
                                style={{ opacity, scale }}
                                className="p-6 rounded-2xl bg-white shadow-sm"
                            >
                                <h3 className="text-lg font-semibold text-blue-500">
                                    {item.label}
                                </h3>
                                <p className="text-gray-700 mt-2">
                                    {item.value}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}