function doGet(e){
  try {
    var output = HtmlService.createTemplateFromFile('index');
    var html = output.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
    return html;
  }
  catch(e){
    return ContentService.createTextOutput(JSON.stringify({
      'error' : e
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getRandom(){
   return (new Date().getTime()).toString(36); 
}

function addData(data){
  console.log(data);
   var ss = SpreadsheetApp.openById('1v5Moj_BBksP7XLFODLajzbXv0R971T_Qekr3XKTCcjc');
   var sheet = ss.getSheetByName('Response');
   var user = Session.getActiveUser().getEmail();
   var createdDate = Date();
   var newId = getRandom();
   var holder = [data.first,data.last,data.email, createdDate, newId, data.service, data.enquiry, user, data.enquiryType];
   sheet.appendRow(holder);
   var services = [data.first, data.last,data.service, createdDate, newId, data.enquiry, user, data.enquiryType];
   sendAnEmail(holder, services);
  switch(data.service){
    case 'Volunteering':
      var mailAddress = 'kengsurachai@gmail.com';
      var userMessage = services[7]+'<h1>Message received from '+services[0]+' '+services[1]+'</h1><br><h4>Please see message below.</h4><br> <p>'+services[5]+'.</p> ';
      MailApp.sendEmail(mailAddress, services[7]+ ' Message ID: '+services[4]+' Received from '+services[0]+ ' '+services[1]+' regarding '+services[2], ''+services[5]);
      break;
      case 'Home Help':
      var mailAddress = 'kengsurachai@gmail.com';
      var userMessage = services[7]+'<h1>Message received from '+services[0]+' '+services[1]+'</h1><br><h4>Please see message below.</h4><br> <p>'+services[5]+'.</p> ';
      MailApp.sendEmail(mailAddress, services[7]+ ' Message ID: '+services[4]+' Received from '+services[0]+ ' '+services[1]+' regarding '+services[2], ''+services[5]);
      break;
      case 'Befriending':
      var mailAddress = 'kengsurachai@gmail.com';
      var userMessage = services[7]+'<h1>Message received from '+services[0]+' '+services[1]+'</h1><br><h4>Please see message below.</h4><br> <p>'+services[5]+'.</p> ';
      MailApp.sendEmail(mailAddress, services[7]+ ' Message ID: '+services[4]+' Received from '+services[0]+ ' '+services[1]+' regarding '+services[2], ''+services[5]);
      break;
      case 'Information & Advice':
      var mailAddress = 'kengsurachai@gmail.com';
      var userMessage = services[7]+'<h1>Message received from '+services[0]+' '+services[1]+'</h1><br><h4>Please see message below.</h4><br> <p>'+services[5]+'.</p> ';
      MailApp.sendEmail(mailAddress, services[7]+ ' Message ID: '+services[4]+' Received from '+services[0]+ ' '+services[1]+' regarding '+services[2], ''+services[5]);
      break;
      case 'Donations':
      var mailAddress = 'kengsurachai@gmail.com';
      var userMessage = services[7]+'<h1>Message received from '+services[0]+' '+services[1]+'</h1><br><h4>Please see message below.</h4><br> <p>'+services[5]+'.</p> ';
      MailApp.sendEmail(mailAddress, services[7]+ ' Message ID: '+services[4]+' Received from '+services[0]+ ' '+services[1]+' regarding '+services[2], ''+services[5]);
      break;
      case 'Fundraising':
      var mailAddress = 'kengsurachai@gmail.com';
      var userMessage = services[7]+'<h1>Message received from '+services[0]+' '+services[1]+'</h1><br><h4>Please see message below.</h4><br> <p>'+services[5]+'.</p> ';
      MailApp.sendEmail(mailAddress, services[7]+ ' Message ID: '+services[4]+' Received from '+services[0]+ ' '+services[1]+' regarding '+services[2], ''+services[5]);
      case 'Media':
      var mailAddress = 'kengsurachai@gmail.com';
      var userMessage = services[7]+'<h1>Message received from '+services[0]+' '+services[1]+'</h1><br><h4>Please see message below.</h4><br> <p>'+services[5]+'.</p> ';
      MailApp.sendEmail(mailAddress, services[7]+ ' Message ID: '+services[4]+' Received from '+services[0]+ ' '+services[1]+' regarding '+services[2], ''+services[5]);
      break;
      case 'Invoice Query':
      var mailAddress = 'kengsurachai@gmail.com';
      var userMessage = services[7]+'<h1>Message received from '+services[0]+' '+services[1]+'</h1><br><h4>Please see message below.</h4><br> <p>'+services[5]+'.</p> ';
      MailApp.sendEmail(mailAddress, services[7]+ ' Message ID: '+services[4]+' Received from '+services[0]+ ' '+services[1]+' regarding '+services[2], ''+services[5]);
      break;
      case 'Compliment':
      var mailAddress = 'kengsurachai@gmail.com';
      var userMessage = services[7]+'<h1>Message received from '+services[0]+' '+services[1]+'</h1><br><h4>Please see message below.</h4><br> <p>'+services[5]+'.</p> ';
      MailApp.sendEmail(mailAddress, services[7]+ ' Message ID: '+services[4]+' Received from '+services[0]+ ' '+services[1]+' regarding '+services[2], ''+services[5]);
      break;
      case 'Consent':
      var mailAddress = 'kengsurachai@gmail.com';
      var userMessage = services[7]+'<h1>Message received from '+services[0]+' '+services[1]+'</h1><br><h4>Please see message below.</h4><br> <p>'+services[5]+'.</p> ';
      MailApp.sendEmail(mailAddress, services[7]+ ' Message ID: '+services[4]+' Received from '+services[0]+ ' '+services[1]+' regarding '+services[2], ''+services[5]);
      break;
      case 'other':
      var mailAddress = 'kengsurachai@gmail.com';
      var userMessage = services[7]+'<h1>Message received from '+services[0]+' '+services[1]+'</h1><br><h4>Please see message below.</h4><br> <p>'+services[5]+'.</p> ';
      MailApp.sendEmail(mailAddress, services[7]+ ' Message ID: '+services[4]+' Received from '+services[0]+ ' '+services[1]+' regarding '+services[2], ''+services[5]);
      break;
  }
   return {
    'trackingid':newId,
    'status':true,
    'added': holder
  }

  function sendAnEmail(holder, services){
     var emailAddress = holder[2] || Session.getActiveUser().getEmail();
     var message = '<h1>Thank you for your enquiry, '+holder[0]+'</h1><br><h4>Your message has been received successfully.</h4> <p> Your enquiry has been passed to the relevant team and we endeavour to respond to all enquiries within 24 hours Mon - Friday.</p> ';
     MailApp.sendEmail(emailAddress, ""+holder[0]+" your Query ID: "+holder[4]+" has been received.", '',{
      htmlBody:message,
      name:'surachai',
    });
  }
 }
