import { useTranslation } from 'react-i18next';
import  "./RacerCard.css";

export default function RacerCard({ racer, isBookmarked, toggleBookmark }) {
  const { t } = useTranslation();
  return (
    <div className={"card"} role="region" aria-label={`Racer ${racer.name}`}>
      <img src={racer.image} alt={`${racer.name}`} loading="lazy" />
      <div>
        <h2>{racer.name}</h2>
        <p>{t('team')}: {racer.team} - {t('country')}: {racer.country}</p>
        <button
          onClick={() => toggleBookmark(racer.id)}
          aria-pressed={isBookmarked}
        >
          {isBookmarked ? "★ Bookmarked" : "☆ Bookmark"}
        </button>
      </div>
    </div>
  );
}
