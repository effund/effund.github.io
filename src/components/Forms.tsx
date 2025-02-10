
export const Forms = () => {
  return (
    <section id="register" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Register Now</h2>
          <p className="mt-4 text-gray-500">Complete the registration form and process the payment</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Google Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Registration Form</h3>
            <iframe
              src="YOUR_GOOGLE_FORM_URL"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-lg"
            >
              Loading...
            </iframe>
          </div>

          {/* PayPal Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Payment</h3>
            <div className="aspect-video">
            <div id="donate-button-container">
              <div id="donate-button"></div>
              <script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></script>
              <script>
                PayPal.Donation.Button({
                env:'production',
                hosted_button_id:'627KTSATX9AZC',
                image: {
                src:'https://pics.paypal.com/00/s/NDQ3Zjc4MjktYTU1YS00NmNlLTg4MjUtOWNkMWZmN2E3ZjZl/file.PNG',
                alt:'Donate with PayPal button',
                title:'PayPal - The safer, easier way to pay online!',
                }
                }).render('#donate-button');
              </script>
            </div>

              {/*<iframe
                src="YOUR_PAYPAL_BUTTON_URL"
                width="100%"
                height="600"
                frameBorder="0"
                className="rounded-lg"
              >
                Loading...
              </iframe>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
