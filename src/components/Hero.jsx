import React, { useRef, useState } from 'react'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVdeos] = useState(0);


    const totalVideos = 4;

    const nextVideoRef = useRef(null);

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
    const handleVideoLoad = () => {
        setLoadedVdeos(p => p + 1)
    }

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
    const handleMiniVdClick = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    }



    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
                    <div>
                <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                        <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                            <video ref={nextVideoRef} src={getVideoSrc(upcomingVideoIndex)} loop muted id='current-video' className='size-64 origin-center scale-150 object-cover object-center' onLoadedData={handleVideoLoad} />
                        </div>
                    </div>
                    <video ref={nextVideoRef} src={getVideoSrc(currentIndex)} />
                </div>
            </div>
        </div>
    )
}

export default Hero
