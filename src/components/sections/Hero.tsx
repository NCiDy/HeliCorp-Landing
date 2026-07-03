"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
    const { scrollY } = useScroll();

    // 🎯 SCROLL PROGRESS HERO
    const yImage = useTransform(scrollY, [0, 600], [0, 120]);
    const scaleImage = useTransform(scrollY, [0, 600], [1, 1.15]);

    const yContent = useTransform(scrollY, [0, 400], [0, -120]);
    const opacityContent = useTransform(scrollY, [0, 300], [1, 0]);

    const scaleContent = useTransform(scrollY, [0, 600], [1, 0.85]);

    return (
        <section id="top" className="relative w-full h-screen overflow-hidden">

            {/* BACKGROUND (parallax + zoom nhẹ) */}
            <motion.div
                style={{
                    y: yImage,
                    scale: scaleImage
                }}
                className="absolute inset-0"
            >
                <Image
                    src="/images/petkit_hero2.webp"
                    alt="PETKIT"
                    fill
                    priority
                    className="object-cover object-[63%_center]"
                />
            </motion.div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* CONTENT (biến mất theo scroll) */}
            <motion.div
                style={{
                    y: yContent,
                    opacity: opacityContent,
                    scale: scaleContent
                }}
                className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 text-white"
            >
                <h1 className="text-3xl md:text-5xl font-bold max-w-4xl">
                    Máy cho thú cưng ăn có Camera PETKIT YumShare Dual-Hopper
                </h1>

                <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-md">
                    Chăm sóc toàn diện, quan sát mọi lúc.
                </p>

                <div className="mt-6 flex gap-4">
                    <Link
                        href="#newsletter"
                        className="px-6 py-3 bg-white text-black rounded-xl"
                    >
                        Đăng ký
                    </Link>

                    <Link
                        href="#features"
                        className="px-6 py-3 border border-white rounded-xl"
                    >
                        Xem tiếp
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}