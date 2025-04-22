
const VideoTitle = ({title,overview}) =>{
    return (
        <div className="py-36 px-6">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div>
                <button className="bg-gray-500 text-white p-4 px-12 rounded-lg text-xl opacity-50">▶️ Play</button>
                <button className="mx-2 bg-gray-500 text-white p-4 px-12 rounded-lg text-xl opacity-50">More Info</button>
            </div>

        </div>
    )
}

export default VideoTitle;