import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpload,
  faImage,
  faTimes,
  faCheck,
  faSpinner,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

export default function PhotoUpload() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    category: "destinations",
    tags: "",
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState({ type: "", message: "" });

  const categories = [
    { id: "destinations", name: "Destinations" },
    { id: "hotels", name: "Hotels & Resorts" },
    { id: "activities", name: "Activities" },
    { id: "food", name: "Food & Dining" },
    { id: "culture", name: "Culture" },
    { id: "nature", name: "Nature & Wildlife" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => {
      const isImage = file.type.startsWith("image/");
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB
      return isImage && isValidSize;
    });

    if (validFiles.length !== files.length) {
      setUploadStatus({
        type: "warning",
        message: "Some files were skipped. Only images under 5MB are allowed.",
      });
    }

    setSelectedFiles(validFiles);

    // Create previews
    const newPreviews = validFiles.map((file) => ({
      file,
      url: URL.createObjectURL(file),
      name: file.name,
    }));
    setPreviews(newPreviews);
  };

  const removeFile = (index) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);

    // Clean up old preview URL
    URL.revokeObjectURL(previews[index].url);

    setSelectedFiles(newFiles);
    setPreviews(newPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedFiles.length === 0) {
      setUploadStatus({
        type: "error",
        message: "Please select at least one image to upload.",
      });
      return;
    }

    setUploading(true);
    setUploadStatus({ type: "", message: "" });

    try {
      const uploadPromises = selectedFiles.map(async (file) => {
        const formDataObj = new FormData();
        formDataObj.append("photo", file);
        formDataObj.append("title", formData.title);
        formDataObj.append("description", formData.description);
        formDataObj.append("location", formData.location);
        formDataObj.append("category", formData.category);
        formDataObj.append("tags", formData.tags);

        const response = await fetch("/api/gallery/upload", {
          method: "POST",
          body: formDataObj,
        });

        if (!response.ok) {
          throw new Error(`Upload failed: ${response.statusText}`);
        }

        return response.json();
      });

      await Promise.all(uploadPromises);

      setUploadStatus({
        type: "success",
        message: `Successfully uploaded ${selectedFiles.length} image(s)!`,
      });

      // Reset form
      setFormData({
        title: "",
        description: "",
        location: "",
        category: "destinations",
        tags: "",
      });
      setSelectedFiles([]);
      setPreviews([]);

      // Clean up preview URLs
      previews.forEach((preview) => URL.revokeObjectURL(preview.url));
    } catch (error) {
      setUploadStatus({
        type: "error",
        message: error.message || "Upload failed. Please try again.",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-8">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Share Your <span className="text-gradient">Travel Photos</span>
            </h1>
            <p className="text-xl text-dark-200 mb-6">
              Upload your amazing travel photos and inspire other travelers
              around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Upload Form */}
      <section className="py-12 bg-dark-900">
        <div className="container max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="card p-8">
            {/* Status Messages */}
            {uploadStatus.message && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  uploadStatus.type === "success"
                    ? "bg-green-900/50 border border-green-700 text-green-300"
                    : uploadStatus.type === "error"
                    ? "bg-red-900/50 border border-red-700 text-red-300"
                    : "bg-yellow-900/50 border border-yellow-700 text-yellow-300"
                }`}
              >
                <FontAwesomeIcon
                  icon={
                    uploadStatus.type === "success"
                      ? faCheck
                      : uploadStatus.type === "error"
                      ? faTimes
                      : faExclamationTriangle
                  }
                />
                {uploadStatus.message}
              </div>
            )}

            {/* File Upload Area */}
            <div className="mb-8">
              <label className="block text-white font-medium mb-4">
                Select Photos *
              </label>
              <div className="border-2 border-dashed border-dark-600 rounded-lg p-8 text-center hover:border-primary-500 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="photo-upload"
                />
                <label htmlFor="photo-upload" className="cursor-pointer">
                  <div className="text-primary-400 mb-4">
                    <FontAwesomeIcon icon={faUpload} size="3x" />
                  </div>
                  <div className="text-white mb-2">
                    Click to upload photos or drag and drop
                  </div>
                  <div className="text-dark-400 text-sm">
                    PNG, JPG up to 5MB each
                  </div>
                </label>
              </div>
            </div>

            {/* Photo Previews */}
            {previews.length > 0 && (
              <div className="mb-8">
                <h3 className="text-white font-medium mb-4">
                  Selected Photos ({previews.length})
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {previews.map((preview, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={preview.url}
                        alt={preview.name}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="absolute top-2 right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <FontAwesomeIcon icon={faTimes} size="xs" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Form Fields */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none"
                  placeholder="Enter photo title"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none"
                  placeholder="Where was this taken?"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
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
                  Tags
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none"
                  placeholder="beach, sunset, tropical (comma separated)"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-white font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none resize-none"
                placeholder="Tell us about your photo and the experience..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <div className="text-dark-400 text-sm">* Required fields</div>
              <button
                type="submit"
                disabled={uploading || selectedFiles.length === 0}
                className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {uploading ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} spin />
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
        </div>
      </section>
    </div>
  );
}
