import Image from "next/image";

const specs = [
    { label: "Camera", value: "1080P, góc rộng 140°, hồng ngoại ban đêm" },
    { label: "Dung tích", value: "5 lít (2 ngăn: 2L + 3L)" },
    { label: "Kết nối", value: "WiFi 2.4GHz qua App PETKIT" },
    { label: "Đàm thoại", value: "2 chiều, tích hợp mic & loa" },
    { label: "Nguồn điện", value: "Adapter 6V hoặc 4 pin Alkaline D (dự phòng)" },
    { label: "Kích thước", value: "31 x 29.6 x 25 cm" },
    { label: "Trọng lượng", value: "~2.5 kg" },
    { label: "Chất liệu", value: "Nhựa ABS cao cấp, khóa 3 lớp chống ẩm" },
];

const guides = [
    {
        title: "Hướng dẫn sử dụng",
        video: "/videos/huong-dan-su-dung.mp4",
        poster: "/images/poster_usage.webp",
        bg: "bg-[#FFE8D6]",
    },
    {
        title: "Hướng dẫn vệ sinh",
        video: "/videos/huong-dan-ve-sinh.mp4",
        poster: "/images/poster_cleaning.webp",
        bg: "bg-[#DCEEFB]",
    },
]
export default function Specifications() {
    return (
        <section id="specifications" className="py-20 px-6 md:px-20 bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-blue-400">
                Thông số kỹ thuật
            </h2>

            <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto items-start">
                {/* Ảnh sản phẩm */}
                <div className="w-full md:w-2/5 md:sticky md:top-24">
                    <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white shadow-sm">
                        <Image
                            src="/images/petkit_specs.webp"
                            alt="PETKIT YumShare Dual-Hopper Gemini nhìn từ góc nghiêng"
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            className="object-contain p-6"
                        />
                    </div>
                </div>

                {/* Bảng thông số */}
                <table className="w-full md:w-3/5">
                    <caption className="sr-only">
                        Thông số kỹ thuật PETKIT YumShare Dual-Hopper Gemini
                    </caption>
                    <tbody>
                        {specs.map((row, index) => (
                            <tr
                                key={row.label}
                                className={`border-b border-gray-200 ${
                                    index % 2 === 1 ? "bg-white/60" : ""
                                }`}
                            >
                                <th
                                    scope="row"
                                    className="text-left py-4 px-3 font-medium text-gray-500 w-1/3 align-top"
                                >
                                    {row.label}
                                </th>
                                <td className="py-4 px-3 text-gray-900">
                                    {row.value}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Hướng dẫn sử dụng & vệ sinh */}
            <div id="usage-guide" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16 scroll-mt-20">
                {guides.map((item) => (
                    <div
                        key={item.title}
                        className={`rounded-3xl p-6 md:p-8 ${item.bg}`}
                    >
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {item.title}
                        </h3>
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black">
                            <video
                                controls
                                preload="none"
                                poster={item.poster}
                                className="w-full h-full"
                            >
                                <source src={item.video} type="video/mp4" />
                                Trình duyệt của bạn không hỗ trợ phát video.
                            </video>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}