// Apps Script > File > ProjectpProperties > Script ID
SCRIPT_ID = ScriptApp.getScriptId();
WEBAPP_URL = ScriptApp.getService().getUrl();

// Sheet references.
FORM_RESPONSES_SHEET = SpreadsheetApp.getActive().getSheetByName('Form Responses 1');
BOTTLE_ALLOTMENTS_SHEET = SpreadsheetApp.getActive().getSheetByName('Bottle Allotments');
BOTTLE_COST_SHEET = SpreadsheetApp.getActive().getSheetByName('Bottle Cost');

// Form Response Column Indexes.
FORM_EMAIL = 1;
FORM_NAME = 2;

// Bottle Allotment Column Indexes.
EMAIL_COL = 1;
NAME_COL = 2;
VERIFICATION_COL = 3;
PICKUP_COL = 10;
UUID_COL = 13;

// The number of prizes for winners.
RAFFLE_PRIZES = BOTTLE_ALLOTMENTS_SHEET.getLastRow();

// Length of the short uuid for human verification.
SHORT_UUID_LEN = 4;

WINNER_EMAIL_SUBJECT = "Liquor BCBS Park Raffle Winner!";
WINNER_EMAIL_REPLY_TO = "team@drinkliquorpark.com";
WINNER_EMAIL_NAME = "LiquorPark";
