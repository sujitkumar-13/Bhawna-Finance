import image1 from "../assets/Gallery/image1.avif"
import image2 from "../assets/Gallery/image2.avif"
import image3 from "../assets/Gallery/image3.avif"
import image4 from "../assets/Gallery/image4.webp"
import image5 from "../assets/Gallery/image5.avif"
import image6 from "../assets/Gallery/image6.avif"
import image7 from "../assets/Gallery/image7.jpg"
import image8 from "../assets/Gallery/image8.jpg"
import image9 from "../assets/Gallery/image9.avif"
import image10 from "../assets/Gallery/image10.avif"
import image11 from "../assets/Gallery/image11.webp"
import image12 from "../assets/Gallery/image12.jpg"

export const GallerySection = () => {
    const allImages = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
    ];

    return (
        <section className="relative box-border caret-transparent flex flex-col items-center py-12 md:py-24 bg-white">
            <div className="relative box-border w-full max-w-screen-xl mx-auto px-6 md:px-8">
                <div className="text-[#C59D4F] text-xs md:text-sm font-bold tracking-[2.16px] leading-[18px] uppercase mb-2 md:mb-4 text-center">
                    Visual Showcase
                </div>
                <h2 className="text-3xl md:text-5xl leading-tight uppercase font-bold text-slate-900 text-center mb-12 font-inter">
                    Our Work In <span className="text-[#C59D4F]">Focus</span>
                </h2>

                <div className="flex flex-col gap-y-12 w-full">
                    {/* Masonry Layout Using CSS Columns */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {allImages.map((imageUrl, index) => (
                            <div
                                key={index}
                                className="break-inside-avoid group relative overflow-hidden rounded-xl bg-slate-50 shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                <img
                                    src={imageUrl}
                                    alt={`Bhawan Finance Gallery ${index + 1}`}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-115"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
