// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Hey there, Welcome to YuvaCracy";
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "You are on YuvaCracy bot!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Thanks for your love, keep smiling!")
}

// Press enter to send a message
$("#textInput").keypress(function(e) {
    if (e.which == 13) {
        getResponse();
    }
});

function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there, Welcome to the YuvaCracy Bot!";
    } else if (input == "hi") {
        return "Hello there, Welcome to the YuvaCracy Bot!";
    } else if (input == "hey") {
        return "Hello there, Welcome to the YuvaCracy Bot!";
    } else if (input == "Hi") {
        return "Hello there, Welcome to the YuvaCracy Bot!";
    } else if (input == "Hello") {
        return "Hello there, Welcome to the YuvaCracy Bot!";
    } else if (input == "Hey") {
        return "Hello there, Welcome to the YuvaCracy Bot!";
    } else if (input == "What is YuvaCracy?") {
        return "YuvaCracy Foundation is a youth-led organization, It acts as a forum for young people to network and socialize. We are actively involved in youth-oriented development programs, policies and mobilization.";
    }
    else if (input == "What is YuvaCracy") {
        return "YuvaCracy Foundation is a youth-led organization, It acts as a forum for young people to network and socialize. We are actively involved in youth-oriented development programs, policies and mobilization.";
    }
    else if (input == "What is yuvacracy?") {
        return "YuvaCracy Foundation is a youth-led organization, It acts as a forum for young people to network and socialize. We are actively involved in youth-oriented development programs, policies and mobilization.";
    } else if (input == "What is yuvacracy") {
        return "YuvaCracy Foundation is a youth-led organization, It acts as a forum for young people to network and socialize. We are actively involved in youth-oriented development programs, policies and mobilization.";
    } else if (input == "what is yuvacracy?") {
        return "YuvaCracy Foundation is a youth-led organization, It acts as a forum for young people to network and socialize. We are actively involved in youth-oriented development programs, policies and mobilization.";
    }
    else if (input == "what is yuvacracy") {
        return "YuvaCracy Foundation is a youth-led organization, It acts as a forum for young people to network and socialize. We are actively involved in youth-oriented development programs, policies and mobilization.";
    }
    else if (input == "tell me about yuvacracy") {
        return "YuvaCracy Foundation is a youth-led organization, It acts as a forum for young people to network and socialize. We are actively involved in youth-oriented development programs, policies and mobilization.";
    } else if (input == "Tell me about YuvaCracy") {
        return "YuvaCracy Foundation is a youth-led organization, It acts as a forum for young people to network and socialize. We are actively involved in youth-oriented development programs, policies and mobilization.";
    } else if (input == "Tell me about Yuvacracy") {
        return "YuvaCracy Foundation is a youth-led organization, It acts as a forum for young people to network and socialize. We are actively involved in youth-oriented development programs, policies and mobilization.";
    } else if (input == "yuvacracy") {
        return "YuvaCracy Foundation is a youth-led organization, It acts as a forum for young people to network and socialize. We are actively involved in youth-oriented development programs, policies and mobilization.";
    } else if (input == "YuvaCracy") {
        return "YuvaCracy Foundation is a youth-led organization, It acts as a forum for young people to network and socialize. We are actively involved in youth-oriented development programs, policies and mobilization..";
    } else if (input == "goodbye") {
        return "Hope you will come back soon!";
    } else if (input == "bye") {
        return "Hope you will come back soon!";
    } else if (input == "Bye") {
        return "Hope you will come back soon!";
    } else if (input == "BYE") {
        return "Hope you will come back soon!";
    } else if (input == "GOODBYE") {
        return "Hope you will come back soon!";
    } else if (input == "Goodbye") {
        return "Hope you will come back soon!";
    } else if (input == "vision") {
        return "In new and emerging democracies, the inclusion of young people in formal democratic processes is important from the beginning. Therefore, we are trying to build a forum where the youth can not only voice their opinion, but can also exchange their ideas and involve themselves in day-to-day socio-economic, cultural as well as political affairs. ";
    } else if (input == "Vision") {
        return "In new and emerging democracies, the inclusion of young people in formal democratic processes is important from the beginning. Therefore, we are trying to build a forum where the youth can not only voice their opinion, but can also exchange their ideas and involve themselves in day-to-day socio-economic, cultural as well as political affairs. ";
    } else if (input == "what is the vision?") {
        return "In new and emerging democracies, the inclusion of young people in formal democratic processes is important from the beginning. Therefore, we are trying to build a forum where the youth can not only voice their opinion, but can also exchange their ideas and involve themselves in day-to-day socio-economic, cultural as well as political affairs. ";
    } else if (input == "What is the Vision?") {
        return "In new and emerging democracies, the inclusion of young people in formal democratic processes is important from the beginning. Therefore, we are trying to build a forum where the youth can not only voice their opinion, but can also exchange their ideas and involve themselves in day-to-day socio-economic, cultural as well as political affairs. ";
    } else if (input == "what is the vision") {
        return "In new and emerging democracies, the inclusion of young people in formal democratic processes is important from the beginning. Therefore, we are trying to build a forum where the youth can not only voice their opinion, but can also exchange their ideas and involve themselves in day-to-day socio-economic, cultural as well as political affairs. ";
    } else if (input == "motto") {
        return "We aim to do this by galvanizing young leaders as well as bridging the gap between the youth and experts."
    } else if (input == "Motto") {
        return "We aim to do this by galvanizing young leaders as well as bridging the gap between the youth and experts."
    } else if (input == "mission") {
        return "We aim to do this by galvanizing young leaders as well as bridging the gap between the youth and experts."
    } else if (input == "Mission") {
        return "We aim to do this by galvanizing young leaders as well as bridging the gap between the youth and experts."
    } else if (input == "What is the motto of the YuvaCracy?") {
        return "We aim to do this by galvanizing young leaders as well as bridging the gap between the youth and experts."
    } else if (input == "what is the motto of the yuvacracy?") {
        return "We aim to do this by galvanizing young leaders as well as bridging the gap between the youth and experts."
    } else if (input == "what is the motto of the yuvacracy") {
        return "We aim to do this by galvanizing young leaders as well as bridging the gap between the youth and experts."
    } else if (input == "What is the motto of the yuvacracy") {
        return "We aim to do this by galvanizing young leaders as well as bridging the gap between the youth and experts."
    } else if (input == "What is the motto of the YuvaCracy") {
        return "We aim to do this by galvanizing young leaders as well as bridging the gap between the youth and experts."
    } else if (input == "What is the mission of the YuvaCracy?") {
        return "We aim to do this by galvanizing young leaders as well as bridging the gap between the youth and experts."
    } else if (input == "what is the mission of the yuvacracy?") {
        return "We aim to do this by galvanizing young leaders as well as bridging the gap between the youth and experts."
    } else if (input == "Why YuvaCracy?") {
        return "Supporting youth in their personal learning journeys by connecting professionals with the youth who love to learn and enhance their skills."
    } else if (input == "why yuvacracy?") {
        return "Supporting youth in their personal learning journeys by connecting professionals with the youth who love to learn and enhance their skills."
    } else if (input == "why yuvacracy") {
        return "Supporting youth in their personal learning journeys by connecting professionals with the youth who love to learn and enhance their skills."
    } else if (input == "Why YuvaCracy") {
        return "Supporting youth in their personal learning journeys by connecting professionals with the youth who love to learn and enhance their skills."
    } else if (input == "What kind of organization is YuvaCracy?") {
        return "Supporting youth in their personal learning journeys by connecting professionals with the youth who love to learn and enhance their skills."
    } else if (input == "what kind of organization is yuvacracy?") {
        return "Supporting youth in their personal learning journeys by connecting professionals with the youth who love to learn and enhance their skills."
    } else if (input == "what kind of organization is yuvacracy") {
        return "Supporting youth in their personal learning journeys by connecting professionals with the youth who love to learn and enhance their skills."
    } else if (input == "What kind of organization is YuvaCracy") {
        return "Supporting youth in their personal learning journeys by connecting professionals with the youth who love to learn and enhance their skills."
    } else if (input == "What kind of organization is yuvacracy") {
        return "Supporting youth in their personal learning journeys by connecting professionals with the youth who love to learn and enhance their skills."
    } else {
        let a = "Please Contact us for further queries. "
        let b = "Email us: yuvacracyorg@gmail.com, "
        let c = "Phone: +919876543210 "
        return a + b + c;
    }
}
