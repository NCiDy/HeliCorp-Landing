"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
    {
        title: "Camera giám sát 1080P",
        description:
            "Quan sát thú cưng mọi lúc mọi nơi với camera góc rộng 140°, hình ảnh sắc nét ngay cả khi ban đêm nhờ hồng ngoại tích hợp.",
        image: "/images/feature_camera.webp",
        bg: "bg-[#FFE8D6]", 
    },
    {
        title: "2 Ngăn chứa độc lập",
        description:
            "Chia khẩu phần riêng biệt cho 2 bé hoặc 2 loại thức ăn khác nhau, tổng dung tích lên đến 5 lít, không lo hết đồ ăn khi vắng nhà.",
        image: "/images/feature_hopper.webp",
        bg: "bg-[#DCEEFB]",  
    },
    {
        title: "Đàm thoại 2 chiều",
        description:
            "Gọi điện, trò chuyện và an ủi thú cưng từ xa qua loa và mic tích hợp ngay trên app điện thoại.",
        image: "/images/feature_call.webp",
        bg: "bg-[#E8E4F9]",  
    },
    {
        title: "Khóa 3 lớp giữ tươi",
        description:
            "Thiết kế nắp khóa kín 3 lớp chống ẩm, giữ hạt luôn khô giòn, thơm ngon như mới trong suốt thời gian sử dụng.",
        image: "/images/feature_lock.webp",
        bg: "bg-[#DFF3E3]", 
    },
];

export default function Features() {
    return (
        <section id="features" className="py-20 px-6 md:px-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
                Tính năng nổi bật
            </h2>

            <div className="flex flex-col gap-8 max-w-5xl mx-auto">
                {features.map((item, index) => {
                    const isReversed = index % 2 === 1;

                    return (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row ${
                                isReversed ? "md:flex-row-reverse" : ""
                            } items-center gap-8 rounded-3xl p-8 md:p-10 ${item.bg}`}
                        >
                            {/* Ảnh */}
                            <div className="relative w-full md:w-1/2 aspect-[1] rounded-2xl overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>

                            {/* Mô tả */}
                            <div className="w-full md:w-1/2">
                                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
                                    <span className="text-amber-600">{item.title}</span>
                                </h3>
                                <p className="mt-3 text-gray-700 leading-relaxed text-lg md:text-xl text-center">
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