type Props = {
  title: string;
  url: string;
  totalFriends?: number;
};

function Card({ title, url, totalFriends = 0 }: Props) {
  return (
    <section className="app-card">
      <h4>{title}</h4>
      <p>
        <a href={url}>Website</a>
      </p>
      <div>
        Friends: <strong role="strong">{totalFriends}</strong>
      </div>
    </section>
  );
}

export default Card;
