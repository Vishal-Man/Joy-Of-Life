const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const items = [
  {
    key: 'insta',
    text: '@OurBeats',
    href: 'https://instagram.com',
    icon: (
      <Icon>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </Icon>
    ),
  },
  {
    key: 'phone',
    text: '1234567890',
    href: 'tel:1234567890',
    icon: (
      <Icon>
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
      </Icon>
    ),
  },
  {
    key: 'mail',
    text: 'Mail@mails.com',
    href: 'mailto:Mail@mails.com',
    icon: (
      <Icon>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </Icon>
    ),
  },
  {
    key: 'office',
    text: 'Head Office',
    icon: (
      <Icon>
        <path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </Icon>
    ),
  },
  {
    key: 'show',
    text: 'Our next show at',
    icon: (
      <Icon>
        <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
        <path d="M9 4v14M15 6v14" />
      </Icon>
    ),
  },
];

export default function ContactInfo() {
  return (
    <ul className="contact">
      {items.map(({ key, text, href, icon }) => (
        <li key={key} className={`contact__item contact__item--${key}`}>
          {icon}
          {href ? <a href={href}>{text}</a> : <span>{text}</span>}
        </li>
      ))}
    </ul>
  );
}
