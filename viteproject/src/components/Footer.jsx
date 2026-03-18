import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const ImpressumModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="impressum-title"
    >
      <div
        className="glass-strong max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 id="impressum-title" className="text-2xl font-bold text-white">Impressum</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="Close Impressum"
          >
            &times;
          </button>
        </div>
        <div className="text-gray-300 space-y-4 text-sm leading-relaxed">
          <div>
            <h3 className="text-white font-semibold mb-1">Angaben gem. &sect; 5 TMG</h3>
            <p>Dejvi Kacollja</p>
            <p>Germany</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Kontakt</h3>
            <p>E-Mail: Dejvikacollja@gmail.com</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Verantwortlich f&uuml;r den Inhalt gem. &sect; 55 Abs. 2 RSt</h3>
            <p>Dejvi Kacollja</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Haftungsausschluss</h3>
            <p>
              Trotz sorgf&auml;ltiger inhaltlicher Kontrolle &uuml;bernehme ich keine Haftung f&uuml;r die
              Inhalte externer Links. F&uuml;r den Inhalt der verlinkten Seiten sind ausschlie&szlig;lich
              deren Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DatenschutzModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="datenschutz-title"
    >
      <div
        className="glass-strong max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 id="datenschutz-title" className="text-2xl font-bold text-white">Datenschutzerkl&auml;rung</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="Close Privacy Policy"
          >
            &times;
          </button>
        </div>
        <div className="text-gray-300 space-y-4 text-sm leading-relaxed">
          <div>
            <h3 className="text-white font-semibold mb-1">1. Datenschutz auf einen Blick</h3>
            <p>
              Diese Website erhebt personenbezogene Daten nur im Rahmen der Kontaktaufnahme
              &uuml;ber das Kontaktformular. Die Datenverarbeitung erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">2. Verantwortliche Stelle</h3>
            <p>Dejvi Kacollja</p>
            <p>E-Mail: Dejvikacollja@gmail.com</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">3. Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
              (Name, E-Mail-Adresse, Nachricht) zur Bearbeitung der Anfrage bei uns gespeichert.
              Die Daten werden &uuml;ber den Dienst EmailJS verarbeitet. Eine Weitergabe an Dritte
              erfolgt nicht.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">4. Hosting</h3>
            <p>
              Diese Website wird &uuml;ber GitHub Pages gehostet. Beim Besuch der Website werden
              automatisch Informationen (z.B. IP-Adresse, Browsertyp) durch den Hosting-Anbieter
              erfasst. Details entnehmen Sie der Datenschutzerkl&auml;rung von GitHub.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">5. Ihre Rechte</h3>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, L&ouml;schung und Einschr&auml;nkung
              der Verarbeitung Ihrer Daten. Kontaktieren Sie uns hierf&uuml;r unter der oben
              genannten E-Mail-Adresse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [datenschutzOpen, setDatenschutzOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm py-8" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Dejvi Kacollja. {t("footer_rights")}
            </div>
            <div className="flex items-center gap-6 text-sm">
              <button
                onClick={() => setImpressumOpen(true)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Impressum
              </button>
              <button
                onClick={() => setDatenschutzOpen(true)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Datenschutz
              </button>
              <span className="text-gray-500">{t("footer_made")}</span>
            </div>
          </div>
        </div>
      </footer>

      <ImpressumModal open={impressumOpen} onClose={() => setImpressumOpen(false)} />
      <DatenschutzModal open={datenschutzOpen} onClose={() => setDatenschutzOpen(false)} />
    </>
  );
};
