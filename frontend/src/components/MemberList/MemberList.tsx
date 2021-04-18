import { Member } from '../../types';
import Card from '../Card/Card';

type Props = {
  members: Member[];
};

function MemberList({ members }: Props) {
  return (
    <div className="app-grid" role="list">
      {members.map((member, idx) => (
        <Card
          key={member.id || idx}
          title={member.name}
          url={member.shortenedUrl}
          totalFriends={member.friends?.length || 0}
        />
      ))}
      {members.length === 0 && <div className="app-empty-data">No data was found</div>}
    </div>
  );
}

export default MemberList;
