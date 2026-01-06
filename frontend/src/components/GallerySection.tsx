export const GallerySection = () => {
    const allImages = [
        "https://content.jdmagicbox.com/comp/varanasi/k7/0542px542.x542.180227213015.h9k7/catalogue/bhawan-finance-varanasi-1gqsztqkpu.jpg?imwidth=463.3333333333333",

        "https://content.jdmagicbox.com/comp/varanasi/k7/0542px542.x542.180227213015.h9k7/catalogue/bhawan-finance-varanasi-ho-varanasi-finance-companies-7g2r45dssb.jpg?imwidth=463.3333333333333",

        "https://content.jdmagicbox.com/comp/varanasi/k7/0542px542.x542.180227213015.h9k7/catalogue/bhawan-finance-varanasi-6qata.jpg?imwidth=463.3333333333333",

        "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202509/68dbc2acbce78-built-in-1921-by-british-architect-herbert-baker--the-north-and-south-block-buildings-have-long-hous-30443958-16x9.jpg",

        "https://content.jdmagicbox.com/comp/varanasi/k7/0542px542.x542.180227213015.h9k7/catalogue/bhawan-finance-varanasi-ho-varanasi-finance-companies-gasg8nkthc.jpg?imwidth=463.3333333333333",

        "https://content.jdmagicbox.com/comp/varanasi/k7/0542px542.x542.180227213015.h9k7/catalogue/bhawan-finance-varanasi-ho-varanasi-finance-companies-c297htrqyx.jpg?imwidth=463.3333333333333",

        "https://instagram.fdel27-7.fna.fbcdn.net/v/t39.30808-6/526187672_1565885634378078_4562754319540324628_n.jpg?stp=c0.146.791.988a_dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MzY4ODY2MDU1NDYyMTgyNTk1Nw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjc5MXgxMjgwLnNkci5DMyJ9&_nc_ohc=IqVaV9GxY_UQ7kNvwFGIZ5P&_nc_oc=AdknaTBBF0WXNTwQDFbbLEohg7u-1fSSueDvSzXHHsJ9Hbk2T9jCKzAWs_TE0zPM4EButfAx7d1aEnrmSjVrzPVE&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel27-7.fna&_nc_gid=Kx3DvMuvQnLpSujIPJNCHA&oh=00_AfqWyg9F0zEzoww0XDDmsyauBr9pym4RYZtrT1nXZa4XjA&oe=696285FB",

        "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202509/68d39584a8e3e-finance-ministry-to-move-into-new-office-soon-245353831-16x9.jpg",

        "https://content.jdmagicbox.com/comp/varanasi/k7/0542px542.x542.180227213015.h9k7/catalogue/bhawan-finance-varanasi-ho-varanasi-finance-companies-075ys3p016.jpg?imwidth=463.3333333333333",

        "https://content3.jdmagicbox.com/comp/varanasi/k7/0542px542.x542.180227213015.h9k7/catalogue/bhawan-finance-varanasi-ho-varanasi-finance-companies-55ro3kmc6e.jpg",

        "https://content.jdmagicbox.com/v2/comp/varanasi/k7/0542px542.x542.180227213015.h9k7/catalogue/bhawan-finance-varanasi-ho-varanasi-finance-companies-7tifysxejf.jpg?imwidth=463.3333333333333",


        "https://instagram.fdel27-6.fna.fbcdn.net/v/t39.30808-6/599957785_1685101912456449_3326855554486891624_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=111&ig_cache_key=Mzc4OTMxNTIzMTY5MzY1NDIzOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE2Mzh4MjA0OC5zZHIuQzMifQ%3D%3D&_nc_ohc=PQJ5EPtT3zoQ7kNvwEnm7eL&_nc_oc=Adl6D6POdLV9cDudJE3w-B4xniFu_ipinnll38IjN2xMpIoZTdO3svY1sdCV5E_qFji5Tk9xKnZNzGtN11ZYrL33&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=instagram.fdel27-6.fna&_nc_gid=4cdaEB8xpuRiotGsnMw-Bw&oh=00_AfqFAiSzcCxzDGNBgVTd1h_xhmzYiPSZezcygonv4I3H4Q&oe=69628F93"
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
