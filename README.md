# File Sharing Application

This is a Node.js and Express-based backend for a file sharing application. It allows users to upload files, generate shareable download links, and download files via secure endpoints.

## Demo Links

- **Base URL:** https://filesharing-app-gven.onrender.com

### API Endpoints
1. **Upload File**  
   `POST https://filesharing-app-gven.onrender.com/api/file/upload`  
   - Use `multipart/form-data` with key `profilePicture` to upload a file.

2. **Share File**  
   `POST https://filesharing-app-gven.onrender.com/api/file/share`  
   - Send JSON body:
     ```json
     {
       "id": "<fileId>"
     }
     ```
   - Returns a `downloadUrl` for the given file.

3. **Download File**  
   `GET https://filesharing-app-gven.onrender.com/api/file/download/:id`  
   - Replace `:id` with the file’s ID to download the original file.

## Features

- File uploads using Multer
- File metadata stored in MongoDB
- Automatic filename UUID generation
- Shareable download links
- Download count tracking

## Getting Started

### Prerequisites
- Node.js v14+  
- npm or Yarn  
- MongoDB Atlas or local MongoDB instance

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/PriyaMaity/FileSharing_App.git
   cd file-sharing-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file** in the project root:
   ```env
   PORT=8080
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Start the server**
   ```bash
   npm start
   ```

The API will be available at `http://localhost:8080` by default.

## Environment Variables

| Key        | Description                          |
| ---------- | ------------------------------------ |
| `PORT`     | Port number to run the server on     |
| `MONGO_URI`| MongoDB connection string            |

## Project Structure

```
├── controllers/
│   └── fileController.js
├── middleware/
│   └── upload.js
├── models/
│   └── fileModel.js
├── routes/
│   └── fileRoutes.js
├── uploadedFiles/          # local upload folder (dev only)
├── index.js
├── package.json
└── README.md
```

## Notes

- In production, consider using a persistent volume or external storage (e.g., S3 or GridFS) for file persistence.
- Ensure the `uploadedFiles/` folder exists locally before running the server.

---

Happy file sharing!

