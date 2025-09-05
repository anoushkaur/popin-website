// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'PopIn — Make Meaningful Connections',
  description: 'PopIn connects you with the right people for meaningful conversations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
