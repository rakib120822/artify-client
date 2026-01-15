import { useState } from "react";

const CopyAdminCredentials = () => {
  const [copied, setCopied] = useState(false);

  const adminCredentials = `
Admin Email: jisan@gmail.com
Password: Rakib1234
`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(adminCredentials);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        onClick={handleCopy}
        className="btn bg-green-400 text-white w-full"
      >
        {copied ? "Copied ✅" : "Copy Admin Credentials"}
      </button>

      <p className="text-sm text-gray-500 text-center w-full">
        Click to copy admin login details
      </p>
    </div>
  );
};

export default CopyAdminCredentials;
