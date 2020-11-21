/**
 * Winner is a class representing the computed fields for a raffle winner.
 */
class Winner {
    constructor(row) { // Bottle Allotment Spreadsheet row
        this.email = row[0];
        this.full_name = row[1];
        this.verification = row[2];
        this.uuid = row[12];

        this.claimed = row[9] == "Yes";
        this.claimedDate = row[10];

        // TODO: make this a const.
        this.url = `https://script.google.com/a/drinkliquorpark.com/macros/s/AKfycbwh35PoWk_EwOwYcBgOiIUPwMcwJduf2icmP_xQOv27CnHljFk/exec?uuid=${this.uuid}`

        this.bottleCost = this._bottleCost();
        this.allotment = [];
        for (var i = 4, j = 0; i < 9; i++, j++) {
            this.allotment[j] = {};
            this.allotment[j].name = row[i];
            this.allotment[j].price = this.bottleCost[row[i]];
        }
        this.total = row[11];
    }

    _bottleCost() {
        var bottleCost = BOTTLE_COST_SHEET.getDataRange().getValues();
        bottleCost.shift();

        var costs = {};
        for (var i = 0; i < bottleCost.length; i++) {
            costs[bottleCost[i][0]] = bottleCost[i][1];
        }
        return costs;
    }

  }
        