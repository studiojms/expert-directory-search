type Props = {
  id: string;
  title: string;
  url: string;
  totalFriends?: number;
  onClick?: (id: string) => void;
};

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
