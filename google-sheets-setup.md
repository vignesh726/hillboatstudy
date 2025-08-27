# Google Sheets Setup Instructions

## Step 1: Create Google Sheet
1. Go to Google Sheets and create a new sheet
2. Add headers in row 1: Name | Email | Phone | Timestamp

## Step 2: Create Google Apps Script
1. In your Google Sheet, go to Extensions > Apps Script
2. Replace the default code with:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = e.parameter;
  
  sheet.appendRow([
    data.name,
    data.email,
    data.phone,
    new Date()
  ]);
  
  return ContentService.createTextOutput('Success');
}
```

## Step 3: Deploy Script
1. Click "Deploy" > "New deployment"
2. Choose "Web app" as type
3. Set execute as "Me" and access to "Anyone"
4. Click "Deploy" and copy the URL

## Step 4: Update React Code
Replace YOUR_SCRIPT_ID in SignupForm.js with your script URL