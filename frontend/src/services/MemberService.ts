import { Member } from '../types';

const BASE_API_URL = 'http://localhost:8080';

class MemberService {
  async listMembers(): Promise<Member[] | undefined> {
    try {
      const response = await fetch(`${BASE_API_URL}/members`);
      const data = await response.json();
      return data as Member[];
    } catch (err) {
      console.error(err);
    }
  }
}

export default new MemberService();
