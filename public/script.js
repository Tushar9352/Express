document.addEventListener('DOMContentLoaded', () => {
    const profileCard = document.querySelector('.profile-card');
    const modal = createModal();
    document.body.appendChild(modal);
  
    profileCard.addEventListener('click', () => {
      const username = document.querySelector('.profile-card h2').textContent;
      const bio = document.querySelector('.profile-card p').textContent;
      const profileImage = document.querySelector('.profile-card img').src;
      const postsCount = document.querySelectorAll('.post-item').length;
  
      updateModalContent(modal, username, bio, profileImage, postsCount);
      showModal(modal);
    });
  });
  
  function createModal() {
    const modal = document.createElement('div');
    modal.className = 'modal hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center';
    modal.innerHTML = `
      <div class="modal-content bg-white p-6 rounded-lg max-w-md w-full">
        <span class="close text-2xl font-bold float-right cursor-pointer">&times;</span>
        <img class="modal-profile-image w-24 h-24 rounded-full mx-auto mb-4" src="" alt="Profile Picture">
        <h2 class="modal-username text-xl font-bold text-center mb-2"></h2>
        <p class="modal-bio text-center text-gray-600 mb-4"></p>
        <p class="modal-posts-count text-center font-bold"></p>
      </div>
    `;
  
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => hideModal(modal));
  
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        hideModal(modal);
      }
    });
  
    return modal;
  }
  
  function updateModalContent(modal, username, bio, profileImage, postsCount) {
    modal.querySelector('.modal-profile-image').src = profileImage;
    modal.querySelector('.modal-username').textContent = username;
    modal.querySelector('.modal-bio').textContent = bio;
    modal.querySelector('.modal-posts-count').textContent = `${postsCount} posts`;
  }
  
  function showModal(modal) {
    modal.classList.remove('hidden');
  }
  
  function hideModal(modal) {
    modal.classList.add('hidden');
  }
  
  