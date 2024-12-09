import './globals.css'

export const metadata = {
  title: "New Home",
  description: "Welcome to the New Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>New Home</title>
        <meta content="New Home" property="og:title" />
        <meta content="New Home" property="twitter:title" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        {/* <link rel="stylesheet" href="/globals.css" /> */}
        <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
        <link href="/css/ufund-c798bf.webflow.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <link href="/images/favicon.jpg" rel="shortcut icon" type="image/x-icon" />
        <link href="/images/webclip.jpg" rel="apple-touch-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
