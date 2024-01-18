var pageNumber = 1;


function firstLoad() {
    // For total number of contacts
    var totalContacts = document.getElementById('total-contacts');
    totalContacts.innerHTML = "Total: " + users.length;

    // for pagination buttons
    var total = users.length;
    var numberOfPages = Math.ceil(total/10);
    var pageContainer = document.getElementById('pagination-container');
    pageContainer.innerHTML = "";
    for (var i = 0; i < numberOfPages; i++) {
        var pageItem = document.createElement("li");
        var number = i+1
        pageItem.innerHTML = "<a onclick='changeToPage(" + number + ")'>" + number + "</a>"
        pageContainer.appendChild(pageItem);
    };

    // first 10 contacts
    var contactListContainer = document.getElementById('contact-list-id');
    contactListContainer.innerHTML = "";
    for (var i = 0; i < 10; i++) {
        var user;

        if()

        // if (pageNumer === 1 && i === users.length - 1 ) {
        //     console.log("BReAK above");
        //     break;
        // } else if (pageNumber !== 1 && i + ((pageNumber - 1 ) * 10) === users.length - 1) {
        //     console.log("BReAK below");

        // }

        // console.log("i " + i + " pn " + pageNumber + " index " + (i*pageNumber) );
        // if(pageNumber === 1) {
        //     console.log("HERE page 1");
        //     user = users[i];
        // } else {
        //     user = users[i + (pageNumber * 10)];
        // }

        pageNumber == 1 ? console.log("1 :: " + i) : console.log("not" + (i + ((pageNumber - 1 ) * 10)));

        user = pageNumber == 1 ? users[i] : users[i + ((pageNumber - 1 ) * 10)];
        var list = document.createElement("li");
        list.className = "contact-item cf";
        list.innerHTML = "<div class='contact-details'>"
        +"<img class='avatar' src=" + user.image + ">"
        +"<h3>" + user.name +"</h3>"
        +"<span class='email'>" + user.name + "@example.com" + "</span>"
        +"</div>"
        +"<div class='joined-details'>"
        +"<span class='date'>Joined " + user.joined + "</span>"
        +"</div>";
        contactListContainer.appendChild(list);
    }


};

function changeToPage(num) {
    console.log("HERE" + num + "changed");
    pageNumber = num;
    firstLoad();
}