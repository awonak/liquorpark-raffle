/**
 * 
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
  var t = HtmlService.createTemplateFromFile('Index');
  t.data = {
    verification: winner[2],
    name: winner[1],
    uuid: uuid,
    claimed: winner[9] == "Yes",
    claimedDate: winner[10],
  }
  
  var output = t.evaluate();
  output.addMetaTag('viewport', 'width=device-width, initial-scale=1');

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
  var winners = BOTTLE_ALLOTMENTS_SHEET.getDataRange().getValues();
  winners.shift();
  
  var winner = null;
  for (var i = 0; i < winners.length; i++) {
    if (winners[i][12] == uuid) {
      winner = winners[i];
      break;
    }
  }
  return winner;
}