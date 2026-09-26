import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://irwin11casino.vercel.app'
const SITE_TITLE =
  'Официальный сайт Irwin Casino — играть онлайн в казино через рабочее зеркало'
const SITE_DESCRIPTION =
  'Официальный сайт Irwin Casino — играть онлайн в казино через рабочее зеркало. Приветственный бонус новым игрокам, тысячи слотов, live-дилеры, быстрый вывод средств 24/7. Регистрация занимает минуту.'
const SITE_KEYWORDS =
  'irwin casino, irwin casino официальный, irwin casino официальный сайт, irwin casino зеркало, ирвин казино, ирвин казино официальный, ирвин казино официальный сайт, ирвин казино зеркало, ирвин казино зеркало рабочее, irwin casino играть, ирвин казино онлайн, itgwin казино, ирвин казино играть'

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: 'Irwin Casino' }],
  creator: 'Irwin Casino',
  publisher: 'Irwin Casino',
  applicationName: 'Irwin Casino',
  generator: 'Next.js',
  category: 'online casino',
  classification: 'online casino, gambling, slots',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'ru-RU': SITE_URL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Irwin Casino',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Irwin Casino — официальный сайт',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
  },
  icons: {
    icon: [
      { url: '/icon', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon',
  },
  other: {
    'theme-color': '#0a0e1a',
    'color-scheme': 'dark',
    'format-detection': 'telephone=no',
    'HandheldFriendly': 'True',
    'MobileOptimized': '320',
    'rating': 'adult',
    'distribution': 'global',
    'revisit-after': '1 day',
    'yandex-verification': '',
    'google-site-verification': '',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0e1a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru-RU">
      <head>
        <meta name="yandex-verification" content="44c40e15e60773ae" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Irwin Casino" />
        <meta name="application-name" content="Irwin Casino" />
        <meta name="msapplication-TileColor" content="#0a0e1a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="rating" content="adult" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 day" />
        <meta name="language" content="Russian" />
        <meta name="geo.region" content="RU" />
        <meta name="geo.placename" content="Russia" />
        <meta name="author" content="Irwin Casino" />
        <meta name="copyright" content="Irwin Casino" />
        <meta name="designer" content="Irwin Casino" />
        <meta name="owner" content="Irwin Casino" />
        <meta name="url" content={SITE_URL} />
        <meta name="identifier-URL" content={SITE_URL} />
        <meta name="category" content="online casino" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="pagename" content="Irwin Casino — официальный сайт" />
        <meta name="page-topic" content="Онлайн казино Irwin Casino" />
        <meta name="page-type" content="Главная страница онлайн казино" />
        <meta name="audience" content="all" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="yandexbot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta property="og:site_name" content="Irwin Casino" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Irwin Casino — официальный сайт" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@irwincasino" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
        <meta name="twitter:image:alt" content="Irwin Casino — официальный сайт" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" hrefLang="ru-RU" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
        <link rel="icon" href="/icon" sizes="32x32" type="image/png" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon" />
        <link rel="apple-touch-icon-precomposed" href="/apple-icon" />
        <link rel="mask-icon" href="/icon.svg" color="#d4af37" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="dns-prefetch" href="//irwin11casino.vercel.app" />
        <link rel="preconnect" href="https://irwin11casino.vercel.app" />
        <meta name="theme-color" content="#0a0e1a" />
        <meta name="msapplication-TileColor" content="#0a0e1a" />
        <meta name="msapplication-TileImage" content="/icon" />
        <meta name="msapplication-square70x70logo" content="/icon" />
        <meta name="msapplication-square150x150logo" content="/icon" />
        <meta name="msapplication-wide310x150logo" content="/icon" />
        <meta name="msapplication-square310x310logo" content="/icon" />
        <meta name="application-link" content={`${SITE_URL}/manifest.json`} />
        <meta name="apple-itunes-app" content="app-id=000000000" />
        <meta name="google-play-app" content="app-id=com.irwin.casino" />
        <meta name="alexaVerifyID" content="" />
        <meta name="wot-verification" content="" />
        <meta name="norton-safeweb-site-verification" content="" />
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
        <meta name="skype_toolbar_parser_compatible" content="no" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
        <meta httpEquiv="Expires" content="0" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self' https:;" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <title>{SITE_TITLE}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
