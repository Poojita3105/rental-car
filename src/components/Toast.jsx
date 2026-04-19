import { useEffect } from "react";

const Toast = ({ car, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="toast-wrap">
      <div style={{ fontSize: "1rem", marginBottom: 4 }}>✅ Booking Request Sent!</div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "var(--gold)", fontWeight: 400 }}>
        {car.name} — our team will contact you shortly.
      </div>
    </div>
  );
};

export default Toast;