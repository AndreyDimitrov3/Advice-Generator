const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  document.querySelector(".id").innerHTML = `Advice #${data.slip.id}`
  document.querySelector(".advice").innerHTML = `"${data.slip.advice}"`
}

document.getElementById('button').addEventListener('click', fetchAdvice)