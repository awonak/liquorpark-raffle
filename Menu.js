// Custom menu items.
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Raffle Drawing')
      .addItem('Pick Winners', 'doRaffleDrawing')
      .addItem('Email Winners', 'doEmailWinners')
      .addToUi();
}
