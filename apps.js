
  function createNotificationElement(errorMessage) {
    const notification = document.createElement('div');
    notification.className = 'error-notification';
    notification.innerText = errorMessage;
  
    const closeButton = document.createElement('button');
    closeButton.className = 'error-notification__close';
    closeButton.innerText = 'X';
    closeButton.onclick = () => {
      notification.remove();
    };
  
    notification.appendChild(closeButton);
    return notification;
  }
function showErrorNotification(errorMessage) {
  const notification = document.createElement('div');
  notification.innerText = errorMessage;
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.backgroundColor = '#8B0000'; // Change the background color to dark red
  notification.style.color = '#ffffff';
  notification.style.padding = '15px';
  notification.style.borderRadius = '5px';
  notification.style.fontSize = '16px';
  notification.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)';
  notification.style.zIndex = 10000;

  const closeButton = document.createElement('button');
  closeButton.innerText = 'X';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.background = 'transparent';
  closeButton.style.border = 'none';
  closeButton.style.color = '#ffffff';
  closeButton.style.fontSize = '14px';
  closeButton.style.fontWeight = 'bold';
  closeButton.style.cursor = 'pointer';
  closeButton.onclick = () => {
    notification.remove();
  };

  notification.appendChild(closeButton);
  document.body.appendChild(notification);

  // Удалить уведомление через 5 секунд
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

  
    
   