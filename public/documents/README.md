# Resume File Location

## Where to Add Your Resume

Place your resume PDF file in this directory with the following exact name:

```
Doney_Biju_John_Resume.pdf
```

**Full path:** `E:\Projects\soc-profolio\public\documents\Doney_Biju_John_Resume.pdf`

## Important Notes

1. The file name must be exactly: `Doney_Biju_John_Resume.pdf`
2. The file must be a PDF format
3. Keep the file size reasonable (under 5MB recommended)
4. The download button has a rate limit of 3 downloads per hour per user

## Rate Limiting Details

- **Maximum Downloads:** 3 downloads per hour
- **Reset Time:** 1 hour (60 minutes)
- **Storage:** Uses browser localStorage to track downloads
- **User Notification:** Toast notification shows remaining downloads

## How It Works

When a user clicks the "Download Resume" button in the Hero section:
1. System checks if they've exceeded 3 downloads in the past hour
2. If under limit: PDF downloads and counter increments
3. If over limit: Shows error message with time remaining
4. Counter resets after 1 hour from first download

## Testing

To test the download functionality:
1. Add your resume PDF to this folder
2. Run the development server: `npm run dev`
3. Click the "Download Resume" button on the homepage
4. The PDF should download automatically
5. Try downloading 4 times to test the rate limit

## Updating the Resume

Simply replace the existing PDF file with your updated version. Make sure to keep the same filename.
