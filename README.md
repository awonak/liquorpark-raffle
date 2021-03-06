# Liquor Park BCBS Raffle

Providing an automated way to handle the Liquor Park BCBS raffle.

Features raffle entry form, pick unique winners, send allotment and pickup email to winners, verify winners via QR code or short verification number.

# Getting Started

Copy the Raffle Form template

https://docs.google.com/forms/d/1UYpGFn5ZZ_P-ygJP_to95a5J-jUbi0wWjR1tqqtIgQk/copy

Copy the Raffle Spreadsheet template

https://docs.google.com/spreadsheets/d/1Wgy69f5KlQHIwC5KyhMUhMLvM3pDeKYkiOmNUSfDjJA/copy

Now connect responses Spreadsheet to the Form > Responses > Select response destination.

Search for the recently copied spreadsheet name, default: "Copy of [TEMPLATE] Liquor Park BCBS Raffle".

# Making changes to the scrips

Get the ScriptID from Apps Script > File > ProjectpProperties > Script ID

```
$ clasp login
$ clasp clone $SCRIPT_ID
```

Make changes to the Apps Script code and push changes.

```
$ clasp push
```

Test changes at

https://script.google.com/a/drinkliquorpark.com/macros/s/$DEPLOYMENT_ID/dev

```
$ clasp deploy [version]
```

https://script.google.com/a/drinkliquorpark.com/macros/s/$DEPLOYMENT_ID/exec

# Running the Raffle

Before opening the raffle, ensure all rules and dates are correct.

Prepare winner allotment packs ahead of time.

## Raffle Entries

1. Share the Raffle Form URL during the open entry period.
1. When Raffle entry period has ended, disable form:

    Raffle Form > Responses > Accepting responses

## Select Winners

1. Manually review Form Responess in Spreadsheet.
1. From the Spreadsheet, select Raffle Drawing > Pick Winners.
1. Notify winners by selecting Raffle Drawing > Email Winners.
1. Write the Verification number on each allotment for easy pickup.

## Verify Winners

1. Winners will present the winner email with QR code and Verification number.
1. Scan code with phone to load verification webapp.
   * Verification page is only accessible to @drinkliquorpark.com accounts.
   * Verification page will confirm code and show allotment.
   * If allotment has already been picked up, timestamp of pickup will be displayed.
1. Click "Confirm Pickup" to update the Spreadsheet with pickup timestamp.
1. (Optional) Instead of QR code, manually change spreadsheet "Claimed" column to "Yes".
1. Distribute winner allotment.

## Unclaimed Allotments

After the pickup period has expired, remaining allotment will be made available to public.