import { useState } from 'react';
import { useHistory } from 'react-router';

function CreateMemberPage() {
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const history = useHistory();

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
            <button
              type="button"
              className="app-btn-cancel"
              onClick={() => {
                history.push('/');
              }}
            >
              Cancel
            </button>

            <button type="button" className="app-btn-primary">
              Save
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default CreateMemberPage;
