const newFormHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector('#blog-name').value.trim();
  ////const  description= document.querySelector('#project-funding').value.trim();
  const details = document.querySelector('#blog-desc').value.trim();

  if (details && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({description , details}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
