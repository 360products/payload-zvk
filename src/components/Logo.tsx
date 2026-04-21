type LogoProps = { variant?: 'dark' | 'light'; height?: number };

export default function Logo({ variant = 'dark', height = 44 }: LogoProps) {
  const src = variant === 'light' ? '/logo-zvk-light.png' : '/logo-zvk.png';
  return <img src={src} alt="ZVK Steinmetz VVaG" style={{ height, width: 'auto', display: 'block' }} />;
}
