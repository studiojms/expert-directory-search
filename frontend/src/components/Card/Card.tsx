type Props = {
  title: string;
  url: string;
  totalFriends?: number;
};

function Card({ title, url, totalFriends = 0 }: Props) {
  return (
    <section className="app-card">
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
