function getLinkProps(href) {
  if (!href || href.startsWith("mailto:")) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noopener noreferrer",
  };
}

function ContactSection({ entries }) {
  return (
    <div className="cv-grid">
      <article className="cv-card">
        <div className="cv-contact">
          {entries.map((entry) => (
            <p key={`${entry.label}-${entry.value}`}>
              <strong>{entry.label}</strong>:{" "}
              {entry.href ? (
                <a href={entry.href} {...getLinkProps(entry.href)}>
                  {entry.value}
                </a>
              ) : (
                entry.value
              )}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}

function CardSection({ cards }) {
  return (
    <div className="cv-grid">
      {cards.map((card) => (
        <article className="cv-card" key={`${card.title}-${card.meta ?? ""}`}>
          <h3>{card.title}</h3>
          {card.meta ? <p className="cv-meta">{card.meta}</p> : null}
          {card.subtitle ? <p className="cv-subtitle">{card.subtitle}</p> : null}
          {card.bullets ? (
            <ul className="cv-list">
              {card.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          {card.links?.length ? (
            <div className="cv-link-row">
              {card.links.map((link) => (
                <a key={link.href} href={link.href} {...getLinkProps(link.href)}>
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function TableSection({ columns, rows }) {
  return (
    <div className="cv-grid">
      <article className="cv-card">
        <div className="cv-table">
          <div className="cv-table-row cv-table-head">
            {columns.map((col) => (
              <div key={col}>{col}</div>
            ))}
          </div>
          {rows.map((row) => (
            <div className="cv-table-row" key={row.join("-")}>
              {row.map((cell, index) => (
                <div key={`${columns[index]}-${cell}`}>
                  <span className="cv-cell-label">{columns[index]}: </span>
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

export default function PortfolioSection({ sectionId, section }) {
  return (
    <section id={sectionId} className="section cv-section">
      <h2>{section.title}</h2>
      {section.type === "contact" ? <ContactSection entries={section.entries} /> : null}
      {section.type === "cards" ? <CardSection cards={section.cards} /> : null}
      {section.type === "table" ? (
        <TableSection columns={section.columns} rows={section.rows} />
      ) : null}
    </section>
  );
}
