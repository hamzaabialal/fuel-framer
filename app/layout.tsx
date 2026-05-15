export const metadata = {
  title: 'Fuel - Premium Agency & Portfolio',
  description: 'Fuel, a premium agency framer template.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
