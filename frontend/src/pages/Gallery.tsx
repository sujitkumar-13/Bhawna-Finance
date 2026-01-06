import { GallerySection } from "../components/GallerySection";
import { useEffect } from "react";

export const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Gallery | Bhawan Finance - Our Work in Focus";
    }, []);

    return (
        <main className="pt-20">
            {/* Gallery Hero Section */}
            <section className="bg-slate-900 py-20 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C59D4F]/10 skew-x-12 translate-x-1/2"></div>
                <div className="max-w-screen-xl mx-auto relative z-10">
                    <div className="max-w-3xl m-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight text-center">
                            Bhawan Finance <span className="text-[#C59D4F]">Gallery</span>
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed text-center">
                            A visual journey through our offices, our dedicated team, and our commitment to serving your financial needs in Varanasi and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Gallery Section */}
            <GallerySection />

            {/* Call to Action */}
            <section className="bg-white py-16 px-6 border-t border-slate-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                        Ready to Start Your Financial Journey?
                    </h2>
                    <p className="text-slate-600 mb-8 text-lg">
                        Our experts are here to help you find the perfect loan solution for your personal or business needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/apply-now"
                            className="bg-[#C59D4F] hover:bg-[#B38C3D] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95"
                        >
                            Apply for a Loan
                        </a>
                        <a
                            href="/contact"
                            className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};
