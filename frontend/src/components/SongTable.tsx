import React, { useEffect, useState } from "react";

interface Anime {
    node: {
        id: number;
        title: string;
        main_picture: {
        large: string;
        medium: string;
        };
    };
}

interface AnimeListResponse {
    anime_list: {
        data: Anime[];
        paging: {
            next: string;
        };
    };
}

interface SongTableProps {
    username: string;
}

const SongTable: React.FC<SongTableProps> = ({ username }) => {
    const [animeList, setAnimeList] = useState<Anime[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchAnimeList = async () => {
        setLoading(true);
        setError(null);
        try {
        const response = await fetch(`/api/user_anime_list?user_name=${username}`);

        if (!response.ok) {
            throw new Error('Failed to fetch user anime list');
        }

        const data: AnimeListResponse = await response.json();
        setAnimeList(data.anime_list.data || []);
        setLoading(false);
        } catch (error: any) {
        console.error('Error fetching anime list:', error);
        setError(error.message);
        setLoading(false);
        }
  };

  useEffect(() => {
    if (username) {
      fetchAnimeList();
    }
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (animeList.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="flex-1 p-4">
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border border-gray-300 px-4 py-1">Anime</th>
            <th className="border border-gray-300 px-4 py-1">Songs</th>
          </tr>
        </thead>
        <tbody>
          {animeList.map((anime) => (
            <tr key={anime.node.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{anime.node.title}</td>
              <td className="border border-gray-300 px-4 py-2">bamba</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongTable;
