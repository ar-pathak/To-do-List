import { FaQuestionCircle, FaEnvelope, FaBook, FaHeadset } from "react-icons/fa";

const Help = () => {
  return (
    <div className="w-full h-full p-6 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <FaQuestionCircle className="text-orange-500" /> Help & Support
        </h2>

        {/* Quick Help Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="p-6 border rounded-xl hover:shadow-lg transition cursor-pointer">
            <FaBook className="text-3xl text-orange-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Documentation</h3>
            <p className="text-gray-600 text-sm">
              Learn how to use the dashboard effectively with our step-by-step documentation.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition cursor-pointer">
            <FaHeadset className="text-3xl text-orange-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
            <p className="text-gray-600 text-sm">
              Need assistance? Our support team is here to help you 24/7 with your queries.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition cursor-pointer">
            <FaEnvelope className="text-3xl text-orange-500 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm">
              Send us an email at <span className="text-orange-500">support@dashboard.com</span>.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                How can I reset my password?
              </summary>
              <p className="text-gray-600 mt-2">
                Go to the “Settings” page → “Security” tab and click on “Change Password”.
              </p>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                How do I create a new task?
              </summary>
              <p className="text-gray-600 mt-2">
                Navigate to “My Tasks” and click the “+ New Task” button to create one easily.
              </p>
            </details>

            <details className="border rounded-lg p-4">
              <summary className="font-medium cursor-pointer">
                Can I customize my dashboard theme?
              </summary>
              <p className="text-gray-600 mt-2">
                Yes! Go to “Settings” → “Appearance” to switch between themes or colors.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
