'use client';

import { useState } from 'react';

export default function ZukunftsteinCalc() {
  const [brutto, setBrutto] = useState(100);
  const netto = Math.round(brutto * 0.62);
  const rentePlus = Math.round(brutto * 0.42);

  return (
    <div className="calc">
      <div className="calc__input">
        <label>Bruttoumwandlung / Monat</label>
        <input
          type="range"
          min={25}
          max={300}
          step={5}
          value={brutto}
          onChange={(e) => setBrutto(+e.target.value)}
        />
        <div className="calc__val">{brutto} €</div>
        <div className="calc__note">Verschieben Sie den Regler — das Rechenbeispiel aktualisiert sich.</div>
      </div>
      <div className="calc__results">
        <div>
          <span>Netto-Aufwand für Sie</span>
          <b>{netto} €</b>
          <small>Durch Steuer- und SV-Ersparnis</small>
        </div>
        <div className="calc__arrow">→</div>
        <div className="calc__res-big">
          <span>Zusätzliche Monatsrente</span>
          <b>~ {rentePlus} €</b>
          <small>nach 25 Jahren Einzahlung · vereinfachte Prognose</small>
        </div>
      </div>
    </div>
  );
}
