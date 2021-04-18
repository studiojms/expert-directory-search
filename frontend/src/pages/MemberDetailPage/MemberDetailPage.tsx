import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import MemberDetail from '../../components/MemberDetail/MemberDetail';
import TopicSearch from '../../components/TopicSearch/TopicSearch';
import MemberService from '../../services/MemberService';
import { Member } from '../../types';

type PageParams = {
  id: string;
};

function MemberDetailPage() {
  const { id } = useParams<PageParams>();
  const history = useHistory();
  const [member, setMember] = useState<Member | null>(null);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState<any>([]);

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

  const onSearch = async (search: string) => {
    const data = await MemberService.searchTerm(id, search);
    if (data?.length) {
      setSearchResult(data);
    } else {
      setSearchResult([]);
    }
  };

  return (
    <>
      <h3>Member Details</h3>
      <button className="mt--20 link" onClick={() => history.goBack()}>
        <span>&lt;</span> Go back
      </button>
      <main className="app-details">
        <MemberDetail {...(member as Member)} className="full-width" />
        <TopicSearch
          className="full-width"
          searchText={search}
          onSearchTextChange={(val) => setSearch(val)}
          onSearch={() => onSearch(search)}
          searchResult={searchResult}
        />
      </main>
    </>
  );
}

export default MemberDetailPage;
