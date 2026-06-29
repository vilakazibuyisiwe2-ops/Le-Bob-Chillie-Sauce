<script>
    document.getElementById('submitBtn').addEventListener('click', function() {
        // Get the form field values
        const name = document.getElementById('name').value;
        const quantity = document.getElementById('quantity').value;
        const address = document.getElementById('message').value;

        // Check if required fields are filled out
        if (!name || !quantity) {
            alert('Please fill out your Name and Quantity before submitting.');
            return;
        }

        // Clean up the South African phone number format
        const phoneNumber = "27729271255"; 

        // Construct a clean, professional order message
        let textMessage = `Hello Le Bop Chillie Sauce! I would like to place an order inquiry:\n\n`;
        textMessage += `*Name:* ${name}\n`;
        textMessage += `*Quantity:* ${quantity} Bottle(s)\n`;
        if (address) {
            textMessage += `*Delivery Address/Notes:* ${address}`;
        }

        // Encode the text so spaces and emojis work safely in a web link
        const encodedMessage = encodeURIComponent(textMessage);

        // Build the final WhatsApp API link
        const whatsappUrl = `https://wa.me{phoneNumber}?text=${encodedMessage}`;

        // Redirect the user to WhatsApp
        window.open(whatsappUrl, '_blank');
    });
</script>
