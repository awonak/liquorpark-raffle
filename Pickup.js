/**
 * Helper functions for handling pickup confirmation behavior.
 */

// Set pickup date when changing "Claimed" to "Yes".
function onEdit() {
  var s = SpreadsheetApp.getActiveSheet();
  if( s.getName() == "Bottle Allotments" ) { //checks that we're on the correct sheet
    var r = s.getActiveCell();
    if(r.getColumn() == PICKUP_COL && r.getValue() == "Yes") {
      markCellClaimed(r);
    }
  }
}

function pickupAllotment(uuid) {
  if (uuid == "") {
    console.log("pickupAllotment() called without uuid.");
    return;
  }
  // Get Bottle Allotment sheet and find row matching uuid.
  var sheet = BOTTLE_ALLOTMENTS_SHEET;
  for (var i = 2; i < RAFFLE_PRIZES; i++) {
    if (sheet.getRange(i, UUID_COL).getValue() == uuid) {
      console.log("Found matching UUID.");
      return markCellClaimed(sheet.getRange(i, PICKUP_COL));
    }
  }
  var msg = `pickupAllotment(${uuid}) could not find matching uuid.`;
  console.log(msg);
}

function markCellClaimed(cell) {
  cell.setValue("Yes");
  var nextCell = cell.offset(0, 1);
  if (nextCell.getValue() === '') {
    nextCell.setValue(new Date());
  }
  return;
}
