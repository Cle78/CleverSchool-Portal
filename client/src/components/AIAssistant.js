import React, { useState } from 'react';

export default function AIAssistant() {
  const [prompt, setPrompt] = useState('');
  const [chat, setChat] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userMessage = prompt;
    setChat(prev => [...prev, { sender: 'You', text: userMessage }]);
    setPrompt('');

    try {
      const res = await fetch('http://localhost:5000/api/ai/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage })
      });
      const data = await res.json();
      setChat(prev => [...prev, { sender: 'AI Assistant', text: data.reply }]);
    } catch (err) {
      setChat(prev => [...prev, { sender: 'AI Assistant', text: 'Error connecting to AI service.' }]);
    }
  };

  return (
    <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <h3>Clever Assistant</h3>
      <div style={{ height: '150px', overflowY: 'scroll', border: '1px solid #ddd', padding: '10px', marginBottom: '10px', borderRadius: '4px', background: '#fafafa' }}>
        {chat.length === 0 ? <p style={{ color: '#888' }}>Ask me anything about your portal or school schedule...</p> : null}
        {chat.map((msg, index) => (
          <div key={index} style={{ marginBottom: '8px' }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          value={prompt} 
          onChange={e => setPrompt(e.target.value)} 
          placeholder="Type your question..." 
          style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} 
        />
        <button type="submit" style={{ padding: '8px 15px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Ask</button>
      </form>
    </div>
  );
}
