/**
 * A trigger-driven function that randomly assigns form responses to 
 * bottle allotments.
 */
function doRaffleDrawing() {
  // Grab the form responses to pick winners at random.
  var responses = FORM_RESPONSES_SHEET.getDataRange().getValues();
  responses.shift();
  
  // Get Bottle Allotment sheet.
  var sheet = BOTTLE_ALLOTMENTS_SHEET;
  
  for (var i = 2; i <= RAFFLE_PRIZES; i++) {
    var winner = pickRandomWinner(responses);
    if (winner == null) {
      break;
    }
    Logger.log("doRaffleDrawing: Winner #" + i + ": ", winner);
    var uuid = Utilities.getUuid();
    var verification = shortUuid(uuid);
    var email = winner[FORM_EMAIL];
    var name = winner[FORM_NAME];
    
    // Set winner values
    sheet.getRange(i, EMAIL_COL).setValue(email);
    sheet.getRange(i, NAME_COL).setValue(name);
    sheet.getRange(i, VERIFICATION_COL).setValue("=TO_TEXT(\""+verification+"\")");
    sheet.getRange(i, UUID_COL).setValue(uuid);
  }
}

function shortUuid(uuid) {
  return uuid.substring(0, SHORT_UUID_LEN).toUpperCase();
}

function pickRandomWinner(responses) {
  if (responses.length == 0) {
    Logger.log("pickRandomWinner: No more responess.");
    return;
  }
  var n = newRandomNumberFromPool(responses.length);
  // Pop row from array and return row.
  return responses.splice(n, 1)[0];
}

function newRandomNumberFromPool(poolCount) {
  if (poolCount == 0) {
    return 0;
  }
  return Math.floor(Math.random() * poolCount);
}

