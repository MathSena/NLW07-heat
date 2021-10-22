const LinksSocialMedia = {
  github: 'mathsena',
  youtube: '',
  facebook: '',
  instagram: 'itsmathsena',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

/* Pegando informações do GitHub */

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json()) // Pegando a url através do Fetch, jogando na promise para que transforme a resposta em um JSON
    .then(data => {
      // Pegando as informações e substituindo no DOM
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
