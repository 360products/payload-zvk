'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, Fragment } from 'react';
import Logo from './Logo';

const NAV_ITEMS = [
  {
    label: 'Tarifliche Zusatzrente',
    to: '/vorsorge/pflichtbeihilfe',
    children: [
      { label: 'Pflichtbeihilfe', to: '/vorsorge/pflichtbeihilfe' },
      { label: 'Vergleich', to: '/vorsorge/vergleich' },
    ],
  },
  { label: 'ZukunftStein', to: '/vorsorge/zukunftstein', children: null },
  { label: 'Über die ZVK', to: '/ueber-uns', children: null },
  {
    label: 'Service',
    to: '/service',
    children: [
      { label: 'Service-Übersicht', to: '/service' },
      { label: 'Meldeportal', to: '/service/meldeportal' },
      { label: 'FAQ / ZVK A–Z', to: '/service/faq' },
      { label: 'Downloads', to: '/service/downloads' },
      { label: 'Kontakt', to: '/service/kontakt' },
    ],
  },
];

const ZIELGRUPPEN = [
  { label: 'Für Betriebe', to: '/fuer-betriebe' },
  { label: 'Für Versicherte', to: '/fuer-versicherte' },
  { label: 'Für Rentner', to: '/fuer-rentner' },
];

interface CmsPage { title: string; navLabel: string; slug: string }

export default function Nav({ cmsPages = [] }: { cmsPages?: CmsPage[] }) {
  const route = usePathname() || '/';
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [route]);

  const isActive = (to: string) => {
    if (to === '/') return route === '/';
    return route === to || route.startsWith(to + '/');
  };

  return (
    <header className={'zvk-nav' + (scrolled ? ' zvk-nav--scrolled' : '')}>
      <div className="zvk-nav__top">
        <div className="zvk-container zvk-nav__top-inner">
          <Link href="/" className="zvk-nav__logo" aria-label="Zur Startseite">
            <Logo />
          </Link>
          <div className="zvk-nav__zg" aria-label="Zielgruppen">
            <span className="zvk-nav__zg-label">ZVK für</span>
            <nav className="zvk-nav__zg-pill">
              {ZIELGRUPPEN.map((z, i) => (
                <Fragment key={z.to}>
                  <Link
                    href={z.to}
                    className={'zvk-nav__zg-link' + (isActive(z.to) ? ' is-active' : '')}
                  >
                    {z.label.replace('Für ', '')}
                  </Link>
                  {i < ZIELGRUPPEN.length - 1 && (
                    <span className="zvk-nav__zg-sep" aria-hidden>|</span>
                  )}
                </Fragment>
              ))}
            </nav>
          </div>
          <button
            className="zvk-nav__burger"
            aria-label="Menü öffnen"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className="zvk-nav__bar">
        <div className="zvk-container zvk-nav__bar-inner">
          <nav className="zvk-nav__primary" aria-label="Hauptnavigation">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.to}
                className="zvk-nav__item"
                onMouseEnter={() => item.children && setOpenMenu(item.to)}
                onMouseLeave={() => item.children && setOpenMenu(null)}
              >
                <Link
                  href={item.to}
                  className={'zvk-nav__link' + (isActive(item.to) ? ' is-active' : '')}
                >
                  {item.label}
                  {item.children && <span className="zvk-nav__chev" aria-hidden>›</span>}
                </Link>
                {item.children && openMenu === item.to && (
                  <div className="zvk-nav__submenu">
                    {item.children.map((c) => (
                      <Link key={c.to} href={c.to} className="zvk-nav__sublink">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {cmsPages.length > 0 && (
              <div
                className="zvk-nav__item"
                onMouseEnter={() => setOpenMenu('__cms__')}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <span className={'zvk-nav__link' + (openMenu === '__cms__' ? ' is-active' : '')}>
                  Weitere Seiten <span className="zvk-nav__chev" aria-hidden>›</span>
                </span>
                {openMenu === '__cms__' && (
                  <div className="zvk-nav__submenu">
                    {cmsPages.map((p) => (
                      <Link key={p.slug} href={`/${p.slug}`} className="zvk-nav__sublink">
                        {p.navLabel}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </nav>
          <div className="zvk-nav__cta">
            <Link href="/service/kontakt" className="zvk-btn zvk-btn--bar">
              <span className="arrow">→</span> Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="zvk-nav__mobile">
          <div className="zvk-nav__mobile-section">ZVK für</div>
          {ZIELGRUPPEN.map((z) => (
            <Link key={z.to} href={z.to} className="zvk-nav__mobile-top">{z.label}</Link>
          ))}
          <div className="zvk-nav__mobile-section">Themen</div>
          {NAV_ITEMS.map((item) => (
            <div key={item.to} className="zvk-nav__mobile-group">
              <Link href={item.to} className="zvk-nav__mobile-top">{item.label}</Link>
              {item.children && item.children.map((c) => (
                <Link key={c.to} href={c.to} className="zvk-nav__mobile-sub">— {c.label}</Link>
              ))}
            </div>
          ))}
          {cmsPages.length > 0 && (
            <>
              <div className="zvk-nav__mobile-section">Weitere Seiten</div>
              {cmsPages.map((p) => (
                <Link key={p.slug} href={`/${p.slug}`} className="zvk-nav__mobile-top">{p.navLabel}</Link>
              ))}
            </>
          )}
          <Link href="/service/kontakt" className="zvk-btn zvk-btn--primary" style={{ marginTop: 16 }}>
            Kontakt aufnehmen
          </Link>
        </div>
      )}
    </header>
  );
}
