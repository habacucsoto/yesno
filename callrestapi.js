const url = "http://34.127.94.67:8080/api/response";

function postResponse() {
    console.log(url);

    let myResponse = $("#response").val();
    let myGif = $("#gif").val();
    let myData = {
        response: myResponse,
        gif: myGif
    };

    console.log(myData);

    $.ajax({
        url,
        type: "post",
        dataType: "json",
        contentType: "application/json",
        success: data => {
            console.log(data);
            $("#resultado").html(JSON.stringify(data.response));
        },
        data: JSON.stringify(myData)
    })
}

function getResponse() {
    console.log(url);

    $.getJSON(url, ({ response }) => {
        console.log(response);

        // let { id, response: responseData, gif } = response
        // let htmlTableResponse = "<table border='1'>" +
        //                             "<tr>" +
        //                                 "<td>" +
        //                                 id +
        //                                 "</td>" +
        //                                 "<td>" +
        //                                 responseData +
        //                                 "</td>" +
        //                                 "<td>" +
        //                                 `<img src="${gif}" alt="gif" width="150">` +
        //                                 "</td>" +
        //                             "</tr>" +
        //                         "</table>";

        let arrResponses = response;
        let htmlTableResponse = '<table border="1">';

        arrResponses.forEach(({ id, response: responseData, gif }) => {
            console.log(id, response, gif);
            htmlTableResponse +=
                "<tr>" +
                "<td>" +
                id +
                "</td>" +
                "<td>" +
                responseData +
                "</td>" +
                "<td>" +
                `<img src="${gif}" alt="gif" width="150">` +
                "</td>" +
                "</tr>";
        });

        htmlTableResponse += "</table>";


        $("#resultado").html(htmlTableResponse);
    });
}


