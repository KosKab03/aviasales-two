import classTicket from '../ticket-list/ticket-list.module.scss';
import { ticketDataConversion } from '../../helpers/helpers';

import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Ticket({ item }) {
  const { price, carrier, segments } = item;
  const newSegments = ticketDataConversion(segments);

  return (
    <article className={classTicket.ticket}>
      <header className={classTicket.header}>
        {`${new Intl.NumberFormat('ru-RU').format(price)} ₽`}
        <img alt={`логотип авиакомпании с кодом iata ${carrier}`} src={`https://pics.avs.io/99/36/${carrier}.png`} />
      </header>
      <aside className={classTicket.block}>
        {newSegments.map((el) => (
          <ul key={uuidv4()} className={classTicket.info}>
            <li>{el.origin}</li>
            <li>В пути</li>
            <li>{el.stops !== 0 ? `${el.stops} пересадки` : 'прямой рейс'}</li>
            <li>{el.date}</li>
            <li>{el.duration}</li>
            <li>{el.cityStops}</li>
          </ul>
        ))}
      </aside>
    </article>
  );
}

export default Ticket;
