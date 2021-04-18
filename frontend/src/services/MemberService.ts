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

  async createMember(name: string, website: string) {
    try {
      const payload = { name, website };
      await fetch(`${BASE_API_URL}/members`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error(err);
      throw new Error('An error ocurred when creating member')
    }
  }
}

export default new MemberService();
