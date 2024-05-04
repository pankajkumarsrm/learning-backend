import multer from "multer";

// copy code multer website

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    //   cb(null, file.fieldname + '-' + uniqueSuffix)  // isme file name change ker sakte hai
    cb(null, file.originalname); // jo file ka name hoga wahi rahega
  },
});

export const upload = multer({ storage });
