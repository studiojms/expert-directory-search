import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import MemberDetail from '../../components/MemberDetail/MemberDetail';
import MemberService from '../../services/MemberService';
import { Member } from '../../types';

type PageParams = {
  id: string;
};

function MemberDetailPage() {
  const { id } = useParams<PageParams>();
  const history = useHistory();
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
      <button className="mt--20 link" onClick={() => history.goBack()}>
        <span>&lt;</span> Go back
      </button>
      <MemberDetail {...(member as Member)} />
    </>
  );
}

export default MemberDetailPage;
