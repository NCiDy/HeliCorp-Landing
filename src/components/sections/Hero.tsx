"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full h-screen">

            {/* Background image */}
            <Image
                src="/images/petkit_hero.jpg"
                alt="Máy cho thú cưng ăn tự động có camera PETKIT YumShare Dual-Hopper Gemini"
                fill
                priority
                sizes="100vw"
                quality={80}
                className="object-cover object-[75%_center] md:object-[90%_center]"
            />

            {/* Overlay gradient để tăng contrast cho chữ */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Content */}
            <motion.div className="relative z-10 h-full flex flex-col justify-start md:justify-center items-start px-6 md:px-20 pt-10 md:pt-0 text-white">

                <motion.h1
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl md:text-5xl font-bold max-w-4xl"
                    style={{ textShadow: "0 4px 20px rgba(0,0,0,.6)" }}
                >
                    Máy cho thú cưng ăn có Camera PETKIT YumShare Dual-Hopper (Gemini)
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-4 text-lg md:text-2xl lg:text-2xl max-w-md text-gray-200"
                    style={{ textShadow: "0 10px 20px rgba(0,0,0,.6)" }}
                >
                    Chăm sóc toàn diện, quan sát mọi lúc - An tâm cho Sen, no đủ cho Boss.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="mt-auto mb-6 flex justify-center gap-4 self-center md:self-start md:mt-6 md:mb-0"
                >
                    <Link
                        href="#newsletter"
                        aria-label="Mua máy cho thú cưng ăn PETKIT YumShare Dual-Hopper Gemini"
                        className="px-6 py-3 bg-white text-black rounded-xl hover:scale-105 transition"
                    >
                        Đăng ký nhận tư vấn
                    </Link>
                    <Link
                        href="#features"
                        aria-label="Xem chi tiết tính năng sản phẩm"
                        className="px-6 py-3 border border-white rounded-xl hover:scale-105 transition"
                    >
                        Xem chi tiết
                    </Link>
                </motion.div>

            </motion.div>
        </section>
    );
}