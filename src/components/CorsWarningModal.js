import { useState } from "react";

const CorsWarningModal = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
        <p className="mb-4">
          If restaurant or cart data is not visible, please install the <br />
          <strong>Allow CORS: Access-Control-Allow-Origin</strong> Chrome extension:
        </p>
        <a
          href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Install CORS Extension
        </a>
        <div className="mt-4">
          <button
            onClick={() => setShow(false)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default CorsWarningModal;
