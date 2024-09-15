import React, { useState } from 'react';
import axios from 'axios';
import './FaqManager.css';

const FaqManager = () => {
  const [faqs, setFaqs] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  const fetchFaqs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/faqs');
      setFaqs(response.data);
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    }
  };

  const handleAddFaq = async () => {
    try {
      const response = await axios.post('http://localhost:5000/faqs', {
        question: newQuestion,
        answer: newAnswer
      });
      setFaqs([...faqs, response.data]);
      setNewQuestion('');
      setNewAnswer('');
    } catch (error) {
      console.error('Error adding FAQ:', error);
    }
  };

  const handleUpdateFaq = async (id, updatedFaq) => {
    try {
      await axios.put(`http://localhost:5000/faqs/${id}`, updatedFaq);
      setFaqs(faqs.map(faq => (faq.id === id ? updatedFaq : faq)));
    } catch (error) {
      console.error('Error updating FAQ:', error);
    }
  };

  const handleDeleteFaq = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/faqs/${id}`);
      setFaqs(faqs.filter(faq => faq.id !== id));
    } catch (error) {
      console.error('Error deleting FAQ:', error);
    }
  };

  React.useEffect(() => {
    fetchFaqs();
  }, []);

  return (
    <div className="faq-page">
      <h1>FAQs</h1>
      <div className="faq-list">
        {faqs.map(faq => (
          <div key={faq.id} className="faq-item">
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
            <button onClick={() => handleUpdateFaq(faq.id, { ...faq, question: 'Updated Question', answer: 'Updated Answer' })}>
              Update
            </button>
            <button onClick={() => handleDeleteFaq(faq.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="add-faq">
        <h2>Add a new FAQ</h2>
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="New Question"
        />
        <textarea
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          placeholder="New Answer"
        />
        <button onClick={handleAddFaq}>Add FAQ</button>
      </div>
    </div>
  );
};

export default FaqManager;
