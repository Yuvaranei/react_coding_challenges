import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useQuery } from "@apollo/client";
import { GET_TOP_RACERS } from "../../graphql/queries";
import RacerCard from "./RacerCard";

export default function RacerList() {
  const { data, loading, error } = useQuery(GET_TOP_RACERS);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const { t } = useTranslation();

  const toggleBookmark = (id) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading racers</p>;

  return (
    <div>
      <h2>{t('topRacers')}</h2>
      <div style={{ display: "flex", gap: "5px" }} className="container">
        {data.topRacers.map((racer) => (
          <RacerCard
            key={racer.id}
            racer={racer}
            isBookmarked={bookmarkedIds.includes(racer.id)}
            toggleBookmark={toggleBookmark}
          />
        ))}
      </div>
    </div>
  );
}
