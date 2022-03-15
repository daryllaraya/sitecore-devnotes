// OPEN TAB

let openTab = (evt, tabName) => {
  let i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName('tab-content');

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
    tabContent[i].classList.add('fadeIn');
  }

  tabLinks = document.getElementsByClassName('tab-links');
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace('active', '');
  }

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

  // INNER OPEN TAB

  let innerOpenTab = (evt, tabName) => {
  let i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName('inner-tab-content');

  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
    tabContent[i].classList.add('fadeIn');
  }

  tabLinks = document.getElementsByClassName('inner-tab-links');
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace('active', '');
  }

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
}