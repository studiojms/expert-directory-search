import { Link } from 'react-router-dom';
import { Member } from '../../types';

interface Props extends Member {
  className?: string;
}

/**
 * Show details of a member (full information)
 *
 * @param {string} className classes for styling the component
 * @param {string} name member name
 * @param {string} websiteUrl member website URL
 * @param {string} shortenedUrl member shortened website URL
 * @param {array} headings list of headings found in the member website
 * @param {array} friends friends connected to the member
 */
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
