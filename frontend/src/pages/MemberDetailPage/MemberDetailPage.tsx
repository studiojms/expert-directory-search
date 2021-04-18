import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MemberService from '../../services/MemberService';
import { Member } from '../../types';

type PageParams = {
  id: string;
};

function MemberDetailPage() {
  const { id } = useParams<PageParams>();
  const [member, setMember] = useState<Member | null>(null);

  useEffect(() => {
    (async () => {
      const data = await MemberService.getMemberById(id);
      if (data) {
        setMember(data as Member);
      } else {
        setMember(null);
      }
    })();
  }, [id]);

  return (
    <>
      <h3>Member Details</h3>
      {member?.name}
    </>
  );
}

export default MemberDetailPage;
