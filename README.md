# Passport Photo Cropper

A browser-based photo cropper for quickly generating a printable passport-style image.

## What works
- Upload a portrait image
- Adjust zoom and offsets with sliders
- Preview the crop guide on a white background
- Export a PNG locally

## Run locally
```bash
python3 -m http.server 8000
# then open http://localhost:8000/index.html
```

## Meaningful user path
1. Upload a selfie
2. Adjust framing with the sliders
3. Download the cropped PNG

## Known gaps
- Manual framing only, no automatic face detection yet
- Background replacement is simplified to a white canvas
- Country-specific templates beyond the default are not included yet
