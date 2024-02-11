const modeBtn=document.querySelector(".modeBtn")
const modeText=document.querySelector(".modeText")
const modeImg=document.querySelector(".modeImg")
const input=document.querySelector(".input")
const notFoundText=document.querySelector(".notFoundText")
const searchBtn=document.querySelector(".searchBtn")
const profilePic=document.querySelector(".dpImg")
const name=document.querySelector(".name")
const joinDate=document.querySelector(".joined")
const githubLink=document.querySelector(".gitLink")
const desc=document.querySelector(".desc")
const repoCount=document.querySelector(".repoCount")
const followersCount=document.querySelector(".followersCount")
const followingCount=document.querySelector(".followingCount")
const locn=document.querySelector(".locn")
const website=document.querySelector(".website")
const twitter=document.querySelector(".twitter")
const companyInfo=document.querySelector(".companyInfo")

let username="thepranaygupta"
fetchUser(username)
searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    username=input.value
    if(username==""){
        notFoundText.innerText="Empty username"
        setTimeout(() => {
            notFoundText.innerText="";
        }, 2500);
    } 
    else fetchUser(username)
})

async function fetchUser(username){
    try {
        const response=await fetch(
            `https://api.github.com/users/${username}`
            )
        const data=await response.json();
        if(data.message==="Not Found"){
            notFound(data)
        }
         else
        userInfo(data);
    } catch (error) {
        notFound(data)
    }
}

function notFound(data){
    notFoundText.innerText=data.message
    setTimeout(() => {
        notFoundText.innerText="";
    }, 2500);
}

function userInfo(data){
    profilePic.src=`${data?.avatar_url}`
    name.innerText=data?.name
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateSegment=data?.created_at.split("T").shift().split("-")
    joinDate.innerText=`joined ${dateSegment[2]} ${month[dateSegment[1] - 1]} ${dateSegment[0]}`
    githubLink.href=data?.html_url
    githubLink.innerText=`@${data?.login}`
    desc.innerText=data?.bio
    repoCount.innerText=data?.public_repos
    followersCount.innerText=data?.followers
    followingCount.innerText=data?.following
    locn.innerText=data?.location
    website.href=data?.blog
    website.innerText=data?.blog
    twitter.href=`https://twitter.com/${data?.twitter_username}`
    twitter.innerText=data?.twitter_username
    companyInfo.innerText=data?.company
}

let darkMode=false;
const root=document.documentElement.style
enableLightMode()

modeBtn.addEventListener('click',(e)=>{
    if(darkMode===false) enableDarkMode()
    else enableLightMode()
})

function enableDarkMode(){
    modeText.innerText="LIGHT"
    root.setProperty("--lm-bg", "#141D2F")
    root.setProperty("--lm-bg-content", "#1E2A47");
    root.setProperty("--lm-text", "white");
    root.setProperty("--lm-text-alt", "white");
    root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
    modeImg.src="./Images/sun-icon.svg"
    root.setProperty("--lm-icon-bg", "brightness(1000%)");
    darkMode=true
    localStorage.setItem("dark-mode", true);
}

function enableLightMode(){
    root.setProperty("--lm-bg", "#F6F8FF");
    root.setProperty("--lm-bg-content", "#FEFEFE");
    root.setProperty("--lm-text", "#4B6A9B");
    root.setProperty("--lm-text-alt", "#2B3442");
    root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
    modeText.innerText = "DARK";
    modeImg.src = "./Images/moon-icon.svg";
    darkMode = false;
    localStorage.setItem("dark-mode", false);
}

// This code checks if the user's device has a preference for dark mode
const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

// Check if there is a value for "dark-mode" in the user's localStorage
if (localStorage.getItem("dark-mode") === null) {
    // If there is no value for "dark-mode" in localStorage, check the device preference
    if (prefersDarkMode) {
        // If the device preference is for dark mode, apply dark mode properties
        enableDarkMode();
    } else {
        // If the device preference is not for dark mode, apply light mode properties
        enableLightMode();
    }
} else {
    // If there is a value for "dark-mode" in localStorage, use that value instead of device preference
    if (localStorage.getItem("dark-mode") === "true") {
        // If the value is "true", apply dark mode properties
        enableDarkMode();
    } else {
        // If the value is not "true", apply light mode properties
        enableLightMode();
    }
}