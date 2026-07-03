"use client";

import {
    useState,
    useEffect,
    type ChangeEvent,
    type FormEvent,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { validateLead } from "@/lib/validators";
import { sendWebhook, trackEvent } from "@/lib/api";

export default function Newsletter() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        wantsCare: false,
    });

    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const errorMsg = validateLead(form);

        if (errorMsg) {
            setError(errorMsg);
            setStatus("error");
            return;
        }

        setError(null);
        setStatus("loading");

        try {
            await trackEvent("submit_newsletter");
            await sendWebhook(form);

            setStatus("success");

            setForm({
                name: "",
                email: "",
                phone: "",
                wantsCare: false,
            });
        } catch (err) {
            console.error(err);

            setError("Có lỗi xảy ra, vui lòng thử lại sau");
            setStatus("error");
        }
    };

    useEffect(() => {
    const tracked = new Set<number>();

    const handleScroll = () => {
        const percent = Math.floor(
            (window.scrollY /
                (document.body.scrollHeight - window.innerHeight)) *
                100
        );

        const milestones = [20, 40, 60, 80, 100];

        milestones.forEach((milestone) => {
            if (percent >= milestone && !tracked.has(milestone)) {
                tracked.add(milestone);

                trackEvent("scroll", { percent: milestone });

                console.log(`Đã cuộn ${milestone}%`);
            }
        });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);

    return (
        <section id="newsletter" className="py-20 px-6 md:px-20 bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Đăng ký nhận tư vấn
                    </h2>
                    <p className="text-white max-w-3xl mx-auto">
                        Để lại thông tin, đội ngũ PETKIT sẽ liên hệ tư vấn sản phẩm phù hợp nhất cho bé cưng của bạn
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-2/5 bg-white rounded-3xl p-6 md:p-8 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-black mb-1"
                                >
                                    Họ và tên
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Nguyễn Văn A"
                                    className="w-full px-4 py-3 rounded-xl border text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-black mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="a@gmail.com"
                                    className="w-full px-4 py-3 rounded-xl border text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-black mb-1"
                                >
                                    Số điện thoại{" "}
                                    <span className="text-gray-400">
                                        (không bắt buộc)
                                    </span>
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="0901234567"
                                    className="w-full px-4 py-3 rounded-xl border text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            <div className="flex items-start gap-3 pt-2">
                                <input
                                    id="wantsCare"
                                    name="wantsCare"
                                    type="checkbox"
                                    checked={form.wantsCare}
                                    onChange={handleChange}
                                    className="mt-1 w-5 h-5 accent-orange-500 cursor-pointer"
                                />
                                <label
                                    htmlFor="wantsCare"
                                    className="text-sm text-gray-700 cursor-pointer"
                                >
                                    Tôi quan tâm đến gói dịch vụ{" "}
                                    <strong>PETKIT Care+</strong> và muốn được tư
                                    vấn thêm
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-3 bg-black text-white rounded-xl font-medium hover:scale-[1.02] transition disabled:opacity-50"
                            >
                                {status === "loading"
                                    ? "Đang gửi..."
                                    : "Gửi thông tin"}
                            </button>

                            {status === "error" && error && (
                                <p
                                    role="alert"
                                    className="text-red-500 text-sm text-center"
                                >
                                    {error}
                                </p>
                            )}

                            {status === "success" && (
                                <p
                                    role="status"
                                    className="text-green-600 text-sm text-center"
                                >
                                    Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.
                                </p>
                            )}
                        </form>
                    </div>

                    <motion.div
                        animate={{
                            scale: form.wantsCare ? 1.02 : 1,
                            boxShadow: form.wantsCare
                                ? "0 10px 40px rgba(255,140,0,0.25)"
                                : "0 0px 0px rgba(0,0,0,0)",
                        }}
                        transition={{ duration: 0.3 }}
                        className={`w-full md:w-3/5 rounded-3xl p-6 md:p-8 bg-[#FFF3E0] border-2 ${
                            form.wantsCare
                                ? "border-orange-400"
                                : "border-transparent"
                        }`}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">
                                PETKIT Care+
                            </h3>

                            {form.wantsCare && (
                                <span className="text-xs font-medium bg-orange-400 text-white px-2 py-1 rounded-full">
                                    Đã chọn tư vấn
                                </span>
                            )}
                        </div>

                        <p className="text-gray-700 mb-4">
                            Gói dịch vụ mở rộng lưu trữ hình ảnh và video phát
                            lại từ camera, hoàn toàn không bắt buộc đăng ký để
                            sử dụng sản phẩm PETKIT.
                        </p>

                        <div className="relative w-full rounded-2xl overflow-hidden bg-white">
                            <Image
                                src="/images/petkit_care_plus.webp"
                                alt="PETKIT Care+"
                                width={1000}
                                height={954}
                                sizes="(max-width: 768px) 100vw, 60vw"
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}