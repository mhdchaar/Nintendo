import React from "react";

const SlideButton = ({ ariaLabel, slideIndex, imageSrc }) => {
    return (
        <button
            aria-label={ariaLabel}
            data-slide={slideIndex}
            className="inline-block mr-4 focus:outline-none" // Added margin and removed focus outline
            fdprocessedid={slideIndex}
        >
            <div className="cheJZA">
                <div className="cvtXnM">
                    <img
                        alt={ariaLabel}
                        loading="eager"
                        fetchpriority="auto"
                        className="kOtaRP"
                        src={imageSrc}
                    />
                </div>
            </div>
        </button>
    );
};

const Slider = () => {
    const slides = [
        {
            ariaLabel: "See Slide 1 - Image",
            slideIndex: 0,
            imageSrc: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_100/ncom/en_US/games/switch/s/stardew-valley-switch/Video/posters/Stardew_Valley_Trailer_ESRB"        },
        {
            ariaLabel: "See Slide 2 - Video",
            slideIndex: 1,
            imageSrc:
            "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_100/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot01"        },
        {
            ariaLabel: "See Slide 3 - Image",
            slideIndex: 2,
            imageSrc:
                "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_100/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot02",
        },
        {
            ariaLabel: "See Slide 4 - Image",
            slideIndex: 3,
            imageSrc:
"https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_100/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot03"        },
        {
            ariaLabel: "See Slide 5 - Image",
            slideIndex: 4,
            imageSrc:
"https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_100/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot04"        },
        {
            ariaLabel: "See Slide 6 - Image",
            slideIndex: 5,
            imageSrc:
"https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_100/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot03"        },
    ];

    return (
        <div className="sc-1fakp5g-16 dhhLDo-rail-frame flex overflow-x-auto">
            <div className="sc-n3ag19-2 iPZjP flex">
                <div className="sc-n3ag19-3 eHFxXl flex">
                    {slides.map((slide, index) => (
                        <div key={index} className="sc-n3ag19-4 RaiRA">
                            <SlideButton
                                ariaLabel={slide.ariaLabel}
                                slideIndex={slide.slideIndex}
                                imageSrc={slide.imageSrc}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
