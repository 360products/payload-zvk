'use client';

export default function ContactForm() {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        alert('Demo-Prototyp — Formular wird nicht gesendet.');
      }}
    >
      <div className="form__row">
        <div>
          <label>Anliegen betrifft</label>
          <select>
            <option>Beiträge & Meldungen (Betriebe)</option>
            <option>Anwartschaft (Versicherte)</option>
            <option>Rentenbezug (Rentner)</option>
            <option>ZukunftStein (Beratung)</option>
            <option>Presse / Sonstiges</option>
          </select>
        </div>
        <div>
          <label>Mitgliedsnummer (falls vorhanden)</label>
          <input type="text" />
        </div>
      </div>
      <div className="form__row">
        <div><label>Name</label><input type="text" required /></div>
        <div><label>E-Mail</label><input type="email" required /></div>
      </div>
      <div>
        <label>Nachricht</label>
        <textarea rows={5} required />
      </div>
      <button type="submit" className="zvk-btn zvk-btn--primary" style={{ marginTop: 12 }}>
        Senden <span className="arrow">→</span>
      </button>
    </form>
  );
}
