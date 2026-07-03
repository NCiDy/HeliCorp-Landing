"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
    {
        title: "Camera giám sát 1080P",
        description:
            "Quan sát thú cưng mọi lúc mọi nơi với camera góc rộng 140°...",
        image: "/images/feature_camera.webp",
        bg: "#FFE8D6",
    },
    {
        title: "2 Ngăn chứa độc lập",
        description:
            "Chia khẩu phần riêng biệt cho 2 bé...",
        image: "/images/feature_hopper.webp",
        bg: "#DCEEFB",
    },
    {
        title: "Đàm thoại 2 chiều",
        description:
            "Gọi điện, trò chuyện từ xa...",
        image: "/images/feature_call.webp",
        bg: "#E8E4F9",
    },
];

export default function Features() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={ref} className="relative h-[300vh]">

            {/* TITLE STICKY */}
            <div className="sticky top-20 text-center mb-10 z-10">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Tính năng nổi bật
                </h2>
            </div>

            {/* FEATURE VIEWER (sticky) */}
            <div className="sticky top-40 flex justify-center items-center h-[60vh]">

                {features.map((item, index) => {
                    const start = index / features.length;
                    const end = (index + 1) / features.length;

                    const opacity = useTransform(
                        scrollYProgress,
                        [start, end],
                        [0, 1]
                    );

                    const scale = useTransform(
                        scrollYProgress,
                        [start, end],
                        [0.8, 1]
                    );

                    return (
                        <motion.div
                            key={item.title}
                            style={{
                                opacity,
                                scale,
                                backgroundColor: item.bg,
                            }}
                            className="absolute flex flex-col md:flex-row gap-8 p-10 rounded-3xl w-[80%]"
                        >
                            {/* IMAGE */}
                            <div className="relative w-full md:w-1/2 aspect-square">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover rounded-2xl"
                                />
                            </div>

                            {/* TEXT */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <h3 className="text-2xl font-semibold">
                                    {item.title}
                                </h3>
                                <p className="mt-4 text-gray-700">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}