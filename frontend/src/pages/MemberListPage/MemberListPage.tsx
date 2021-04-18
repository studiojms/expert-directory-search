import { useEffect, useState } from 'react';

import MemberList from '../../components/MemberList/MemberList';
import MemberService from '../../services/MemberService';
import { Member } from '../../types';

function MemberListPage() {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    (async () => {
      const data = await MemberService.listMembers();
      if (data) {
        setMembers(data as Member[]);
      } else {
        setMembers([]);
      }
    })();
  }, []);

  return (
    <>
      <h3>Members</h3>
      <MemberList members={members} />
    </>
  );
}

export default MemberListPage;
