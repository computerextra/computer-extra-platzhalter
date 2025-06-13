export default function Home() {
  return (
    <div className="min-h-screen mx-auto bg-[url(/pexels-aiden-tieulie-2152668808-32537514.jpg)] bg-local md:bg-fixed bg-clip-border bg-origin-border bg-top md:bg-contain bg-cover bg-no-repeat rounded-2xl">
      <div className="h-full space-y-4 text-slate-200 text-center bg-foreground/40 rounded-2xl w-[90%] mx-auto pt-20 pb-20">
        <h1>Wir bauen für Sie um</h1>
        <h2>Bald erstrahlen wir im neuen Glanz.</h2>
        <p>
          Sie erreichen uns wie gewohnt telefonisch oder per Mail während
          unserer Öffnungszeiten
        </p>
        <h2>Öffnungszeiten</h2>
        <p>Montag - Freitag: 09:00 - 18:00 Uhr</p>
        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:0561601440">0561 / 60 144 0</a>
        </p>
        <p>Mail: info [at] computer-extra.de</p>
        <small>
          Foto von Aiden Tieulie:
          https://www.pexels.com/de-de/foto/umgesturzter-verkehrskegel-auf-einem-kaputten-gehweg-32537514/
        </small>
      </div>
    </div>
  );
}
