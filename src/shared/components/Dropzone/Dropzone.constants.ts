export const ALLOWED_IMG_FORMATS = {
  'image/jpeg': ['.jpg', '.jpeg']
};

export const ALLOWED_VIDEO_FORMATS = {
  'video/mp4': ['.mp4'],
  'video/mpeg': ['.mpeg'],
  'video/x-msvideo': ['.avi'],
  'video/quicktime': ['.mov']
};

export const ALLOWED_FILE_FORMATS = {
  'text/csv': ['.csv'],
  'application/pdf': ['.pdf'],
  'application/vnd.ms-excel': ['.xls'],
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
};

export enum FileUploadType {
  FILE = 'file',
  IMAGE = 'image',
  VIDEO = 'video'
}

export const AllowedFileFormats = {
  [FileUploadType.IMAGE]: ALLOWED_IMG_FORMATS,
  [FileUploadType.FILE]: ALLOWED_FILE_FORMATS,
  [FileUploadType.VIDEO]: ALLOWED_VIDEO_FORMATS
};

export const DEFAULT_MAX_FILE_SIZE = 10485760;
