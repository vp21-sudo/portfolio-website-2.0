export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-6 dark:text-slate-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy for Try This</h1>
      <p className="text-sm dark:text-slate-200 text-gray-600">
        Effective Date: February 14, 2025
      </p>
      <p className="text-sm dark:text-slate-200 text-gray-600 mb-6">
        Last Updated: February 14, 2025
      </p>

      <p className="mb-4">
        Welcome to Try This! This Privacy Policy explains how we collect, use,
        and protect your data when you use our mobile application
        (&quotApp&quot).
      </p>
      <p className="mb-6">
        By using Try This, you agree to the terms outlined in this policy. If
        you do not agree, please refrain from using the App.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <h3 className="text-xl font-medium mt-4">
        A. Data Collected in the MVP Phase
      </h3>
      <p className="mb-4">
        At this stage (MVP phase), Try This does not collect any personal or
        sensitive user data (such as your name, email, phone number, or
        location). We collect user-selected topics or categories of interest,
        which are stored locally on your device. This data is used to generate
        personalized activity recommendations using AI.
      </p>

      <h3 className="text-xl font-medium mt-4">
        B. Data We May Collect in Future Versions
      </h3>
      <p className="mb-4">
        In the future, we may collect the following information to improve
        personalization and enhance user experience:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Personal Information (Optional):</strong> Username, Email, or
          Mobile Number (for account creation and login).
        </li>
        <li>
          <strong>Location Data (Not Collected in MVP):</strong> We may request
          access to your location *only* to enhance personalized activity
          recommendations. Location data will be processed locally on your
          device and will *never* be shared with any third parties.
        </li>
        <li>
          <strong>User Preferences:</strong> Topics or categories of interest
          that you select in the App.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. How We Use Your Data
      </h2>
      <table className="w-full border border-gray-300 mb-6">
        <thead>
          <tr className=" dark:bg-slate-800 bg-gray-100">
            <th className="border p-2 text-left">Type of Data</th>
            <th className="border p-2 text-left">Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">User Preferences (topics)</td>
            <td className="border p-2">
              To provide AI-generated activity recommendations using Google
              Gemini.
            </td>
          </tr>
          <tr>
            <td className="border p-2">Location Data (future)</td>
            <td className="border p-2">
              To improve personalized recommendations based on your local
              environment.
            </td>
          </tr>
          <tr>
            <td className="border p-2">Email / Mobile (future)</td>
            <td className="border p-2">
              To enable account creation and secure login.
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. Data Storage and Security
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          Currently, Try This does not store any personal data. User preferences
          are stored locally on the device.
        </li>
        <li>
          If we introduce user accounts in the future, your data will be
          securely stored using encryption and industry-standard security
          practices.
        </li>
        <li>
          Location data (if collected in the future) will be used only for
          personalization and not stored permanently.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        4. Third-Party Services
      </h2>
      <p className="mb-4">
        We use Google&aposs Gemini AI to generate activity recommendations based
        on your selected preferences.
      </p>
      <p className="mb-4">
        No personally identifiable data (name, email, location) is shared with
        Gemini AI. Only user-selected topics are passed to the AI model for
        recommendation generation.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Right to Access:</strong> You can request to see the data we
          have about you (if any).
        </li>
        <li>
          <strong>Right to Modify:</strong> You can update your preferences
          anytime.
        </li>
        <li>
          <strong>Right to Delete:</strong> If account creation is implemented
          in the future, you can request account deletion.
        </li>
      </ul>
      <p className="mb-4">
        Currently, as we do not store personal data, no additional action is
        required.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        6. Changes to This Privacy Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time to reflect new
        features or legal requirements. You will be notified in the App if any
        major changes occur. The latest version will always be available in the
        App settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p className="mb-6">
        For any questions regarding this Privacy Policy, you can reach us at:
      </p>
      <p className="font-medium">
        Email:{" "}
        <a href="mailto:vishwaprasad11@gmail.com" className="text-blue-500">
          vishwaprasad11@gmail.com
        </a>
      </p>
    </div>
  );
}
