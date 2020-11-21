/**
 * Helper functions for handling pickup confirmation behavior.
 */
function onEdit() {
  var sheet = SpreadsheetApp.getActiveSheet();
  if(sheet.getName() == BOTTLE_ALLOTMENTS_SHEET.getName()) { //checks that we're on the correct sheet
    var r = sheet.getActiveCell();
    if(r.getColumn() == PICKUP_COL && r.getValue() == "Yes") {
      // Set pickup date when changing Claimed column to "Yes".
      markCellClaimed(r);
    }
  }
}

function pickupAllotment(uuid) {
  if (uuid == "") {
    console.log("pickupAllotment: called without uuid.");
    return;
  }
  // Get Bottle Allotment sheet and find row matching uuid.
  var sheet = BOTTLE_ALLOTMENTS_SHEET;
  for (var i = 2; i < RAFFLE_PRIZES; i++) {
    if (sheet.getRange(i, UUID_COL).getValue() == uuid) {
      return markCellClaimed(sheet.getRange(i, PICKUP_COL));
    }
  }
  console.log(`pickupAllotment: could not find matching uuid ${uuid}.`);
}

function markCellClaimed(cell) {
  cell.setValue("Yes");
  var nextCell = cell.offset(0, 1);
  if (nextCell.getValue() === '') {
    nextCell.setValue(new Date());
  }
  return;
}
