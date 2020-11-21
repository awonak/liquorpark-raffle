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

Make changes

```
$ clasp push
```

Test changes at

https://script.google.com/a/drinkliquorpark.com/macros/s/$DEPLOYMENT_ID/dev

```
$ clasp deploy [version]
```

https://script.google.com/a/drinkliquorpark.com/macros/s/$DEPLOYMENT_ID/exec

