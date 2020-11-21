/**
 * HTTP Handler for pickup verification. 
 */
function doGet(e) {
  // Use this to lookup winner.
  var uuid = e.parameter.uuid;
  if (!uuid) {
    return HtmlService.createHtmlOutput('Missing verification number.')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
  }

  // Find winner in bottle allotment spreadsheet.
  winner = getWinner(uuid);
  if (winner == null) {
    return HtmlService.createHtmlOutput('Invalid verification number.')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
  }

  // Render verification confirmation page.  
  var output = HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');

  return output;
}

function processForm(e) {
  console.log(e); 
  if (e.uuid == "") {
    return "ERROR: no uuid provided.";
  }
  // if valid, set this user Claimed to Yes.
  pickupAllotment(e.uuid);
  return "OK";
}

function getWinner(uuid) {
  if (!uuid) {
    console.log("getWinner() called without uuid");
    return null;
  }

  // Grab the form responses to pick winners at random.
  var rows = BOTTLE_ALLOTMENTS_SHEET.getDataRange().getValues();
  rows.shift();
  
  for (var i = 0; i < rows.length; i++) {
    if (rows[i][12] == uuid) {
      return new Winner(rows[i]);
    }
  }
  return null;
}