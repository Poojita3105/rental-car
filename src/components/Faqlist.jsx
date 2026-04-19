import { useState } from "react";
import { FAQS } from "../data/cars";

const FAQList = () => {
  const [open, setOpen] = useState(null);

  return (
    <div>
      {FAQS.map((f, i) => (
        <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
          <div className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
            <span>{f.q}</span>
            <span className="faq-chevron">▾</span>
          </div>
          <div className="faq-body">{f.a}</div>
        </div>
      ))}
    </div>
  );
};

export default FAQList;