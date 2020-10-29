function sendEmailAlert() {

  var ss = SpreadsheetApp.getActiveSpreadsheet();

  var sheetname = ss.getActiveSheet().getName();
  var user = Session.getActiveUser().getEmail();
  var cell = ss.getCurrentCell()
  var col = cell.getColumn();
  var row = cell.getRow();
  
  var Toemail = 'my_email@gmail.com';
  var subject = 'New Entry -' + ss.getName();
  var body = 'Your file has a new entry in - ' + sheetname + ' Updated by - ' + user +
    ' check file now- ' + ss.getUrl();

  
  if(col === 2 |col === 1) {
    MailApp.sendEmail(Toemail,subject, body);
 }

};