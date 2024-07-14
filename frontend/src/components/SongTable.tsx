const data = [
    {anime: "It's Mygo!!!!!", song: "haruhikage", year: 2023},
    {anime: "Girls band cry", song: "sora no hako", year: 2024},
];

const SongTable = () => {
    return(
        <div className="flex-1 p-4">
            <table className="table-auto w-full border-collapse border border-gray-400">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="border border-gray-300 px-4 py-1">anime</th>
                        <th className="border border-gray-300 px-4 py-1">song</th>
                        <th className="border border-gray-300 px-4 py-1">year</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, key) => {
                        return (
                            <tr key={key} className="hover:bg-gray-100">
                                <td className="border border-gray-300 px-4 py-2">{val.anime}</td>
                                <td className="border border-gray-300 px-4 py-2">{val.song}</td>
                                <td className="border border-gray-300 px-4 py-2">{val.year}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default SongTable;