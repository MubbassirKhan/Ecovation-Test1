import adt from '../assets/clients/adt.png';
import alphadyne from '../assets/clients/alphadyne.jpeg';
import enfinity from '../assets/clients/enfinity.jpg';
import sears from '../assets/clients/sears.jpeg';
import ukg from '../assets/clients/ukg.jpeg';
import client1 from '../assets/clients/client-1.png';
import client2 from '../assets/clients/client-2.png';
import client3 from '../assets/clients/client-3.png';

const CLIENT_LOGOS = [
  ['ADT', adt],
  ['Alphadyne', alphadyne],
  ['Enfinity', enfinity],
  ['Sears', sears],
  ['UKG', ukg],
  ['Client 1', client1],
  ['Client 2', client2],
  ['Client 3', client3],
];

const LIGHT_BACKGROUND_LOGOS = new Set(['Alphadyne', 'Sears', 'UKG']);

export default function ClientMarquee({ className = '' }) {
  return (
    <div className={`client-marquee ${className}`.trim()} aria-label="Ecovation clients">
      <div className="client-marquee__track">
        {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map(([name, src], index) => (
          <div
            className={`client-marquee__item${LIGHT_BACKGROUND_LOGOS.has(name) ? ' client-marquee__item--light' : ''}`}
            key={`${name}-${index}`}
            aria-hidden={index >= CLIENT_LOGOS.length}
          >
            <img
              src={src}
              alt={index >= CLIENT_LOGOS.length ? '' : name}
              loading="eager"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
