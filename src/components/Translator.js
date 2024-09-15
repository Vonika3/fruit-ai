import React, { useState } from 'react';
import axios from 'axios';
import './Translator.css'; // Ensure you create and import the CSS file

const Translator = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!text.trim()) return;
    
    setLoading(true);

    try {
      // Mock API request to a translation service
      const response = await axios.post('https://api.mocktranslator.com/translate', {
        text,
        targetLanguage: 'es', // Example: translate to Spanish
      });

      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
      setTranslatedText('Error translating text');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="translator-page">
      <h1>Translator</h1>
      <div className="translator-form">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to translate..."
          rows="5"
        />
        <button onClick={handleTranslate} disabled={loading}>
          {loading ? 'Translating...' : 'Translate'}
        </button>
      </div>
      {translatedText && (
        <div className="translated-result">
          <h2>Translated Text:</h2>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default Translator;
