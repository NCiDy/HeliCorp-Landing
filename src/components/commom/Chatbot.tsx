"use client";

import { useState,useEffect, useRef } from "react";

type Message = {
    role: "user" | "bot";
    text: string;
};

export default function Chatbot() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState<Message[]>([
        {
            role: "bot",
            text: "Xin chào 👋 Tôi có thể tư vấn sản phẩm cho bạn.",
        },
    ]);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        chatContainerRef.current?.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messages, loading]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = input;

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                text: userMessage,
            },
        ]);

        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: userMessage,
                }),
            });

            const data = await res.json();

            setMessages((prev) => [
                ...prev,
                {
                    role: "bot",
                    text: data.reply,
                },
            ]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    role: "bot",
                    text: "Có lỗi xảy ra.",
                },
            ]);
        }

        setLoading(false);
    };

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-24 right-6 z-[9999] h-14 w-14 rounded-full bg-blue-600 text-white text-2xl shadow-lg"
            >
                💬
            </button>

            {open && (
                <div className="fixed bottom-24 right-6 z-[9999] w-80 rounded-xl bg-white shadow-2xl border overflow-hidden">

                    <div className="flex items-center justify-between bg-blue-600 text-white p-3">
                        <span className="font-bold">Chatbot</span>

                        <button
                            onClick={() => setOpen(false)}
                            className="text-xl hover:opacity-80"
                        >
                            ✕
                        </button>
                    </div>

                    <div ref={chatContainerRef} className="h-80 overflow-y-auto p-3 space-y-2">
                        {messages.map((m, index) => (
                            <div
                                key={index}
                                className={`p-2 rounded-lg max-w-[80%]
                                ${m.role === "user"
                                        ? "ml-auto bg-blue-500 text-white"
                                        : "bg-gray-200 text-black"
                                    }`}
                            >
                                {m.text}
                            </div>
                        ))}

                        {loading && (
                            <div className="bg-gray-200 p-2 rounded-lg w-fit">
                                Đang trả lời...
                            </div>
                        )}
                    </div>

                    <div className="flex border-t">
                        <input
                            className="flex-1 p-3 outline-none text-black"
                            placeholder="Nhập câu hỏi..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") sendMessage();
                            }}
                        />

                        <button
                            onClick={sendMessage}
                            className="px-4 bg-blue-600 text-white"
                        >
                            Gửi
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}