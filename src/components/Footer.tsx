import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="zvk-footer">
      <div className="zvk-container">
        <div className="zvk-footer__top">
          <div className="zvk-footer__brand">
            <Logo variant="light" height={40} />
            <p style={{ marginTop: 20, maxWidth: 320, color: 'rgba(255,255,255,.7)', fontSize: 14, lineHeight: 1.6 }}>
              Zusatzversorgungskasse des Steinmetz- und Steinbildhauerhandwerks VVaG.
              Für das Handwerk — aus dem Handwerk. Seit 1970.
            </p>
          </div>

          <div className="zvk-footer__cols">
            <div>
              <h5>ZVK für</h5>
              <Link href="/fuer-betriebe">Betriebe</Link>
              <Link href="/fuer-versicherte">Versicherte</Link>
              <Link href="/fuer-rentner">Rentner</Link>
            </div>
            <div>
              <h5>Vorsorge</h5>
              <Link href="/vorsorge/pflichtbeihilfe">Pflichtbeihilfe</Link>
              <Link href="/vorsorge/zukunftstein">ZukunftStein</Link>
              <Link href="/vorsorge/vergleich">Vergleich</Link>
            </div>
            <div>
              <h5>Service</h5>
              <Link href="/service/meldeportal">Meldeportal</Link>
              <Link href="/service/faq">FAQ / ZVK A–Z</Link>
              <Link href="/service/downloads">Downloads</Link>
              <Link href="/service/kontakt">Kontakt</Link>
            </div>
            <div>
              <h5>ZVK</h5>
              <Link href="/ueber-uns">Über die ZVK</Link>
              <Link href="/news">News & Aktuelles</Link>
            </div>
          </div>
        </div>

        <div className="zvk-footer__bottom">
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.55)' }}>
            © {new Date().getFullYear()} ZVK Steinmetz VVaG
          </div>
          <div className="zvk-footer__legal">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/avb">AVB</Link>
            <Link href="/barrierefreiheit">Barrierefreiheit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
