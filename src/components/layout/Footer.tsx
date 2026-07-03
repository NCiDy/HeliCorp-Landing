"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookSquare, FaYoutube, FaTiktok } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const socialLinks = [
    { name: "Facebook", Icon: FaFacebookSquare, href: "https://www.facebook.com/helicorpvietnam?locale=vi_VN" },
    { name: "Youtube", Icon: FaYoutube, href: "https://www.youtube.com/@helipet" },
    { name: "TikTok", Icon: FaTiktok, href: "https://www.youtube.com/@helipet" },
    { name: "Zalo", Icon: SiZalo, href: "https://www.youtube.com/@helipet" },
];

const companyLinks = ["Thông tin", "Tin tức", "Cơ hội việc làm", "Liên hệ"];

const brandLogos = [
    { name: "Petkit", icon: "/images/brand-petkit.webp", href: "https://petkitvietnam.com/" },
    { name: "Dr.vet", icon: "/images/brand-drvet.webp", href: "https://drvet.vn/" },
    { name: "Helipet", icon: "/images/brand-helipet.webp", href: "https://helipet.vn" },
    { name: "Neakasa", icon: "/images/brand-neakasa.webp", href: "https://neakasa.vn/" },
    { name: "Petree", icon: "/images/brand-petree.webp", href: "https://petree.vn/" },
];

function AnimatedDivider() {
    return (
        <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="h-px w-full bg-white/30"
        />
    );
}

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Logo */}
                <div className="flex items-center justify-between py-6">
                    <Link href="/">
                        <Image
                            src="/images/helicorp-logo-white.webp"
                            alt="HELICORP"
                            width={160}
                            height={26}
                        />
                    </Link>
                    <div className="flex items-center gap-4">
                        {socialLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.name}
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white/10 transition"
                            >
                                <item.Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <AnimatedDivider />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-10">

                    {/* Công ty */}
                    <div>
                        <h3 className="font-bold uppercase mb-4 leading-snug">
                            Công ty cổ phần cuộc sống mạnh khoẻ
                        </h3>
                        <ul className="space-y-2">
                            {companyLinks.map((link) => (
                                <li key={link}>
                                    <Link href="https://helicorp.vn/about-helicorp/" className="text-gray-300 hover:text-white transition">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hỗ trợ */}
                    <div>
                        <h3 className="font-bold uppercase mb-4">Hỗ trợ</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                Tư vấn mua hàng:{" "}
                                <a href="tel:+84862258929" className="hover:text-white transition">
                                    +84 (0) 862 258 929
                                </a>
                            </li>
                            <li>
                                Trung tâm bảo hành:{" "}
                                <a href="tel:+84965255227" className="hover:text-white transition">
                                    +84 (0) 965 255 227
                                </a>
                            </li>
                            <li>
                                Email:{" "}
                                <a href="mailto:info@helicorp.vn" className="hover:text-white transition">
                                    info@helicorp.vn
                                </a>
                            </li>
                            <li className="pt-2">Giờ làm việc: 8:30 AM – 6:00 PM (GMT +7)</li>
                        </ul>
                    </div>

                    {/* Chi nhánh */}
                    <div>
                        <h3 className="font-bold uppercase mb-4">Chi nhánh</h3>
                        <div className="text-gray-300 space-y-3">
                            <p>
                                <strong className="text-white">Trụ sở chính: TP Hồ Chí Minh</strong>
                                <br />
                                R54, đường 15, khu phố 5, Phường Đông Hưng Thuận, Thành phố Hồ Chí Minh.
                            </p>
                            <p>
                                <strong className="text-white">Chi nhánh văn phòng và cửa hàng</strong>
                                <br />
                                Kho cát mèo HELIPET, khu 25.2 ha, Xã Sơn Đồng, Hà Nội
                                <br />
                                Số 166 đường Đinh Tiên Hoàng, Phường Tân Định, Thành phố Hồ Chí Minh
                                <br />
                                Số 35 đường Thụy Khuê, Phường Tây Hồ, Hà Nội
                            </p>
                        </div>
                    </div>
                </div>

                <AnimatedDivider />

                {/* brand logos + copyright */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <span className="font-bold uppercase text-sm shrink-0">
                            Website công ty
                        </span>
                        <div className="flex flex-wrap items-center gap-3">
                            {brandLogos.map((brand) => (
                                <a
                                    key={brand.name}
                                    href={brand.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 px-3 flex items-center bg-white rounded-lg hover:opacity-80 transition"
                                >
                                    <Image
                                        src={brand.icon}
                                        alt={brand.name}
                                        width={80}
                                        height={24}
                                        className="h-5 w-auto object-contain"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    <p className="text-sm text-gray-400">
                        2026 © Bản quyền thuộc về Healthy Living Corporation
                    </p>
                </div>
            </div>
        </footer>
    );
}