$("#byob-form").submit(function (event) {
  event.preventDefault();
  const email = $('#email').val()
  const appName = $('#appName').val()
  console.table({
    email,
    appName
  });
  authenticateUser(email, appName);
});


const authenticateUser = async (email, appName) => {
  try {
    const response = await fetch('/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        appName
      })
    })
    const authResponse = await response.json();
    if (response.status === 201) {
      $("#byob-form").after('<p>You are authorized!</p>')
    } else {
      $("#byob-form").after(`<p>You are NOT authorized!</p> ${authResponse}`)
    }
  } catch (err) {
    return 'Nope'
  }
}