import { useState } from 'react';
import { useHistory } from 'react-router';
import MemberService from '../../services/MemberService';

function CreateMemberPage() {
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [showError, setShowError] = useState(false);
  const history = useHistory();

  const handleCreateMember = async () => {
    try {
      await MemberService.createMember(name, website);
      navigateToList();
    } catch (err) {
      console.error(err);
      setShowError(true);
    }
  };

  const navigateToList = () => {
    history.push('/');
  };

  return (
    <>
      <h3>Create Member</h3>
      <form className="app-form">
        <fieldset>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ex: John Doe"
              value={name || ''}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              placeholder="Ex: http://www.google.com"
              value={website || ''}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="action-control">
            <button type="button" className="app-btn-cancel" onClick={navigateToList}>
              Cancel
            </button>

            <button
              type="button"
              className="app-btn-primary"
              disabled={!(name && website)}
              onClick={handleCreateMember}
            >
              Save
            </button>
          </div>
        </fieldset>
        {showError && (
          <div className="mt--20 app-error-message" onClick={() => setShowError(false)}>
            There was an error when saving data. Please try again.
          </div>
        )}
      </form>
    </>
  );
}

export default CreateMemberPage;
