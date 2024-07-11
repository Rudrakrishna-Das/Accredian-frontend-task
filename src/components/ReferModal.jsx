import { useState } from "react";

const back = "https://accredian-backend-task-1-brgg.onrender.com";
const ReferModal = ({ onClose }) => {
  const [referrerName, setReferrerName] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [msgSent, setMsgSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (referrerName.trim().length === 0) {
      setError("Referrer name is required");
      setLoading(false);
      return;
    }
    if (refereeName.trim().length === 0) {
      setError("Referee name is required");
      setLoading(false);
      return;
    }
    if (refereeEmail.trim().length === 0) {
      setError("Referee email is required");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${back}/api/referrals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          referrerName,
          refereeName,
          refereeEmail,
        }),
      });
      const data = await res.json();
      if (!data.sent) {
        throw new Error(data.sent);
      }
      setMsgSent(data.sent);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        {loading && !msgSent ? (
          <p>Loading...</p>
        ) : !loading && msgSent ? (
          <>
            <p> Message Sent</p>{" "}
            <button
              className="mr-4 px-4 py-2 border border-gray-300 bg-blue-500 text-white rounded-lg"
              onClick={onClose}
            >
              Close
            </button>{" "}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6">Refer a Course</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Referrer Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  value={referrerName}
                  onChange={(e) => setReferrerName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Referee Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  value={refereeName}
                  onChange={(e) => setRefereeName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Referee Email
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-2"
                  value={refereeEmail}
                  onChange={(e) => setRefereeEmail(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 px-4 py-2 border border-gray-300 rounded-lg"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ReferModal;
