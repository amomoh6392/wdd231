const params = new URLSearchParams( window.location.search);

const fullname = params.get("fullname");

const email = params.get("email");

const subject = params.get("subject");

const message =
    params.get("message");

const details = document.querySelector("#submissionDetails");

details.innerHTML = `
    <h2>Submitted Information</h2>
    <p><strong>Name:</strong> ${fullname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong> ${message}</p>
`;