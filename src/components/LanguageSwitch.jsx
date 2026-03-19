export default function LanguageSwitch({ language, onChange }) {
  return (
    <div className="lang-switch" aria-label="language switcher">
      <button
        type="button"
        className={language === "kor" ? "active" : ""}
        onClick={() => onChange("kor")}
      >
        KOR
      </button>
      <button
        type="button"
        className={language === "eng" ? "active" : ""}
        onClick={() => onChange("eng")}
      >
        ENG
      </button>
    </div>
  );
}
