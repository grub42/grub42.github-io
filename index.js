const subjectDropdown = document.querySelector('#subject');

fetch('https://raw.githubusercontent.com/grub42/grub42.github-io/main/hass.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(subject => {
      const option = document.createElement('option');
      option.value = subject.code;
      option.text = subject.name;
      subjectDropdown.add(option);
    });
  })
  .catch(error => console.error(error));
