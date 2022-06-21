// name
// height
//country
const details ={
    name:`Chisom Okereke`,
    height:`5'11'`,
    country:`Nigeria`
}

const{name,height,country}=details

const text = document.querySelector('.text')

text.innerHTML=`Name: ${name} <br><br> Height: ${height}<br><br> Country: ${country} `