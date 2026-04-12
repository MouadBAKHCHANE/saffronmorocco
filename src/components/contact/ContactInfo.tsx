import { CONTACT_INFO } from "@/lib/constants";

export default function ContactInfo() {
  return (
    <div className="space-y-10">
      {/* Location */}
      <div>
        <p className="overline mb-3 text-burgundy">Location</p>
        <address className="not-italic leading-relaxed text-text-secondary">
          {CONTACT_INFO.address.map((line, i) => (
            <span key={i}>
              {line}
              {i < CONTACT_INFO.address.length - 1 && <br />}
            </span>
          ))}
        </address>
      </div>

      {/* Email */}
      <div>
        <p className="overline mb-3 text-burgundy">Email</p>
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="text-text-secondary transition-colors hover:text-burgundy"
        >
          {CONTACT_INFO.email}
        </a>
      </div>

      {/* Phone */}
      <div>
        <p className="overline mb-3 text-burgundy">Phone</p>
        <a
          href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
          className="block text-text-secondary transition-colors hover:text-burgundy"
        >
          {CONTACT_INFO.phone}
        </a>
      </div>

      {/* WhatsApp */}
      <div>
        <p className="overline mb-3 text-burgundy">WhatsApp</p>
        <a
          href={CONTACT_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary transition-colors hover:text-burgundy"
        >
          Message us on WhatsApp
        </a>
      </div>
    </div>
  );
}
