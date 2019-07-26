var $messages = $('.messages-content'),
    d, h, m,
    i = 0; //Initialising the variables namely msg content date, hour,min

$(window).load(function() {
    $messages.mCustomScrollbar();
    setTimeout(function() { //call timestamp
        fakeMessage(); /* call fake message function and display first fake msg*/
    }, 100);
});

function updateScrollbar() {
    $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 10,
        timeout: 0 // timely updation of scrollbar on extensio of the page
    });
}

function setDate() {
    d = new Date()
    if (m != d.getMinutes()) { //retrieve timefrom date function
        m = d.getMinutes();
        $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last')); // appends time to the last message
    }
}

function insertMessage() {
    msg = $('.message-input').val();
    if ($.trim(msg) == '') {
        return false; // takes user entered text message
    }
    $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    $('.message-input').val(null);
    updateScrollbar(); // updating the scrollbar as the messages moves down 
    setTimeout(function() {
        fakeMessage(); // calling the fake messages to be generated
    }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
    insertMessage(); // the send button click inserts the message
});

$(window).on('keydown', function(e) {
    if (e.which == 13) { // 13 is the value for enter key
        insertMessage(); // on the press of enter key which acts similar to send button
        return false;
    }
})

var Fake = [
    'Hey friend, LEO here! and you?', // array of fake messages
    'Nice to meet you',
    'How are you?',
    'Not too bad, thanks',
    'What do you do?',
    'That\'s awesome',
    'Do you love dogs ;) ?',
    'where do you stay ?',
    'Bangalore is a nice place to stay',
    'I think you are a nice person',
    'Why do you think that?',
    'Can you explain?',
    'Anyway i gotta go now',
    'It was a pleasure chat with you',
    'Bye',
    'Leo ran out of messages .. pay 100 Rs. to get a new set of messages',
    'Leo ran out of messages .. pay 100 Rs. to get a new set of messages',
    'Leo ran out of messages .. pay 100 Rs. to get a new set of messages'
]

function fakeMessage() {
    if ($('.message-input').val() != '') { 
        return false;
    }
    $('<div class="message loading new"><figure class="avatar"><img src="img/leo.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();

    setTimeout(function() {
        $('.message.loading').remove();
        $('<div class="message new"><figure class="avatar"><img src="img/leo.png" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
        setDate();
        updateScrollbar();
        i++;
    }, 1000 + (Math.random() * 20) * 100); // for every timeout event remove the loding pattern, display the avatar ,concatenate the fake message and display it on the message box container 
// set the time ,and update the scrolling bar if needed, increment i to get the next fake message from the array of fake messages 
}
