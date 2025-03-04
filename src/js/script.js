// Trigger file input click event
function triggerFileInput() {
    document.getElementById('file-input').click();
  }
  
  // Handle profile picture change
  function changeProfilePicture(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        img.classList.add('w-20', 'h-20', 'rounded-full', 'object-cover');
        
        // Replace the "Add Photo" text with the new image
        const profileDiv = document.getElementById('profile-picture-container');
        profileDiv.innerHTML = ''; // Clear current text
        profileDiv.appendChild(img); // Add the image
  
        // Show the delete button
        document.getElementById('delete-button-container').classList.remove('hidden');
      };
      reader.readAsDataURL(file);
    }
  }
  
  // Delete the profile picture
  function deleteProfilePicture() {
    const profileDiv = document.getElementById('profile-picture-container');
    profileDiv.innerHTML = 'Add <br> Photo'; // Restore the "Add Photo" text
  
    // Hide the delete button
    document.getElementById('delete-button-container').classList.add('hidden');
  }
  