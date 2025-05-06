import React from 'react';
import { useTranslation } from 'react-i18next';


const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select value={i18n.language} onChange={handleChange}>
      <option value="en">English</option>
      <option value="jp">日本語</option>    
    </select>
  );
};

export default LanguageSwitcher;
