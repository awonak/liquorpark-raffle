/**
 * A trigger-driven function that generates and send an email to each winner.
 */
function doEmailWinners() {
  // Grab the form responses to pick winners at random.
  var rows = BOTTLE_ALLOTMENTS_SHEET.getDataRange().getValues();
  rows.shift();

  for (var i = 0; i < rows.length; i++) {
    if (rows[i][0]) {
      var winner = new Winner(rows[i]);
      sendEmail(winner);
    }
  }
}

function sendEmail(winner) {
  // create and send an email for the given winner's data.
  var body = getEmailText(winner);
  var htmlBody = getEmailHtml(winner);

  MailApp.sendEmail({
    to: winner.email,
    bcc: WINNER_EMAIL_BCC,
    replyTo: WINNER_EMAIL_REPLY_TO,
    name: WINNER_EMAIL_NAME,
    subject: WINNER_EMAIL_SUBJECT,
    body: body,
    htmlBody: htmlBody
  });
}

function getEmailHtml(winner) {
  var htmlTemplate = HtmlService.createTemplateFromFile("WinnerTemplate");
  htmlTemplate.winner = winner;
  return htmlTemplate.evaluate().getContent();
}

function getEmailText(winner) {
  var text = `${winner.full_name},

Congratulations! You have been selected as a Liquor Park BCBS raffle winner! Our very sophisticated computers have determined that you have the opportunity to purchase the following bottle allocation:

2x ${winner.allotment[0].name}
${winner.allotment[0].price} per bottle
1x ${winner.allotment[1].name}
${winner.allotment[1].price} per bottle
1x ${winner.allotment[2].name}
${winner.allotment[2].price} per bottle
1x ${winner.allotment[3].name}
${winner.allotment[3].price} per bottle
1x ${winner.allotment[4].name}
${winner.allotment[4].price} per bottle

Total cost ${winner.total} (plus tax)

Verification: ${winner.verification}

To claim this allocation, come in to Liquor Park by Friday, December 11th before closing (7:00 p.m.) to pick up and purchase. Any allocations not claimed by this time will be forfeited. Reply to this email with any questions.

Cheers,
Liquor Park`;
  return text;
}
