

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from refreshing the page

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value.replace(/\D/g, ''); // Remove non-numeric characters
  const message = document.getElementById('message').value;

  // Check if phone number is valid (at least 10 digits)
  if (phone.length < 10) {
    alert('Please enter a valid phone number in international format (e.g., 12345678900 for +1-234-567-8900)');
    return;
  }

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

  // Debugging: Log the captured values
  console.log('Captured Phone:', phone);
  console.log('Encoded Message:', encodedMessage);

  // Construct the WhatsApp API URL
  const whatsappLink = `https://wa.me/${phone}?text=${encodedMessage}`;
  console.log('WhatsApp Link:', whatsappLink); // Log the final link

  // Open the WhatsApp link
  window.open(whatsappLink, '_blank');
});





  