import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import MemberService from '../../services/MemberService';
import { Member } from '../../types';

function MemberList() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    (async () => {
      const data = await MemberService.listMembers();
      setMembers(data as Member[]);
    })();
  }, []);

  return (
    <>
      <h3>Members</h3>
      <div className="app-grid">
        {members.map((member, idx) => (
          <Card
            key={member.id || idx}
            title={member.name}
            url={member.shortenedUrl}
            totalFriends={member.friends?.length || 0}
          />
        ))}
      </div>
    </>
  );
}

export default MemberList;
