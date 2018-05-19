function MMMMDDYYYY(i){ //this function accepts an Complete ISO-8601 date('YYYY-MM-DDT00:00:00.000Z')
                         var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                         var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                         var now = new Date(i);
                         return months[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear(); //returns 'Month Day, Year' date format
                       }
