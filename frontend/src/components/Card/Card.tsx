type Props = {
  id: string;
  title: string;
  url: string;
  totalFriends?: number;
  onClick?: (id: string) => void;
};

/**
 * Renders a card with member information
 *
 * @param {string} id member id
 * @param {string} title card title (member name)
 * @param {string} url website url
 * @param {number} totalFriends total number of friends
 * @param {func} onClick function to be executed when the card is clicked
 */
function Card({ id, title, url, totalFriends = 0, onClick }: Props) {
  return (
    <section className="app-card" role="listitem" onClick={() => onClick?.(id)}>
      <h4 className="mb--10">{title}</h4>
      <p>
        <a href={url}>Website</a>
      </p>
      <div className="mt--20">
        Friends: <strong role="strong">{totalFriends}</strong>
      </div>
    </section>
  );
}

export default Card;
