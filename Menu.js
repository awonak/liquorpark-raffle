
// Custom menu items.
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Raffle Drawing')
      .addItem('Pick Winners', 'doRaffleDrawing')
      .addItem('Email Winners', 'doEmailWinners')
      .addItem('TEST Email Winners', 'menuItemTestEmail')
      .addToUi();
}

function menuItemTestEmail() {
  testEmail();
}