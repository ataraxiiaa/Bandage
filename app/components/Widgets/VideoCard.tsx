const VideoCard = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="flex items-center justify-center flex-col gap-6 mb-5">
                <video
                    width={800}
                    height={250}
                    controls
                    poster="/videocard.jpg"
                >
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
}
export default VideoCard;