import { useState } from 'react';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    // Hook up to a real backend / email service here.
    setSent(true);
    setText('');
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form className="feedback" onSubmit={onSubmit}>
      <label htmlFor="feedback">Feedback:</label>
      <textarea
        id="feedback"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
      />
      <button type="submit">{sent ? 'Thank you!' : 'Send'}</button>
    </form>
  );
}
