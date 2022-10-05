document.addEventListener('DOMContentLoaded', () => {
  const markBtn = document.querySelector('.div-notifications-header > button');
  
  markBtn.addEventListener('click', (e) => {
    const unreadNotifications = document.getElementsByClassName('unread');
    const copiedArrUnreadNotis = Array.from(unreadNotifications);
    e.preventDefault();

    for (let i = 0; i < copiedArrUnreadNotis.length; i++) {
      copiedArrUnreadNotis[i].classList.remove('unread');
    }
  });
});