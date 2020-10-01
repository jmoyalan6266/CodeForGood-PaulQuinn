const form = document.getElementById("contactForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const phone = e.target.phone.value;
  const name = e.target.name.value;
  try {
    const res = await fetch("https://us-central1-email-list-20c5a.cloudfunctions.net/user", {
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        "Cache-Control": "no-cache"
      },
      method: "POST",
      body: {
        "Email": email,
        "Name": name,
        "Phone": phone
      }
    })
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
})