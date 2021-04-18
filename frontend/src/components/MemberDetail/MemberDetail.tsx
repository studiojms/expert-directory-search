import { Link } from 'react-router-dom';
import { Member } from '../../types';

interface Props extends Member {
  className?: string
}

function MemberDetail({ className, name, websiteUrl, shortenedUrl, headings, friends }: Props) {
  return (
    <section className={`app-member-detail ${className}`}>
      <header>
        <h2>{name}</h2>
      </header>
      <div className="app-member-detail-info">
        <p>
          Website URL:{' '}
          <a href={websiteUrl} target="blank">
            {websiteUrl}
          </a>
        </p>
        <p>
          Shortened URL:{' '}
          <a href={shortenedUrl} target="blank">
            {shortenedUrl}
          </a>
        </p>
      </div>
      <div>
        <strong>Headings</strong>
        <ul className="with-bullets mt--20">
          {headings?.map((h, idx) => (
            <li key={idx} className="mb--10">
              {h}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt--20">
        <strong>Friends</strong>
        <ol className="mt--20">
          {friends?.map((friend, idx) => (
            <li key={idx} className="mb--10">
              <Link to={`/member/${friend.id}`}>{friend.name}</Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default MemberDetail;
