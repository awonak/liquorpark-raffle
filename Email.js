function testEmail() {
  var winner = [];
  winner[0] = "adam.wonak+lp-raffle@gmail.com";
  winner[1] = "Adam Wonak";
  winner[2] = "937B";
  winner[11] = "$115.94";
  winner[12] = "937b2e97-7aa6-4d88-beac-e82783369720";
  data = getData(winner);
  sendEmail(data);
}

/**
 * A trigger-driven function that generates and send an email to each winner.
 */
function doEmailWinners() {
  // Grab the form responses to pick winners at random.
  var winners = BOTTLE_ALLOTMENTS_SHEET.getDataRange().getValues();
  winners.shift();
  
  for (var i = 0; i < winners.length; i++) {
    while (data = getData(winners[i])) {
      sendEmail(data);
    }
  }
}

function sendEmail(data) {
  // create and send an email for the given winner's data.
  var body = getEmailText(data);
  var htmlBody = getEmailHtml(data);

  MailApp.sendEmail({
    to: data.email,
    subject: "Liquor BCBS Park Raffle Winner!",
    body: body,
    htmlBody: htmlBody
  });
}

function getData(winner) {
  if (!winner[0]) {
    return null;
  }
  var email = winner[0];
  var full_name = winner[1];
  var verification = winner[2];
  var uuid = winner[12];

  // TODO: make this a const.
  var url = `https://script.google.com/a/drinkliquorpark.com/macros/s/AKfycbwh35PoWk_EwOwYcBgOiIUPwMcwJduf2icmP_xQOv27CnHljFk/exec?uuid=${uuid}`
  // TODO: make this dynamic?
  var allotment = {};
  allotment.bottle5name = "Anniversary";
  allotment.bottle5price = "$19.99";
  allotment.bottle6name = "Proprietor’s";
  allotment.bottle6price = "$24.99";
  var total = winner[11];
  
  return {
    "email": email,
    "full_name": full_name,
    "verification": verification,
    "allotment": allotment,
    "total": total,
    "url": encodeURI(url),
  };
}

function getEmailHtml(data) {
  var htmlTemplate = HtmlService.createTemplateFromFile("WinnerTemplate.html");
  htmlTemplate.data = data;
  return htmlTemplate.evaluate().getContent();
}

function getEmailText(data) {
  var text = `f${data.full_name},

Congratulations! You were selected as a Liquor Park BCBS raffle winner! You
have the opportunity to purchase the following bottle allotment:

${data.verification}

2x Original $12.99 per bottle
1x Special 4 $19.99 per bottle
1x Carmella $19.99 per bottle
1x ${data.allotment.bottle5name} ${data.allotment.bottle5price} per bottle
1x ${data.allotment.bottle6name} ${data.allotment.bottle6price} per bottle
Total cost ${data.total} (plus tax)

You must bring this email to pick up your allotment by Friday, December
11th or your allotment will be forfeited.

Cheers,
Liquor Park`;
  return text;
}
