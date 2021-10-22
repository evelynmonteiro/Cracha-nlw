const linksSocialMedia = {
    github: "evelynmonteiro",
    youtube: "channel/UCkfiBrXckgbU8UeV2TFFyqQ",
    facebook: "evelyn.silvasantanamonteiro",
    instagram: "evelynsilmonteiro",
    twitter: "Evelyn39310366"
}

function changeSocialMediaLinks(){

    for(let li of socialLinks.children){
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
        
    }
}

changeSocialMediaLinks()

function getGithubProfileInfos(){
    const url = `http://api.github.com/users/${linksSocialMedia.github}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
