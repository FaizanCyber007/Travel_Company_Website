import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUpload,
  faImage,
  faTimes,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

export default function PhotoUploadForm({ onClose }) {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    category: "destinations",
    description: "",
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [previewUrls, setPreviewUrls] = useState([]);

  const categories = [
    { id: "destinations", name: "Destinations" },
    { id: "hotels", name: "Hotels & Resorts" },
    { id: "activities", name: "Activities" },
    { id: "food", name: "Food & Dining" },
    { id: "culture", name: "Culture" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(
      (file) => file.type.startsWith("image/") && file.size <= 10 * 1024 * 1024 // 10MB limit
    );

    setSelectedFiles((prev) => [...prev, ...validFiles]);

    // Create preview URLs
    validFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrls((prev) => [...prev, e.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedFiles.length === 0) {
      alert("Please select at least one image to upload.");
      return;
    }

    setUploading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("description", formData.description);

      selectedFiles.forEach((file, index) => {
        formDataToSend.append("photos", file);
      });

      const response = await fetch("http://localhost:5002/api/gallery/upload", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert("Photos uploaded successfully!");
        onClose();
        window.location.reload(); // Refresh to show new photos
      } else {
        console.error("Upload failed:", result);
        alert(`Upload failed: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert(`Failed to upload photos: ${error.message}. Please try again.`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* File Upload Area */}
      <div className="space-y-4">
        <label className="block text-white font-medium">Select Photos</label>
        <div className="border-2 border-dashed border-dark-600 rounded-lg p-8 text-center hover:border-primary-500 transition-colors">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <FontAwesomeIcon
              icon={faCloudUpload}
              className="text-4xl text-dark-400 mb-4"
            />
            <p className="text-dark-300 mb-2">
              Click to select photos or drag and drop
            </p>
            <p className="text-sm text-dark-500">Maximum 10MB per image</p>
          </label>
        </div>

        {/* Preview Selected Images */}
        {previewUrls.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {previewUrls.map((url, index) => (
              <div key={index} className="relative group">
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm hover:bg-red-600 transition-colors"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Photo Details Form */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-white font-medium mb-2">
            Photo Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors"
            placeholder="Enter photo title"
          />
        </div>

        <div>
          <label className="block text-white font-medium mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors"
            placeholder="Where was this taken?"
          />
        </div>
      </div>

      <div>
        <label className="block text-white font-medium mb-2">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-white font-medium mb-2">
          Description (Optional)
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows="3"
          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors resize-none"
          placeholder="Tell us about this photo..."
        />
      </div>

      {/* Submit Buttons */}
      <div className="flex gap-4 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 px-6 py-3 border border-dark-600 rounded-lg text-dark-300 hover:text-white hover:border-dark-500 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={uploading || selectedFiles.length === 0}
          className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {uploading ? (
            <>
              <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faImage} />
              Upload Photos
            </>
          )}
        </button>
      </div>
    </form>
  );
}
