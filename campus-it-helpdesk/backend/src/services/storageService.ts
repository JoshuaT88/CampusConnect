import fs from 'fs';
import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const tenant = req.body.tenant;
    const ticketId = req.body.ticketId;
    const uploadPath = path.join(__dirname, '../uploads', tenant, ticketId.toString());

    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

export const uploadFile = upload.single('file');

export const getUploadedFiles = (tenant, ticketId) => {
  const uploadPath = path.join(__dirname, '../uploads', tenant, ticketId.toString());
  return fs.readdirSync(uploadPath).map(file => ({
    url: `/uploads/${tenant}/${ticketId}/${file}`,
    mime: path.extname(file),
    uploadedBy: 'system', // Placeholder, should be replaced with actual uploader info
    createdAt: new Date() // Placeholder, should be replaced with actual upload time
  }));
};