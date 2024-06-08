// ChatGPT.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./ChatGPT.css";


const ChatGPT = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    console.log('API Key:', process.env.REACT_APP_OPENAI_API_KEY);
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
      if (!apiKey) {
        throw new Error('API key is missing');
      }

      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'Translate the following Norwegian question to English and search for relevant information on realwear.com and jodapro.no',
            },
            {
              role: 'user',
              content: input,
            },
          ],
          max_tokens: 1000,
          temperature: 0.5,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const translatedQuestion = result.data.choices[0].message.content.trim();

      const answer = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'Provide a detailed answer to the following question in Norwegian',
            },
            {
              role: 'user',
              content: translatedQuestion,
            },
          ],
          max_tokens: 1000,
          temperature: 0.5,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setResponse(answer.data.choices[0].message.content.trim());
    } catch (error) {
      console.error('Error fetching response:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Skriv ditt spørsmål her..."
        />
        <button type="submit">Send</button>
      </form>
      {response && <div>{response}</div>}
    </div>
  );
};

export default ChatGPT;
