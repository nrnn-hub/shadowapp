export const metadata = {
  title: "Shadow App",
  description: "My Supabase + Vercel App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
